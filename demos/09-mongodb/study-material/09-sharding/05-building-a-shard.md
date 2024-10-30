# Building a shard
It is possible to set up a shard on a single machine. We will do so in order to understand the process for setting up sharding. In production however, shards should be on different machines to make it useful.

The process of setting up a sharded cluster involves 3 phases
1. Starting the mongod servers and mongos server.
2. Configuring the cluster — This initializes replica sets adds the shards to the cluster. The nodes will all be able to communicate with each other after this step.
3. Sharding collections — The last step is to shard a collection so that it can be spread across multiple shards. The reason this exists as a separate step is because MongoDB can have both sharded and unsharded collections in the same cluster,
so you must explicitly tell which ones you want to shard.

## Before we get started
The shard cluster we will build will consist of 2 shards (each a replica set with 3 mongod processes) and 3 config servers. We will also start a single mongos to communicate with the cluster.  
Here are the ports of each for reference.
- Shard-A
    - Primary: 30000
    - Secondary: 30001
    - Arbiter: 30002
- Shard-B
    - Primary: 30100
    - Secondary: 30101
    - Arbiter: 30102
- Config servers: 27019, 27020, 27021
- mongos router: 40000

## Starting the components
Let's start by creating the data directories for the two replica sets that will serve as our shards (Linux/Mac).
```
$ mkdir ~/data/rs-a-1
$ mkdir ~/data/rs-a-2
$ mkdir ~/data/rs-a-3
$ mkdir ~/data/rs-b-1
$ mkdir ~/data/rs-b-2
$ mkdir ~/data/rs-b-3
```
__Note__: Do similarly for Windows, using Windows syntax (sample shown below)
```
$ mkdir C:\data\rs-a-1
```
Next, start each mongod. Because you're running so many processes, you'll use the --fork option to run them in the background (for Linux/Mac). If you're running Windows, note that fork won't work for you. Because you'll have to open a new terminal window for each process, you're best off omitting the logpath option as well.
```
$ mongod --shardsvr --replSet shard-a --dbpath ~/data/rs-a-1 --port 30000 --logpath ~/data/rs-a-1.log --fork
$ mongod --shardsvr --replSet shard-a --dbpath ~/data/rs-a-2 --port 30001 --logpath ~/data/rs-a-2.log --fork
$ mongod --shardsvr --replSet shard-a --dbpath ~/data/rs-a-3 --port 30002 --logpath ~/data/rs-a-3.log --fork
$ mongod --shardsvr --replSet shard-b --dbpath ~/data/rs-b-1 --port 30100 --logpath ~/data/rs-b-1.log --fork
$ mongod --shardsvr --replSet shard-b --dbpath ~/data/rs-b-2 --port 30101 --logpath ~/data/rs-b-2.log --fork
$ mongod --shardsvr --replSet shard-b --dbpath ~/data/rs-b-3 --port 30102 --logpath ~/data/rs-b-3.log --fork
```
We now initiate these replica sets. To initialize shard A's replica set
```
$ mongo localhost:30000
> rs.initiate()
```
Once the node becomes PRIMARY, you can add the remaining nodes
```
> rs.add("localhost:30001")
> rs.addArb("localhost:30002")
```
To initialize shard B's replica set
```
$ mongo localhost:30100
> rs.initiate()
```
Wait for it to become PRIMARY, then
```
> rs.add("localhost:30101")
> rs.addArb("localhost:30102")
```
You can verify that both replica sets are online by running the rs.status() command
from the shell on each one.  

Now create each config server's data directory and then start a mongod for each one using the configsvr option (Linux/Mac). RUn appropriate commands for Windows (omit --logpath /data/confix-x.log --fork)
```
$ mkdir ~/data/config-1
$ mkdir ~/data/config-2
$ mkdir ~/data/config-3
$ mongod --configsvr --dbpath ~/data/config-1 --port 27019 --replSet conf --logpath ~/data/config-1.log --fork
$ mongod --configsvr --dbpath ~/data/config-2 --port 27020 --replSet conf --logpath ~/data/config-2.log --fork
$ mongod --configsvr --dbpath ~/data/config-3 --port 27021 --replSet conf --logpath ~/data/config-3.log --fork
```
To initialize conf replica set
```
$ mongo localhost:27019
> rs.initiate()
```
Wait for it to become PRIMARY, then
```
> rs.add("localhost:27020")
> rs.add("localhost:27021")
```
Note that there is no arbiter! If each config server is running, go ahead and start the mongos. It must be started with the configdb option, which takes a comma-separated list of config database addresses (Linux/Mac is shown, run appropriate commands for Windows by omitting the --fork and --logpath options)
```
$ mongos --configdb conf/localhost:27019,localhost:27020,localhost:27021 --logpath ~/data/mongos.log --fork --port 40000
```
__IMPORTANT__: Be careful not to put spaces between the config server addresses when specifying them  

