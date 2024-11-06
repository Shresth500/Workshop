# Exercises
Import the shows collection using mongoimport. For example, run this from the terminal from within this folder. 
```
mongoimport --uri="mongodb://localhost:27017" \
  --db=ascendion \
  --collection=shows \
  --file=./shows.json \
  --jsonArray
  ```