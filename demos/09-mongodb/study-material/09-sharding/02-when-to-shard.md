# When to shard
There are 2 main reasons to shard
- storage distribution
- load distribution

## Storage distribution
Understanding the storage requirements of your DB is not difficult. 
- Use utilities present on your host operating system to monitor the storage usage of MongoDB (default storage is in /data/db folder).
- Running db.stats() and db.collection.stats() will present statistics on DB and collection storage
- Monitor your storage capacity as your application grows and when the data requirements exceed the capacity of any one node, and adding more capacity isn't possible, sharding may be your best option.

## Load distribution
Understanding the load (CPU, RAM, and I/O bandwidth used by requests from clients) that your system must support is complicated. 
- It is important to have enough RAM to keep indexes and the working data in memory and if the application's data set grows very large, making vertical scaling impossible (adding more RAM etc.), then sharding becomes necessary.
- It may be the case that your working set is a fraction of your total data size and that little RAM may be sufficient.
- If you have an demanding write load, you may want to shard, simply because you need to distribute the load across machines to get the desired write throughput.
- The decision to shard would require regular analyses of network usage, disk usage, CPU usage, and the ratio of working set size, or the amount of data actively being used, to available RAM.

<div>
    <a href="./01-introduction-to-sharding.md"><- Previous</a>
    &nbsp;&nbsp;&nbsp;&nbsp;
    <a href="./03-components-of-a-sharded-cluster.md">Next -></a>
</div>