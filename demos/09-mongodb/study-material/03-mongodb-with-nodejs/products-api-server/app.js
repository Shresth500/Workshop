const mongoose = require( 'mongoose' );
const express = require( 'express' );

// define schema
const ProductSchema = new mongoose.Schema({
    "_id": {
        type: Number,
        required: true 
    },
    "name": {
        type: String,
        required: true
    },
    "code": {
        type: String,
        required: true
    },
    "releaseDate": {
        type: String,
        required: true
    },
    "description": String,
    "price": {
        type: Number,
        required: true,
        min: 0
    },
    "starRating": {
        type: Number,
        require: true,
        min: 1,
        max: 5
    },
    "imageUrl": String
});

// define model class using the schema
mongoose.model( 'Product', ProductSchema, );

// get reference to the Product model class
const Product = mongoose.model( 'Product' );

// connect to db
const dbUrl = 'mongodb://localhost:27017/shop';
mongoose.connect( dbUrl );

mongoose.connection.on( 'open', function() {
    console.log( 'connection established' );

    const data = require( './data/store.json' );
    let products = data.products;
    
    // upload products to the shop.products collection
    products = products.map( item => new Product( item ) );

    Product.insertMany( products, function( err, result ) {
        if( !err ) {
            console.log( 'Products were inserted fine' );
            return;
        }

        console.log( 'Some error in upload of products : ', err.message );
    });
});

mongoose.connection.on( 'close', function() {
    console.log( 'connection cut' );
});

// create express application object
const app = express();

app.get( '/api/products', function( req, res ) {
    Product.find( 
        {}, // where clause - no filtering in this case
        function( err, products ) { // this function gets called where query succeeds/errors out
            if( err ) {
                res.status( 500 ).json({
                    message: 'Unable to fetch products'
                });
                return;
            }

            res.json( products );
        }
    )
});

app.listen( 3000, function( err ) {
    if( err ) {
        console.log( 'Could not start the server : ', err.message );
        return;
    }

    console.log( 'Check localhost:3000/' );
});