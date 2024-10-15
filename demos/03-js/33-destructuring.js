const weekdays = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday'
];

// const first = weekdays[0], second = weekdays[1], fifth = weekdays[4], sixth = weekdays[5] || 'Holiday';
const [first, second, , , fifth = 'Holiday', sixth = 'Holiday'] = weekdays;

console.log(first, second, fifth, sixth);
console.log(weekdays);