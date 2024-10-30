# Components of a sharded cluster
Several components need to work together to make sharding possible. A sharded cluster consists of
- shards - store the application data. only the mongos routers or system administrators should be connecting directly to the shards.
- mongos routers - cache the cluster metadata and use it to route operations
to the correct shard or shards
- config servers - persistently store metadata about the cluster, including
which shard has what subset of the data

## Shards
A shard is either a single mongod server or a replica set that stores a partition of the application data. Each shard can be a single node for development and testing, but should be a replica set in production. You can connect to an individual shard as you would to a single node or a replica set, but if you try to run operations on that shard directly, you'll see only a portion of the cluster's total data.

## Mongos router
- The mongos process is a router that directs all reads, writes, and commands to the appropriate shard. It provides clients with a single point of contact with the cluster, which is what enables a sharded cluster to present the same interface as an unsharded one.
- mongos processes are lightweight and non-persistent
    - they do not durably store the metadata needed to properly manage the cluster
    - The mongos server caches a local copy of the config server metadata in memory. This metadata has a version ID that changes when the metadata changes, so when a mongos with old metadata tries to contact a shard with a newer metadata version, it receives a notification that it must refresh its local copy
    - They are often deployed on the same machines as the application servers, ensuring that only one network hop is required for requests to any given shard.

## Config servers
The config servers persist cluster metadata durably. This includes
- the global cluster configuration
- the locations of each database, collection, and the particular ranges of data
- a change log preserving a history of the migrations of data across shards  

You must run exactly three config servers in any production deployment of sharding, and these servers must reside on separate machines for redundancy. Every time a mongos process starts, mongos fetches a copy of the metadata from the config servers. The mongos process also writes cluster metadata to them when some configuration in the cluster changes - the write is done across all config servers (it does so using a two-phase commit, which ensures strong consistency).

<div>
    <a href="./02-when-to-shard.md"><- Previous</a>
    &nbsp;&nbsp;&nbsp;&nbsp;
    <a href="./04-ways-to-shard.md">Next -></a>
</div>