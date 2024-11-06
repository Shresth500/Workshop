db.shows.find({
    runtime: {
        $lt: 60
    }
})

db.shows.find({
    runtime: {
        $gt: 30,
        $lt: 60
    }
}).count()

db.shows.find({
    "rating.average": {
        $gt: 8
    },
})

// when querying treat "array-value attributes" as "single-value attributes"
// 23
db.shows.find({
    genres: "Horror"
}).count();

db.shows.find({
    genres: ["Horror"]
}).count();

db.shows.find({
    genres: [
        'Anime',
        'Fantasy',
        'Horror'
    ],
}).count();

//
// $in is used to match with one of the items in the given array of items
// 159
db.shows.find({
    genres: {
        $in: [
            "Drama", "Horror"
        ]
    }
}).count();

// Find shows that are of type Animation or Reality
// 24
// $in -> one of the items in the list
db.shows.find({
    type: {
        $in: [
            'Animation',
            'Reality'
        ]
    }
}).count();

// Find shows that have neither Drama nor Horror as genres in them
// 81
// $nin -> none of the items in the list
db.shows.find({
    genres: {
        $nin: [
            'Drama',
            'Horror'
        ]
    }
}).count();

// Find shows that are neither of type Animation, nor Reality
// 216
db.shows.find({
    type: {
        $nin: [
            'Animation',
            'Reality'
        ]
    }
}).count();

// Find shows that are not running on the network HBO, nor FOX
// 202
db.shows.find({
    "network.name": {
        $nin: [
            'HBO',
            'FOX'
        ]
    }
}).count();

// Find shows that have one of Drama or Horror as genres in them (try this without using $in)
// 159
// $or: [ condition1, condition2, condition3, ... ]
db.shows.find({
    $or: [
        {
            genres: 'Drama'
        },
        {
            genres: 'Horror'
        }
    ]
}).count()


// !(genre === 'Drama' || genre === 'Horror')
// 81
db.shows.find({
    genres: {
        $not: {
            $in: [
                'Drama',
                'Horror'
            ]
        }
    }
}).count()

// iii) Find shows that have BOTH Drama and Horror as their genre
// $and
// 17
db.shows.find({
    $and: [
        {
            genres: 'Drama'
        },
        {
            genres: 'Horror'
        }
    ]
}).count();

// iv) Find shows that have genre Drama but not Horror or that have genre Horror but not Drama.
// (genres === 'Drama' && genres !== 'Horror') || (genres === 'Horror' && genres !== 'Drama')
// 142 (136 + 6)
db.shows.find({
    $or: [
        {
            $and: [
                {
                    genres: {
                        $eq: 'Drama'
                    }
                },
                {
                    genres: {
                        $ne: 'Horror'
                    }
                }
            ]
        },
        {
            $and: [
                {
                    genres: 'Horror'
                },
                {
                    genres: {
                        $ne: 'Drama'
                    }
                }
            ]
        }
    ]
});

// v) Find shows that do not have at least one of Drama or Horror as their genre (i.e. show could have Drama but not Horror, Horror but not Drama, or neither Drama not Horror)
// genres !== 'Drama' || genres !== 'Horror'
// 223
db.shows.find({
    $or: [
        {
            genres: {
                $ne: 'Drama'
            }
        },
        {
            genres: {
                $ne: 'Horror'
            }
        }
    ]
}).count()

// Find shows that have a webChannel property
// 240
db.shows.find({
    webChannel: {
        $exists: true
    }
}).count()

// Find shows that have a webChannel with a country field within
// 10
db.shows.find({
    "webChannel.country": {
        $exists: true
    }
}).count();

// Find shows which do not have a web channel (null)
db.shows.find({
    webChannel: null
}).count()

// finding based on the data type of the webChannel field
// a field can have different data types in different documents. The data type check can be useful in such cases.
db.shows.find({
    webChannel: {
        $type: "null" // Alternatively - 10 (https://www.mongodb.com/docs/manual/reference/bson-types/)
    }
}).count()

// Find shows which have a web channel (not null, but an object), but country for webChannel is null
db.shows.find({
    // 2 conditions
    webChannel: {
        $type: "object"
    },
    "webChannel.country": null
}).count()