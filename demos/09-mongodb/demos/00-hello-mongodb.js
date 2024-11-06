// CRUD operations
// --- create ---
db.members.insertMany(
    [
        {
            name: "Debasis",
            place: "Odisha"
        },
        {
            name: "Sujan",
            place: "Odisha"
        }
    ]
);

// --- Read ---
db.members.find({
    name: "Debasis"
})

db.members.find({
    _id: ObjectId('672afd960b52c9645ba39b3e'),
    name: 'Debasis'
})

// --- Update ---
const findClause = {
    name: "Suvham"
};

const updateClause = {
    $set: {
        place: 'Karnataka'
    }
};

db.members.updateOne(
    findClause,
    updateClause
);

// db.member.updateOne(
//     {
//         name: "Suvham"
//     },
//     {
//         $set: {
//             place: 'Karnataka'
//         }
//     }
// )

db.members.find({ name: 'Suvham' });

// --- Delete ---
db.members.deleteOne({
    // criteria goes in here... (same as in find)
})