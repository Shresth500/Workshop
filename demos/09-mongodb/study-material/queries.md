- connection: ?
- read-write ratio to choose DB

--

db.products.find({
    $or: [
        { _id: ObjectId("5bd1259a12904e8efe9b65d4") },
        {
            tags: {
                $in : [
                    /Tools/i,
                    /Home improvement/i
                ]
            }
        }  
    ]
});

--

db.users.find({
    addresses: {
        $elemMatch: {
            name: 'work',
            city: 'New York'
        }
    }
})

db.prodiucts.find({
    tags: 'Tools'
});
--
db.products.find({
    addresses: {
        $size: {
            $gte: 2
        }
    }
})

--

db.users.find({
    'addresses.0.city': 'New York'
})

/*
{
            $match: {
                product_id: {
                    $in: [
                        ObjectId("5bd1167a12904e8efe9b6581"),
                        ObjectId("5bd1259a12904e8efe9b65d4"),
                        ObjectId("4c4b1476238d3b4dd5003982")
                    ]
                }
            }
        }
*/
db.reviews.aggregate(
    [
        {
            $group: {
                _id: '$product_id',
                count: {
                    $sum: 1
                }
            }
        }
    ]
)
--
db.orders.aggregate(
    [
        {
            $group: {
                _id: '$user_id',
                total: {
                    $sum: '$sub_total'
                }
            }
        }
    ]
)
--
// Average rating for every product
// We group reviews by product_id, averaging the rating field
db.reviews.aggregate(
    [
        {
            $group: {
                _id: '$product_id',
                average: {
                    $avg: '$rating'
                },
                count: {
                    $sum: 1
                }
            }
        }
    ]
)
// find out how many ratings of each type exist for product with id ObjectId("4c4b1476238d3b4dd5003981")
db.reviews.aggregate(
    [
        {
            $match: {
                product_id: ObjectId("4c4b1476238d3b4dd5003981")
            }
        },
        {
            $project: {
                rating: 1
            }
        }
        {
            $group: {
                _id: '$rating',
                count: {
                    $sum: 1
                }
            }
        },
        {
            $out: 'results'
        }
    ]
)
--
// Sales summary by year and month
// $year and $month are called reshaping functions - they help "reshape" the input documents (which has purchase_data) to get a different output document (one which has year and month)
// there are arithmetic-related, string-related, date-related reshaping functions (among others)
db.orders.aggregate(
    [
        {
            $project: {
                year: {
                    $year: '$purchase_data'
                },
                month: {
                    $month: '$purchase_data'
                },
                sub_total: 1
            }
        },
        {
            $group: {
                _id: {
                    year: '$year',
                    month: '$month'
                },
                total: {
                    $sum: '$sub_total'
                }
            }
        },
        {
            $sort: {
                '_id.month': 1,
                '_id.year': -1
            }
        }
    ]
)

// Or sorting by year and month (in that order), we can simply srt by _id (since we have year and month in that order in the document)

// [solution requires equivalent of HAVING clause] list the 2 highest spenders (users with maximum total sales amount)
// let us first find how much money each user has spent
db.orders.aggregate(
    [
        {
            $group: {
                _id: '$user_id',
                total: {
                    $sum: '$sub_total'
                }
            }
        },
        {
            $sort: {
                total: -1
            }
        },
        {
            $match: {
                total: {
                    $gte: 10000
                }
            }
        }
    ]
)
--
db.orders.aggregate(
    [
        {
            $skip: 2
        },
        {
            $limit: 1
        }
    ]
)
// Find out the number of products in each category (let's use the products table)
db.products.aggregate(
    [
        {
            $unwind: '$category_ids'
        },
        {
            $group: {
                _id: '$category_ids',
                num_products: {
                    $sum: 1
                }
            }
        }
    ]
)

// similarly we can find how many products are there for every tag (example: gardening: 3, tools: 4 etc.)

// let us increment total_reviews
db.products.update(
    {
        _id: ObjectId("4c4b1476238d3b4dd5003982")
    },
    {
        $inc: {
            total_reviews: 1
        }
    }
)

db.products.update(
    {
        _id: ObjectId("4c4b1476238d3b4dd5003982")
    },
    {
        $set: {
            sku: 10050
        }
    }
)

db.products.update(
    {
        _id: ObjectId("4c4b1476238d3b4dd5003982")
    },
    {
        $addToSet: {
            tags: 'outdoor'
        }
    }
)

