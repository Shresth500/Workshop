# Connections
MongoDB drivers have options to connect to a replica set. This usage of the driver in an application is beyond the scope of this training. To get a sense of what is possible with the driver when working with a replica set, here are a few points
- You specify a set of primary + secondaries to connect to - this is usually a small subset of the nodes in the replica set
    - This has the distinct advantage of automated failover when compared to connecting to the primary directly (or secondary if you desire only to read).
    - In case of failure in current replica chosen, the driver will connect automatically to one of the initially supplied subset of nodes.
- You need a primary in order to perform writes.
- When performing writes, there is an option called writeConcern that is used according to whether the application is fine with eventual consistency or requires strong consistency.
    - You can specify how many nodes the data is to be replicated before returning from a call to write
    - This provides fine-grained control over the consistency model

## Working with Replica Sets using Mongoose
If you are using Mongoose to handle communication with MongoDB, you can find how to work with replica sets [here](https://mongoosejs.com/docs/connections.html#replicaset_connections).

## Connecting to the DB with Replica Sets using Compass
Use the following connection string
```
mongodb://localhost:40000,localhost:40001,localhost:40002/?replicaSet=myapp
```

<div>
    <a href="./03-verifying-replication-and-failover.md"><- Previous</a>
    &nbsp;&nbsp;&nbsp;&nbsp;
    <a href="../09-sharding/01-introduction-to-sharding.md">Next -></a>
</div>
    
    
