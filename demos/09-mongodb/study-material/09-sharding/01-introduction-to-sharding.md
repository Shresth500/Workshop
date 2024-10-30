# Introduction to sharding
- As the size of the data grows, and the application demands greater read-and-write throughput, servers may not be able to address enough RAM
- Sharding partitions the database into smaller pieces so that no single machine has to store all the data or handle the entire load.
- In an application, you may have multiple collections - some large and some small. You only shard the collections that would benefit from the added capacity of sharding while leaving the smaller collections unsharded for simplicity
- But all this works completely transparent to the application. The interface for querying a sharded cluster is exactly the same as the interface for querying a replica set or a single mongod server instance.
- Sharding is complex and adds administrative and performance overhead, so make sure your application needs it before going ahead

<div>
    <a href="../08-replication/04-connections.md"><- Previous</a>
    &nbsp;&nbsp;&nbsp;&nbsp;
    <a href="./02-when-to-shard.md">Next -></a>
</div>