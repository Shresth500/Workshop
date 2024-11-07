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

// Find all shows whose name contains the word "Last"
// you can use regular expression instead of string
db.shows.find({
    name: /Man/
}).count();

// case-insensitive match (i = ignore case)
db.shows.find({
    name: /Man/i
}).count();

db.shows.find({
    name: {
        $regex: "Man"
    }
}).count();

db.shows.find({
    name: {
        $regex: "Man",
        $options: "i"
    }
}).count();

// Find all shows whose weight is more than 10 times their average rating
// (weight) > (10 * rating.average)
// 168
db.shows.find(
    { // filtering clause
        $expr: {
            $gt: [
                "$weight",
                {
                    $multiply: [10, "$rating.average"]
                }
            ]
        }
    },
    { // projection clause - select the fields you want to view
        _id: 0,
        name: 1,
        weight: 1,
        "rating.average": 1
    }
).count();

// Find all shows where 8% of the weight (0.08 * weight) is less than the average rating value. Make sure the average rating is not null.
// 200
db.shows.find(
    {
        "rating.average": {
            $ne: null
        },
        $expr: {
            $lt: [
                {
                    $multiply: [0.08, "$weight"]
                },
                "$rating.average"
            ]
        }
    }
).count();

// Find shows that have BOTH Drama and Horror as their genre. Use $all.
// 17
db.shows.find({
    genres: {
        $all: ['Drama', 'Horror']
    }
});

// ii) Find shows that are scheduled on both "Monday" and "Tuesday"
// 4
db.shows.find({
    "schedule.days": {
        $all: ['Monday', 'Tuesday']
    }
}).count()

// rewrite the query above using $and
// 4
db.shows.find(
    {
        $and: [
            {
                "schedule.days": "Monday"
            },
            {
                "schedule.days": "Tuesday"
            }
        ]
    }
).count();

// Create a new collection and create 6 - 8 documents of students like so.
const students = [
    {
        name: "John",
        scores: [
            { subject: "History", score: 80 },
            { subject: "Geography", score: 75 }
        ]
    },
    {
        name: "Emma",
        scores: [
            { subject: "Math", score: 90 },
            { subject: "Science", score: 85 }
        ]
    },
    {
        name: "Liam",
        scores: [
            { subject: "English", score: 70 },
            { subject: "Art", score: 78 },
            { subject: "Music", score: 82 }
        ]
    },
    {
        name: "Sophia",
        scores: [
            { subject: "History", score: 88 },
            { subject: "Geography", score: 92 },
            { subject: "Math", score: 95 }
        ]
    },
    {
        name: "Noah",
        scores: [
            { subject: "Science", score: 60 },
            { subject: "English", score: 73 },
            { subject: "Math", score: 77 },
            { subject: "Physical Education", score: 81 }
        ]
    },
    {
        name: "Olivia",
        scores: [
            { subject: "Art", score: 85 },
            { subject: "History", score: 78 },
            { subject: "Science", score: 92 }
        ]
    },
    {
        name: "Mason",
        scores: [
            { subject: "Math", score: 68 },
            { subject: "Geography", score: 74 }
        ]
    },
    {
        name: "Ava",
        scores: [
            { subject: "English", score: 93 },
            { subject: "Art", score: 87 },
            { subject: "Physical Education", score: 76 }
        ]
    }
];

db.students.insertMany( students );

// Create a collection to store scores of students in various subjects. Include name of
// students in one field, and scores in another (between 0 – 100). Scores is an array of
// document, each with the subject name and score. Insert some documents so that some
// subjects are shared among students and some subjects are specific to a student (elective
// subjects). Now do the following.
// i) Find all students who have a score of more 90% in some subject and have taken
// up history
// ii) Find all students who have a score of more than 90% in history
// iii) Find all students who have taken up exactly 2 subjects
// g) Projection operator - $, $slice
// NOTE: This operator is used on the projection object (second argument) and not the
// filter object (first argument) – it transforms arrays values that are projected.
// i)  Find all students who have taken up history and project the matching subject
// details (i..e history)
// ii) Find all students who have taken up history and project the first 2 subjects they
// have in the document.
