# Getting Started
- The Mongo Shell connects to a running Mongo DB server instance and lets you query a database
- Is a JavScript interpreter
- Mongo queries are JS function calls!
- The Mongo DB drivers queries made in application are similar to Mongo queries - makes for easy copy-paste

## Starting the shell
- Make sure you have c:\data\db (Windows) or /data/db (Mac/Linux). This is where Mongo DB stores the datbase files.
- Start the Mongo server in a terminal (preferably run as Administrator) and wait till it starts listening for connection requests on port 27017
```
$> mongod
```
- Open another terminal and run mongo shell
```
$> mongo
```
This starts of the Mongo DB shell.
- For help on the options applicable when starting the Mongo shell
```
$> mongo --help
```

__Exercise__:
- We are using a local Mongo DB server, listening for connections from clients on the default port 27017. Find out how you would use Mongo shell to connect to a remote Mongo DB instance running on 214.32.64.3 and listening on port 28017. What if there is a username, password required to connect to the Mongo DB server?
- Check the c:\data\db (Windows) or /data/db (Mac/Linux) to see the files there. Mongo creates a set of files here. This has all data, indexes etc.
- If you want to set a different path for data files, use the --dbpath option
- The log file path can be specified using --logpath option when starting mongod process. Else it is by default located in C:\Program Files\MongoDB\Server\4.0\log (Windows). Check it out.

<div>
    <a href="../01-mongodb-basics/06-features-of-mongodb.md"><- Previous</a>
    &nbsp;&nbsp;&nbsp;&nbsp;
    <a href="./02-databases-collections-and-documents.md">Next -></a>
</div>
