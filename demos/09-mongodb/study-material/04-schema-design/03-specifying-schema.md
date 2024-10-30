# Sample schema specifiction for a bloh user
```
// modify existing collection
db.runCommand( {
    collMod: "users",
    validator: {
        $jsonSchema: {
            bsonType: "object",
            required: ["first_name", "gender", "description"],
            properties: {
                first_name: {
                    bsonType: "string",
                    description: "must be a string and is required"
                },
                second_name: {
                    bsonType: "string",
                    description: "must be a string if the field exists"
                },
                age: {
                    bsonType: "int",
                    minimum: 0,
                    maximum: 120,
                    description: "must be an integer in [ 0, 120 ] if the field exists"
                },
                interests: {
                    bsonType: "array",
                    items: {
                        bsonType: "string",
                        enum: ["culture", "arts", 'wildlife', 'nature', 'travel', 'gadgets', 'technology', 'security', 'wellness', null],
                        description: "can only be one of the enum values (can be null)"
                    }
                },
                profilePic: {
                    bsonType: "string",
                    description: "must be a string if the field exists"
                }
            }
        }
    },
    validationLevel: "warn"
});

// for new collection
db.createCollection("users", {
    validator: {
        $jsonSchema: {
            bsonType: "object",
            required: ["first_name", "gender", "description"],
            properties: {
                first_name: {
                    bsonType: "string",
                    description: "must be a string and is required"
                },
                second_name: {
                    bsonType: "string",
                    description: "must be a string if the field exists"
                },
                age: {
                    bsonType: "int",
                    minimum: 0,
                    maximum: 120,
                    description: "must be an integer in [ 0, 120 ] if the field exists"
                },
                interests: {
                    bsonType: "array",
                    enum: ["culture", "arts", 'wildlife', 'nature', 'travel', 'gadgets', 'technology', 'security', 'wellness', null],
                    description: "can only be one of the enum values and is required (can be null)"
                },
                profilePic: {
                    bsonType: "string",
                    description: "must be a string if the field exists"
                }
            }
        }
    },
    validationLevel: "warn"
});

db.users.insertOne(
    {
        _id: 6,
        first_name: 'Dorothy',
        age: NumberInt( 32 ),
        gender: 'male',
        description: 'A new age traveller',
        interests: [ 'culture', 'travel' ],
        profilePic: 'https://images.stadium.com/john-doe'
    }
);
```

<div>
    <a href="./02-designing-e-commerce-schema.md"><- Previous</a>
    &nbsp;&nbsp;&nbsp;&nbsp;
    <a href="../05-constructing-queries/01-getting-started.md">Next -></a>
</div>