## Configuring the cluster
Start by connecting to mongos. To simplify the task, you'll use the sharding helper methods. These are methods run on the global sh object. To see a list of all available helper methods, run sh.help(). You'll enter a series of configuration commands beginning with the addShard command. The helper for this command is sh.addShard(). This method takes a string
consisting of the name of a replica set, followed by the addresses of two or more seed nodes for connecting. Here you specify the two replica sets you created along with the addresses of the PRIMARY and SECONDARY members of each set.
```
$ mongo localhost:40000
> sh.addShard("shard-a/localhost:30000,localhost:30001")
> sh.addShard("shard-b/localhost:30100,localhost:30101")
```
If successful, the command response will include the name of the shard just added. You can examine the config database's shards collection to see the effect of your work. Instead of using the use command, you'll use the getSiblingDB() method to
switch databases
```
> db.getSiblingDB("config").shards.find()
```
Th output of the above will look like
```
{ "_id" : "shard-a", "host" : "shard-a/localhost:30000,localhost:30001" }
{ "_id" : "shard-b", "host" : "shard-b/localhost:30100,localhost:30101" }
```
As a shortcut, the listshards command returns the same information:
```
> use admin
> db.runCommand( { listshards: 1 } )
```
__Note__: The shell's sh.status() method summarizes the cluster. You can try running it.

## Sharding collections
The next configuration step is to enable sharding on a database. This doesn't do anything on its own, but it's a prerequisite for sharding any collection within a database. The application's database will be called cloud-docs, so you enable sharding like this.
```
> sh.enableSharding("cloud-docs")
```
As before, you can check the config data to see the change you just made. The config database holds a collection called databases that contains a list of databases. Each document specifies the database's primary shard location and whether it's partitioned (whether sharding is enabled):
```
> db.getSiblingDB("config").databases.find()
```
It should give an output like
```
{ "_id" : "admin", "partitioned" : false, "primary" : "config" }
{ "_id" : "cloud-docs", "partitioned" : true, "primary" : "shard-a" }
```
To shard the spreadsheets collection, we need to define a shard key. We will use the compound shard key { username:
1, _id: 1 } because it's good for distributing data and makes it easy to view and comprehend chunk ranges.
```
> sh.shardCollection("cloud-docs.spreadsheets", {username: 1, _id: 1})
```
Again, you can verify the configuration by checking the config database for sharded collections.
```
> db.getSiblingDB("config").collections.findOne()
```
which should give an output like
```
{
    "_id" : "cloud-docs.spreadsheets",
    "lastmod" : ISODate("1970-01-16T00:50:07.268Z"),
    "dropped" : false,
    "key" : {
        "username" : 1,
        "_id" : 1
    },
    "unique" : false
}
```
__Note__: If you are sharding an existing collection, you will have to create an index corresponding to the shard key before
you run the shardcollection command.

## Sharding an empty collection
When you shard an empty collection, MongoDB creates an index corresponding to the shard key on each shard. You can verify this
```
$ mongo localhost:30000
> use cloud-docs
> db.spreadsheets.getIndexes()
```

## Writing to a sharded cluster
Our application needs to connect to mongos server in order to read and write to the database. You use the sharded cloud-docs DB, just as though you would a normal DB on this mongos server.
```
$ mongo localhost:40000
> use cloud-docs;
> db.spreadsheets.insert({
    _id: 1,
    username: 'johndoe',
    data: 'hello from john'
});
> db.spreadsheets.insert({
    _id: 2,
    username: 'marksmith',
    data: 'hello from mark'
});
> db.spreadsheets.insert({
    _id: 3,
    username: 'stevensmith',
    data: 'hello from steve'
});
```

Again, we are not looking into how to connect and use the shard in an application. For the most part, usage is like you would against an unsharded DB - except now we to mongos server instead of the MongoDB server. For connection via Mongoose in Node.js apps you can check [here](https://mongoosejs.com/docs/connections.html#mongos_connections).

<div>
    <a href="./04-ways-to-shard.md"><- Previous</a>
    &nbsp;&nbsp;&nbsp;&nbsp;
    <a href="../10-exercises">Next -></a>
</div>