# Verifying replication and failover

## Writing document to primary and reading it in secondary
- Let's insert a document using the primary.
```
myapp:PRIMARY> use bookstore
myapp:PRIMARY> db.books.insert({title: "Alchemist"})
```
- Connect to the secondary and query for the document just inserted.
```
mongo --port 40001
```
```
myapp:SECONDARY> show dbs
myapp:SECONDARY> use bookstore
myapp:SECONDARY> rs.slaveOk()
myapp:SECONDARY> db.books.find()
```
By default, MongoDB attempts to protect you from accidentally querying a secondary because this data may not be up-to-date. You must explicitly allow reads using rs.slaveOk() which can be passed true/false (default true).

## Automated failover
- Let's kill the primary node. You could kill the secondary, but that merely only replication, with the remaining nodes maintaining their current status. So we kill the primary mongod server (use Ctrl-C).
- The secondary detects the lapse in the primary's heartbeat. The secondary then elects itself primary. This election is possible because a majority of the original nodes (the arbiter and the original secondary) are
still able to ping each other.
- Connect to the new primary node (if not already connected) and check the replica set status. If you were already connected you would have observed the prompt change from myapp:SECONDARY to myapp:PRIMARY
```
mongo --port 40001
```
- Check the status of the replica set - it says one node is not reachable.
```
myapp:PRIMARY> rs.status()
```
- Restart the old primary node using all options given to start it initially. It joins the set back, but now as secondary.

<div>
    <a href="./02-replica-sets-and-setup.md"><- Previous</a>
    &nbsp;&nbsp;&nbsp;&nbsp;
    <a href="./04-connections.md">Next -></a>
</div>
