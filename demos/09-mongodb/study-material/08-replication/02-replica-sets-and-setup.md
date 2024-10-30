# Replica sets
- Configuration: The minimum recommended replica set configuration consists of three nodes, because in a replica set with only two nodes you can't have a majority in case the primary server goes down (if a majority of the replica set is inaccessible or unavailable, the replica set cannot accept writes and all remaining members become read-only). A three-member replica set can have either three members that hold data or two members that hold data and an arbiter. The primary is the only member in the set that can accept write operations. The nodes keep pinging each other as part of health checks.
- Election: Replica set members go through a process in which they elect a new master by voting. If a primary becomes unavailable, elections allow the set to recover normal operations without manual intervention. Arbiters are lightweight mongod servers that participate in the election of a primary in case of ties.

## Setup
Let's create a simple three-node replica set, all on local system - normally each member would be on a separate machine.  
- Begin by creating a data directory for each replica set member
- For Windows
```
mkdir C:\node1\data\db
mkdir C:\node2\data\db
mkdir C:\arbiter\data\db
```
For Linux/Mac (creates in usre's home directory)
```
mkdir -p ~/node1/data/db
mkdir -p ~/node2/data/db
mkdir -p ~/arbiter/data/db
```
- [Windows] Start each member as a separate mongod, specifying they will be part of the "myapp" replica set (open separate terminals)
```
mongod --replSet myapp --dbpath C:\node1 --port 40000
```
```
mongod --replSet myapp --dbpath C:\node2 --port 40001
```
```
mongod --replSet myapp --dbpath C:\arbiter --port 40002
```

[Linux/Mac]
```
mongod --replSet myapp --dbpath ~/node1 --port 40000
```
```
mongod --replSet myapp --dbpath ~/node2 --port 40001
```
```
mongod --replSet myapp --dbpath ~/arbiter --port 40002
```

- Next we configure the replica set. First connect to one of the non-arbiter mongods just started (say node1)
```
mongo --port 40000
```
Within the shell, we run the rs.initiate() command to bring up a one-member replica set. It will start off node1 as a secondary and then make it primary (takes some time and you will see the prompt change).
```
rs.initiate()
```
- Now in the same shell, add the other two members using rs.add()
```
rs.add("localhost:40001")
db.adminCommand({setDefaultRWConcern:1, defaultWriteConcern: {w:"majority"}})
rs.add("localhost:40002", { arbiterOnly: true } )
```
__Note__:
- It may take a minute or so for all members to be up.
- The arbiter can also be added this way
```
rs.addArb("localhost:40002")
```  

- To get a the replica set status
```
db.isMaster()
```
__Note__:
- You may have trouble with this step because of the line bind_ip = 127.0.0.1 [or] bindIp: 127.0.0.1 in your mongod.conf/mongod.cfg file at /etc/mongod.conf or /usr/local/etc/mongod.conf (Linux/Mac) or C:\Program Files\MongoDB\Server\4.0\bin (Windows). If initiating the replica set prints an error, look for and remove that configuration.
- A get a more detailed view of the system, including other nodes. The stateStr property shows the status of each node in the set.
```
rs.status()
```

__Note__:  A configuration document may be used to specify the configuration of the replica set. You can create
one like so.
```
config = {_id: "myapp", members: []}
config.members.push({_id: 0, host: 'localhost:40000'})
config.members.push({_id: 1, host: 'localhost:40001'})
config.members.push({_id: 2, host: 'localhost:40002', arbiterOnly: true})
rs.initiate( config )
```
- _id is to be the name of the replica set
- The command will verify that each member node has been started with the --replSet option with that name
- Each replica set member requires an _id consisting of increasing integers starting from 0

<div>
    <a href="./01-introduction-to-replication.md"><- Previous</a>
    &nbsp;&nbsp;&nbsp;&nbsp;
    <a href="./03-verifying-replication-and-failover.md">Next -></a>
</div>
