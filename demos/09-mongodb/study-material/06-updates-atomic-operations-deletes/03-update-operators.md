# Update operators
MongoDB supports a host of update operators. Let use see them.

## General-purpose operators
### $inc
Use the $inc operator to add/subtract a numeric value
```
> db.cities.update(
    { city: 'Bangalore' },
    {
        $inc: {
            population: 450000
        }
    }
);
> db.users.update(
    { username: 'moe' },
    {
        $inc: {
            password_retries: -1
        }
    }
);
```

### $set AND $unset
- Use $set to set the value of a particular key in a document. The value can have any valid data type. The old value will be replaced with new value. Be careful when setting arrays (you may end up losing the old array if you use set - you may want to use array update operators instead).
```
> // set object
> db.cities.update(
    { city: 'Bangalore' },
    {
        $set: {
            pollution_levels: {
                no2: { 
                    min: 4500, 
                    max: 7000 
                }
            },
            offices: {
                legislature: 'Vidhan Soudha'
            }
        }
    }
);
> // set array
> db.cities.update(
    { city: 'Bangalore' },
    { 
        $set: {
            cms: [ 'Krishna', 'Dharam', 'Kumaraswamy' ]
        }
    }
);
```
- $unset removes the provided key from a document. Pass the complete path to the field with value 1.
```
> db.cities.update(
    { city: 'Bangalore' },
    {
        $unset: {
            'offices.legislature' : 1
        }
    } 
);
```

### $rename()
Use $rename to change the name of a key. To modify a subdocument key, use complete path to key, for both current key name as well as modified key name.
```
> db.cities.update(
    { name: 'Bangalore' },
    {
        $rename: {
            'offices.legislature': 'offices.legislative_assembly'
        }
    }
);
```

### $setOnInsert()
During an upsert, you sometimes need to be careful not to overwrite data that you care about. In this case it would be useful to specify that you only want to modify a field when the document is new, and you perform an insert, not when an update occurs. Use $setOnInsert for this.
```
> db.products.update(
    { slug: 'hammer' },
    {
        $inc: {
            quantity: 1
        },
        $setOnInsert: {
            state: 'AVAILABLE'
        }
    },
    { upsert: true }
);
```
You want to increment the quantity for a certain inventory item without interfering with state. If an insert is performed, then qty will be set to 1, and state will be set to 'AVAILABLE'. If an update is performed, then only the increment to qty occurs, leaving state untouched.

## Array opertors
These update operators apply exclusively to arrays.

### $push, $each
- To add values to an array, use $push. By default, it will add a single element to the end of an array.
```
> db.products.update(
    { slug: 'hammer' },
    {
        $push: {
            tags: 'tools'
        }
    }
);
```
- To add multiple tags in the same update, use $each in conjunction with $push.
```
> db.products.update(
    { slug: 'hammer' },
    {
        $push: {
            tags: {
                $each: [ 'tools', 'home improvement' ]
            }
        }
    }
);
```

### $slice
- $slice is used in conjunction with the $push and $each operators, and allows you to truncate the resulting array to a certain size.
- The argument passed to $slice is an integer
    - If a positive number is passed to $slice, it will remove values from the end of the array
    - If a negative number is passed values are removed from the beginning of the array
    - If you pass 0 it will result in [], an empty array 
```
> db.cities.update(
    { city: 'Bangalore' },
    { 
        $push: {
            cms: {
                $each: [ 'Yeddy', 'Siddaramaiah', 'Kumaraswamy' ],
                $slice: -4
            }
        }
    }
);
```
- Check the cms array - you will have only last 4 entries - [ 'Kumaraswamy', 'Yeddy', 'Siddaramaiah', 'Kumaraswamy' ]

### $sort
When you use $push and $slice, you sometimes want to sort the items before slicing them off. Use sort for this. If you have an array of subdocuments (array with each item being an object), they key for sorting is specified.
__Exercise__:
- Repeat one of the $push with $slice queries with an additional $sort : 1 and $sort: -1.
- Add an array field with each item being a subdocument. Now update the array of a document $push + $slice, sorting it based on a key in the subdocument (Example: $sort : { somkey: 1 } )

### $addToSet and $each
- $addToSet also appends a value to an array, but only if it doesn't already exist in the array. Use $each to add more than one value - only those values in $each that don't already exist in tags will be appended. 

### $pop
$pop will remove that an item in the array. Passing 1 removes the last item and passing -1 removes the first.
```
> db.cities.update(
    { city:'Bangalore' },
    {
        $pop: {
            cms: 1 
        }
    }
)
```

### $pull AND $pullAll
- $pull specifies exactly which array element to remove by value. If multiple matches are found, all are removed.
```
> db.cities.update(
    { city:'Bangalore' },
    { 
        $pull: {
            cms: 'Kumaraswamy'
        }
    }
);
```
- Unfortunately $each does not work with $pull in order to remove multiple entries. Use $pullAll instead.
```
> db.cities.update(
    { city:'Bangalore' },
    { 
        $pullAll: {
            cms: [ 'Dharam', 'Yeddy' ]
        }
    }
);
```
- You can even pass a query selector (range selectors, regular expressions etc.) to decide which items are to be removed. Following removes all CMs whose name starts with letter K.
```
> db.cities.update(
    { city: 'Bangalore' },
    {
        $pull: {
            cms: /^K/
        }
    }
);
```

### Positional updates
The positional operator allows you to update a subdocument in an array identified by using dot notation in your query selector. Consider this product.
```
{
    _id: ObjectId("6a5b1476238d3b4dd5000048"),
    line_items: [
        {
            _id: ObjectId("4c4b1476238d3b4dd5003981"),
            sku: "9092",
            name: "Extra Large Wheelbarrow",
            quantity: 1,
            pricing: {
                retail: 5897,
                sale: 4897
            }
        },
        {
            _id: ObjectId("4c4b1476238d3b4dd5003982"),
            sku: "10027",
            name: "Rubberized Work Glove, Black",
            quantity: 2,
            pricing: {
                retail: 1499,
                sale: 1299
            }
        }
    ]
}
```
You want to be able to set the quantity of the second line item, with the sku of 10027 to 5. The problem is that you don't know where in the line_items array this particular subdocument resides. You don't even know whether it exists. You can use a simple query selector and the positional operator to solve both these problems.
```
> db.orders.update(
    {
        _id: ObjectId("6a5b1476238d3b4dd5000048"),
        'line_items.sku': "10027"
    },
    {
        $set: {
            'line_items.$.quantity': 5
        }
    }
);
```
The positional operator is the $ that you see in the line_items.$.quantity string. If the query selector matches, then the index of the document having a sku of 10027 will replace the positional operator internally, thereby updating the correct document.

<div>
    <a href="./02-modify-by-replacement-vs-modify-by-operator.md"><- Previous</a>
    &nbsp;&nbsp;&nbsp;&nbsp;
    <a href="./04-findAndModify.md">Next -></a>
</div>