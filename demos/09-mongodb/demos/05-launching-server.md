- Starting Mongo server
```
mongod --dbpath ./data/db --port 27017 --logpath ./data/logs/log.log
```

If you want to create a config file (say mongod.cfg)
```
storage:
  dbPath: /Users/admin/data/db
systemLog:
  destination: file
  path: /Users/admin/data/logs/logs.log
```

To use the above config file
```
mongod --config ./data/mongod.cfg 
```

Troubleshooting
In case port 27017 is occupied and you want to kill process occupying it, get the pid of the process using
```
ps aux | grep mongo
```
and kill using the pid
```
kill -9 <pid>
```

For help using mongod
```
mongod --help
```