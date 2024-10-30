# Designing an e-commerce Schema
- Our schema will be limited to the following entities from the e-commerce domain
    - Products
    - Categories
    - Users
    - Orders
    - Product Reviews
__Note__: Object Document Mappers or ODMs (equivalent of ORMs for RDMSes) are not a necessity as a document is already an object-like representation. However an ODM like Mongoose can provide value by helping with validations, type checking, and associations between models.

## Collections
We shall go through sample documents for the 5 entities (translate to collections in the DB) and understand the reason behind various choices. The type of relationship (1:1, 1:N, M:N), and application access patterns will govern our choice of schema.  

Before proceeding further import the documents in data/ folder using the commands listed in data/import.js. Make sure to run these commands from the terminal after navigating to the data/ folder.

__Note__: We will be working in the context of the store DB hereafter.

### Product
- View the product document. Make note of the following
    - _id - Unique Object ID
    - slug - this defines the URL path to access the product detail in a web app - they make sense from a readability, as well as SEO point of view.
        - To be functional, these MUST be unique and indexed on.
        - The slug will be auto-generated using application code during product creation time.
```
> db.products.createIndex(
    { slug: 1 },
    { unique: true }
);
```
    - details : The product details can store fields depending on the product. Products often differ in their fields and this makes details a good place to have such varying fields.
    - tags : An array of tag names

__Exercise__:
- List the 1:N relationship(s) in product collection
- List the M:N relationship(s) in product collection
- How is the relationship represented in each case? Contrast this with how relationships are expressed in a schema design in RDBMSes. You will use these ideas to define relationship between entities in your own domain.
- How will you retrieve a product with its categories/category with its products in RDBMS? How will you do these in the store DB in Mongo?

### Categories
- View the category document and understand it.
- slug - this would be useful when displaying the category web page.

__Exercises__:
- Catgories form a hierarchy. This can be represented in various ways in the category DB. How is it represented in this schema? You will see some denormalization done from an application access point of view (how would you display a hierarchy of category names in a Breadcrumb on the category page? We may need more than just the ObjectID of ancestor categories in order to increase efficiency of application)
- Having seen how the relationships between products and categories are represented, write a query to
    - Find all products in the Gardening Tools category. Use the category's Object ID.  

__Note__:
- In order to find all catgories for a given product you will need to use the $in operator
```
> product = db.products.findOne({
    "slug": "wheel-barrow-9092"
});
> db.categories.find({
    _id: { 
        $in: product.category_ids
    }
});
```

### Orders
- View the orders and understand the structure.
- How is the 1:N relationship between users ad orders represented?
- What all information is denormalized? How would it help in the web application? Denormalization does introduce greater chances for data integrity to be broken, but it also has the following advantages
    - Simpler to understand the data - all related info for order is in one place
    - Faster queries - no joins. You can get all information for an invoice in one shot.
    - Not affected by historical changes. The product pricing etc. appear as they did when the product was purchased.

__Exercises__:
- Find all orders for a given user id (Assume _id of user is known)
- Find the user details for a particular order (Assume _id of order is known)

### Users
- Go through a user document and understand the schema. Note that it is a good idea to store hashed password instead of plain text passwords in the DB. When authenticating a user, the application will hash the password and test against the entry in the DB. Usually a salt is also stored along with the hashed password. The salt along with plain text password will then determine the hashed password. The salt makes hashing secure from certain kinds of cryptographic attacks.

### Reviews
- Go through a review document and understand it.
- helpful_votes: We store this number, despite it being the length of the voter_ids array. This is a denormalization. Mongo has not way to query sze of an array directly. The voter_ids must be retrieved and the result must be used to fetch size of array. This could be a waste of memory, especially if there are many reviews. Hence the denormalization.

__Exercises__:
- Write a query to calculate helpful votes by retrieving the voter_ids array and using the length.
- What other denormalization do you see? What advantages does it bring from an application access point of view? Note that username is not something that will likely change (or only change very rarely).

<div>
    <a href="./01-principles-of-schema-design.md"><- Previous</a>
    &nbsp;&nbsp;&nbsp;&nbsp;
    <a href="./03-specifying-schema.md">Next -></a>
</div>