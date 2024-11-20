```javascript
const students = [
  {
    name: "Student1",
    scores: [
      { subject: "Physical Education", score: 69 },
      { subject: "Geography", score: 98 },
      { subject: "Physical Education", score: 60 },
      { subject: "Math", score: 60 },
    ],
  },
  {
    name: "Student2",
    scores: [
      { subject: "History", score: 76 },
      { subject: "Art", score: 78 },
    ],
  },
  {
    name: "Student3",
    scores: [
      { subject: "History", score: 89 },
      { subject: "History", score: 92 },
      { subject: "Math", score: 92 },
    ],
  },
  {
    name: "Student4",
    scores: [
      { subject: "Math", score: 89 },
      { subject: "Math", score: 98 },
      { subject: "History", score: 74 },
      { subject: "English", score: 92 },
    ],
  },
  {
    name: "Student5",
    scores: [
      { subject: "Math", score: 75 },
      { subject: "Art", score: 88 },
      { subject: "English", score: 81 },
    ],
  },
  {
    name: "Student6",
    scores: [
      { subject: "History", score: 62 },
      { subject: "Physical Education", score: 70 },
    ],
  },
  {
    name: "Student7",
    scores: [
      { subject: "Art", score: 69 },
      { subject: "Geography", score: 81 },
    ],
  },
  {
    name: "Student8",
    scores: [
      { subject: "Physical Education", score: 95 },
      { subject: "Art", score: 91 },
      { subject: "Science", score: 91 },
    ],
  },
  {
    name: "Student9",
    scores: [
      { subject: "History", score: 72 },
      { subject: "Math", score: 61 },
      { subject: "History", score: 91 },
      { subject: "Music", score: 66 },
    ],
  },
  {
    name: "Student10",
    scores: [
      { subject: "Physical Education", score: 74 },
      { subject: "English", score: 93 },
      { subject: "Art", score: 63 },
    ],
  },
  {
    name: "Student11",
    scores: [
      { subject: "Art", score: 53 },
      { subject: "Art", score: 64 },
    ],
  },
  {
    name: "Student12",
    scores: [
      { subject: "Art", score: 96 },
      { subject: "Art", score: 84 },
      { subject: "English", score: 75 },
    ],
  },
  {
    name: "Student13",
    scores: [
      { subject: "Physical Education", score: 79 },
      { subject: "Science", score: 65 },
    ],
  },
  {
    name: "Student14",
    scores: [
      { subject: "English", score: 72 },
      { subject: "Geography", score: 76 },
      { subject: "Physical Education", score: 50 },
    ],
  },
  {
    name: "Student15",
    scores: [
      { subject: "Geography", score: 100 },
      { subject: "Music", score: 71 },
      { subject: "Math", score: 69 },
      { subject: "Geography", score: 86 },
    ],
  },
  {
    name: "Student16",
    scores: [
      { subject: "Science", score: 87 },
      { subject: "Science", score: 69 },
    ],
  },
  {
    name: "Student17",
    scores: [
      { subject: "English", score: 92 },
      { subject: "History", score: 50 },
      { subject: "Math", score: 54 },
      { subject: "Science", score: 80 },
    ],
  },
  {
    name: "Student18",
    scores: [
      { subject: "Science", score: 55 },
      { subject: "Physical Education", score: 59 },
    ],
  },
  {
    name: "Student19",
    scores: [
      { subject: "Music", score: 83 },
      { subject: "English", score: 81 },
      { subject: "English", score: 84 },
      { subject: "Math", score: 89 },
    ],
  },
  {
    name: "Student20",
    scores: [
      { subject: "Physical Education", score: 73 },
      { subject: "English", score: 57 },
      { subject: "Physical Education", score: 94 },
    ],
  },
  {
    name: "Student21",
    scores: [
      { subject: "English", score: 61 },
      { subject: "Physical Education", score: 59 },
      { subject: "Science", score: 82 },
    ],
  },
  {
    name: "Student22",
    scores: [
      { subject: "History", score: 86 },
      { subject: "Physical Education", score: 90 },
      { subject: "Math", score: 75 },
      { subject: "Math", score: 59 },
    ],
  },
  {
    name: "Student23",
    scores: [
      { subject: "Geography", score: 96 },
      { subject: "Physical Education", score: 64 },
      { subject: "Art", score: 89 },
    ],
  },
  {
    name: "Student24",
    scores: [
      { subject: "Physical Education", score: 56 },
      { subject: "Math", score: 83 },
      { subject: "Science", score: 63 },
      { subject: "History", score: 99 },
    ],
  },
  {
    name: "Student25",
    scores: [
      { subject: "History", score: 92 },
      { subject: "Art", score: 97 },
      { subject: "Physical Education", score: 56 },
      { subject: "Geography", score: 87 },
    ],
  },
  {
    name: "Student26",
    scores: [
      { subject: "English", score: 93 },
      { subject: "Science", score: 57 },
      { subject: "Physical Education", score: 64 },
    ],
  },
  {
    name: "Student27",
    scores: [
      { subject: "English", score: 99 },
      { subject: "Physical Education", score: 59 },
      { subject: "Science", score: 74 },
      { subject: "Physical Education", score: 76 },
    ],
  },
  {
    name: "Student28",
    scores: [
      { subject: "Math", score: 66 },
      { subject: "Music", score: 84 },
    ],
  },
  {
    name: "Student29",
    scores: [
      { subject: "English", score: 50 },
      { subject: "English", score: 84 },
      { subject: "English", score: 80 },
    ],
  },
  {
    name: "Student30",
    scores: [
      { subject: "Geography", score: 65 },
      { subject: "English", score: 56 },
      { subject: "Geography", score: 77 },
    ],
  },
  {
    name: "Student31",
    scores: [
      { subject: "History", score: 59 },
      { subject: "Art", score: 93 },
    ],
  },
  {
    name: "Student32",
    scores: [
      { subject: "Geography", score: 69 },
      { subject: "History", score: 68 },
      { subject: "Math", score: 62 },
    ],
  },
  {
    name: "Student33",
    scores: [
      { subject: "Music", score: 68 },
      { subject: "Music", score: 75 },
    ],
  },
  {
    name: "Student34",
    scores: [
      { subject: "History", score: 75 },
      { subject: "English", score: 82 },
      { subject: "Music", score: 56 },
    ],
  },
  {
    name: "Student35",
    scores: [
      { subject: "Physical Education", score: 55 },
      { subject: "Physical Education", score: 80 },
    ],
  },
  {
    name: "Student36",
    scores: [
      { subject: "Music", score: 90 },
      { subject: "Geography", score: 71 },
      { subject: "Science", score: 91 },
    ],
  },
  {
    name: "Student37",
    scores: [
      { subject: "English", score: 93 },
      { subject: "Math", score: 61 },
    ],
  },
  {
    name: "Student38",
    scores: [
      { subject: "Geography", score: 64 },
      { subject: "Physical Education", score: 54 },
      { subject: "History", score: 52 },
      { subject: "Physical Education", score: 94 },
    ],
  },
  {
    name: "Student39",
    scores: [
      { subject: "Physical Education", score: 72 },
      { subject: "Science", score: 67 },
    ],
  },
  {
    name: "Student40",
    scores: [
      { subject: "English", score: 74 },
      { subject: "Art", score: 89 },
    ],
  },
  {
    name: "Student41",
    scores: [
      { subject: "Physical Education", score: 60 },
      { subject: "Physical Education", score: 52 },
    ],
  },
  {
    name: "Student42",
    scores: [
      { subject: "Music", score: 60 },
      { subject: "Physical Education", score: 70 },
    ],
  },
  {
    name: "Student43",
    scores: [
      { subject: "Math", score: 91 },
      { subject: "Math", score: 65 },
    ],
  },
  {
    name: "Student44",
    scores: [
      { subject: "Geography", score: 71 },
      { subject: "English", score: 61 },
      { subject: "Math", score: 94 },
      { subject: "Physical Education", score: 90 },
    ],
  },
  {
    name: "Student45",
    scores: [
      { subject: "Science", score: 66 },
      { subject: "History", score: 60 },
      { subject: "Physical Education", score: 65 },
    ],
  },
  {
    name: "Student46",
    scores: [
      { subject: "Music", score: 66 },
      { subject: "Physical Education", score: 66 },
      { subject: "Math", score: 100 },
    ],
  },
  {
    name: "Student47",
    scores: [
      { subject: "Science", score: 50 },
      { subject: "Math", score: 82 },
    ],
  },
  {
    name: "Student48",
    scores: [
      { subject: "Physical Education", score: 81 },
      { subject: "Physical Education", score: 77 },
      { subject: "Math", score: 64 },
      { subject: "English", score: 78 },
    ],
  },
  {
    name: "Student49",
    scores: [
      { subject: "English", score: 100 },
      { subject: "Science", score: 91 },
    ],
  },
  {
    name: "Student50",
    scores: [
      { subject: "Art", score: 66 },
      { subject: "Music", score: 93 },
      { subject: "Geography", score: 81 },
      { subject: "Music", score: 87 },
    ],
  },
  {
    name: "Student51",
    scores: [
      { subject: "Science", score: 66 },
      { subject: "Math", score: 80 },
      { subject: "Math", score: 97 },
      { subject: "Geography", score: 53 },
    ],
  },
  {
    name: "Student52",
    scores: [
      { subject: "History", score: 64 },
      { subject: "Math", score: 71 },
      { subject: "Geography", score: 55 },
    ],
  },
  {
    name: "Student53",
    scores: [
      { subject: "Math", score: 96 },
      { subject: "Math", score: 51 },
    ],
  },
  {
    name: "Student54",
    scores: [
      { subject: "Physical Education", score: 82 },
      { subject: "Music", score: 95 },
    ],
  },
  {
    name: "Student55",
    scores: [
      { subject: "Math", score: 84 },
      { subject: "Science", score: 51 },
      { subject: "Math", score: 87 },
      { subject: "Music", score: 55 },
    ],
  },
  {
    name: "Student56",
    scores: [
      { subject: "History", score: 99 },
      { subject: "Art", score: 84 },
      { subject: "Geography", score: 96 },
    ],
  },
  {
    name: "Student57",
    scores: [
      { subject: "History", score: 97 },
      { subject: "English", score: 93 },
    ],
  },
  {
    name: "Student58",
    scores: [
      { subject: "Geography", score: 86 },
      { subject: "Geography", score: 85 },
      { subject: "Geography", score: 52 },
      { subject: "Math", score: 78 },
    ],
  },
  {
    name: "Student59",
    scores: [
      { subject: "Science", score: 98 },
      { subject: "History", score: 89 },
      { subject: "Math", score: 53 },
      { subject: "Math", score: 82 },
    ],
  },
  {
    name: "Student60",
    scores: [
      { subject: "Art", score: 95 },
      { subject: "Physical Education", score: 53 },
      { subject: "Geography", score: 86 },
    ],
  },
  {
    name: "Student61",
    scores: [
      { subject: "Music", score: 81 },
      { subject: "Physical Education", score: 100 },
      { subject: "English", score: 91 },
    ],
  },
  {
    name: "Student62",
    scores: [
      { subject: "Geography", score: 72 },
      { subject: "Physical Education", score: 94 },
      { subject: "Art", score: 77 },
      { subject: "English", score: 99 },
    ],
  },
  {
    name: "Student63",
    scores: [
      { subject: "History", score: 55 },
      { subject: "Geography", score: 69 },
      { subject: "English", score: 78 },
    ],
  },
  {
    name: "Student64",
    scores: [
      { subject: "History", score: 86 },
      { subject: "Art", score: 91 },
      { subject: "Art", score: 83 },
    ],
  },
  {
    name: "Student65",
    scores: [
      { subject: "Music", score: 68 },
      { subject: "Science", score: 86 },
      { subject: "Physical Education", score: 83 },
      { subject: "Music", score: 55 },
    ],
  },
  {
    name: "Student66",
    scores: [
      { subject: "Music", score: 97 },
      { subject: "History", score: 54 },
      { subject: "Math", score: 81 },
      { subject: "Music", score: 79 },
    ],
  },
  {
    name: "Student67",
    scores: [
      { subject: "History", score: 88 },
      { subject: "Music", score: 92 },
    ],
  },
  {
    name: "Student68",
    scores: [
      { subject: "Music", score: 51 },
      { subject: "Geography", score: 57 },
      { subject: "History", score: 87 },
    ],
  },
  {
    name: "Student69",
    scores: [
      { subject: "Physical Education", score: 84 },
      { subject: "Math", score: 70 },
    ],
  },
  {
    name: "Student70",
    scores: [
      { subject: "Physical Education", score: 80 },
      { subject: "History", score: 86 },
      { subject: "History", score: 70 },
    ],
  },
  {
    name: "Student71",
    scores: [
      { subject: "Music", score: 82 },
      { subject: "Music", score: 93 },
      { subject: "English", score: 77 },
      { subject: "Science", score: 92 },
    ],
  },
  {
    name: "Student72",
    scores: [
      { subject: "Physical Education", score: 58 },
      { subject: "History", score: 93 },
      { subject: "History", score: 100 },
    ],
  },
  {
    name: "Student73",
    scores: [
      { subject: "Art", score: 96 },
      { subject: "Math", score: 74 },
      { subject: "History", score: 73 },
    ],
  },
  {
    name: "Student74",
    scores: [
      { subject: "Geography", score: 77 },
      { subject: "Physical Education", score: 97 },
      { subject: "Math", score: 74 },
      { subject: "Math", score: 57 },
    ],
  },
  {
    name: "Student75",
    scores: [
      { subject: "Art", score: 60 },
      { subject: "Physical Education", score: 83 },
      { subject: "History", score: 51 },
    ],
  },
  {
    name: "Student76",
    scores: [
      { subject: "Physical Education", score: 57 },
      { subject: "Science", score: 66 },
      { subject: "Physical Education", score: 61 },
    ],
  },
  {
    name: "Student77",
    scores: [
      { subject: "Science", score: 79 },
      { subject: "Music", score: 81 },
    ],
  },
  {
    name: "Student78",
    scores: [
      { subject: "Music", score: 89 },
      { subject: "English", score: 98 },
      { subject: "History", score: 84 },
      { subject: "Science", score: 76 },
    ],
  },
  {
    name: "Student79",
    scores: [
      { subject: "Geography", score: 73 },
      { subject: "English", score: 99 },
    ],
  },
  {
    name: "Student80",
    scores: [
      { subject: "Physical Education", score: 90 },
      { subject: "History", score: 79 },
    ],
  },
  {
    name: "Student81",
    scores: [
      { subject: "Physical Education", score: 54 },
      { subject: "History", score: 52 },
    ],
  },
  {
    name: "Student82",
    scores: [
      { subject: "Science", score: 59 },
      { subject: "Science", score: 91 },
    ],
  },
  {
    name: "Student83",
    scores: [
      { subject: "Science", score: 60 },
      { subject: "English", score: 82 },
      { subject: "Geography", score: 53 },
    ],
  },
  {
    name: "Student84",
    scores: [
      { subject: "Science", score: 66 },
      { subject: "History", score: 96 },
      { subject: "Art", score: 80 },
      { subject: "Science", score: 83 },
    ],
  },
  {
    name: "Student85",
    scores: [
      { subject: "Music", score: 68 },
      { subject: "Art", score: 86 },
      { subject: "Music", score: 62 },
      { subject: "English", score: 88 },
    ],
  },
  {
    name: "Student86",
    scores: [
      { subject: "Physical Education", score: 50 },
      { subject: "Music", score: 87 },
      { subject: "History", score: 82 },
    ],
  },
  {
    name: "Student87",
    scores: [
      { subject: "Art", score: 76 },
      { subject: "History", score: 95 },
      { subject: "History", score: 63 },
      { subject: "Art", score: 62 },
    ],
  },
  {
    name: "Student88",
    scores: [
      { subject: "English", score: 93 },
      { subject: "Math", score: 77 },
      { subject: "Music", score: 64 },
      { subject: "Science", score: 87 },
    ],
  },
  {
    name: "Student89",
    scores: [
      { subject: "Math", score: 59 },
      { subject: "Art", score: 88 },
      { subject: "Math", score: 58 },
      { subject: "Geography", score: 51 },
    ],
  },
  {
    name: "Student90",
    scores: [
      { subject: "Physical Education", score: 100 },
      { subject: "History", score: 98 },
      { subject: "Physical Education", score: 92 },
      { subject: "English", score: 57 },
    ],
  },
  {
    name: "Student91",
    scores: [
      { subject: "Geography", score: 62 },
      { subject: "Science", score: 74 },
      { subject: "English", score: 53 },
      { subject: "Art", score: 76 },
    ],
  },
  {
    name: "Student92",
    scores: [
      { subject: "Physical Education", score: 100 },
      { subject: "Music", score: 53 },
    ],
  },
  {
    name: "Student93",
    scores: [
      { subject: "Physical Education", score: 63 },
      { subject: "Physical Education", score: 92 },
      { subject: "English", score: 81 },
      { subject: "Geography", score: 89 },
    ],
  },
  {
    name: "Student94",
    scores: [
      { subject: "Geography", score: 60 },
      { subject: "Geography", score: 64 },
      { subject: "Physical Education", score: 56 },
      { subject: "Art", score: 56 },
    ],
  },
  {
    name: "Student95",
    scores: [
      { subject: "Science", score: 62 },
      { subject: "Physical Education", score: 88 },
      { subject: "English", score: 70 },
    ],
  },
  {
    name: "Student96",
    scores: [
      { subject: "Math", score: 83 },
      { subject: "Physical Education", score: 72 },
      { subject: "History", score: 86 },
    ],
  },
  {
    name: "Student97",
    scores: [
      { subject: "Science", score: 86 },
      { subject: "Math", score: 82 },
      { subject: "Geography", score: 94 },
    ],
  },
  {
    name: "Student98",
    scores: [
      { subject: "Science", score: 96 },
      { subject: "English", score: 96 },
      { subject: "Math", score: 79 },
    ],
  },
  {
    name: "Student99",
    scores: [
      { subject: "English", score: 79 },
      { subject: "Math", score: 56 },
      { subject: "History", score: 66 },
    ],
  },
  {
    name: "Student100",
    scores: [
      { subject: "Science", score: 73 },
      { subject: "Math", score: 90 },
    ],
  },
];

// Getting error to get middle element of scores

db.students.find(
  {
    "scores.subject": "History", // Find students with a score in History
  },
  {
    _id: 0,
    name: 1,
    scores: {
      $slice: [
        { $floor: { $divide: [{ $size: "$scores" }, 2] } }, // Start from the middle index
        1, // Limit to only 1 element (the middle element)
      ],
    },
  }
);
```