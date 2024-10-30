# Introduction to replication
Failures happen. If you want your data to be available even after a failure, you need to be sure that your databases are available on more than one machine. Replication is the distribution and maintenance of data across multiple servers (nodes).  

Replication provides
- data protection
- high availability
- disaster recovery

## Overview
In MongoDB, a __replica set__ is a group of nodes are configured to automatically synchronize their data and fail over when a node disappears. A single primary node receives all writes, and then all secondary nodes read and apply those writes to themselves asynchronously. If the primary node goes offline for any reason, one of the secondary nodes will automatically be promoted to primary, if possible.

-Ther is a pitfall of replication - the possibility of a rollback. In a replica set, data isn't considered truly committed until it's been written to a majority of member nodes (more than 50% of the servers). Therefore, if your replica set has only 2 servers, this means that no server can be down. If the primary node in a replica set fails before it replicates its data, other members will continue accepting writes, and any unreplicated data must be rolled back.

## Why Replicate?
Replication provides a kind of insurance against failures.
- The network connection between the application and the database is lost
- Planned downtime - the result of a planned downtime is not always predictable
- Reboots and software updates may cause long disruptions. Reboots can also happen due to power loss.
- A hard drive fails on the database server. This can ressult in data loss, a more serious issue.
- When running without journaling enabled, MongoDB's data files may get corrupted in the event of an
unclean shutdown — with journaling enabled data files can't get corrupted (journal entries can be replayed to recover lost data). Without journaling, replication should always be run to guarantee a clean copy of the data files if a single node shuts down hard.  

__Notes__:
- Replicas can live in the same datacenter as the primary, or they can be distributed geographically as an additional failsafe.
- Replicas are not a replacement for backups. A backup represents a snapshot of the database at a particular time in the past, whereas a replica is always up to date.

## Use cases
- Redundancy makes data loss becomes difficult
- (Automatic) Failover enables highly availability
- Enables "undos": Because replication is asynchronous, any sort of network latency will have no effect on the performance of the primary. Replication across nodes can also be delayed intentionally by a constant number of seconds, minutes, or even hours behind the primary. In cases where a user inadvertently drops a collection or an application somehow corrupts the database, it gives administrators time to react and possibly save their data.
- Simplifies maintenance - run expensive operations like building indexes, taking backups on a secondary node insted of primary, then swap the secondary with the existing primary, and repeat on old primary if required (indexing for example)
- Allows load balancing reads across replicas - increased throughput for reads

## Limitations
- If your working data set is much larger than the available RAM, then sending random reads to the secondaries
likely won't improve your performance, as performance becomes constrained by the number of I/O operations
per second (IOPS) your disk can handle. Sharding is a better option in this case.
- Every write to the primary must eventually be written to all the secondaries as well. If the ratio of writes to reads exceeds ~50%, directing reads to secondaries that are already processing a lot of writes can sometimes slow the replication process and may not result in increased read throughput.
- Secondary nodes replicate asynchronously, and in pathological cases, secondaries can run hours behind. If the application requires consistent reads, you can guarantee your writes go to secondaries before returning to the driver, but this approach carries a latency cost.  

__Note__:
If you need to scale and any of the preceding conditions apply, then sharding, using augmented hardware (vertical scaling) may be a better choice.

<div>
    <a href="../07-indexing-and-query-optimization/04-query-optimization.md"><- Previous</a>
    &nbsp;&nbsp;&nbsp;&nbsp;
    <a href="./02-replica-sets-and-setup.md">Next -></a>
</div>