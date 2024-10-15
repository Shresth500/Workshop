const now = new Date();
const date = now.getDate();
const day = now.getDay();
const month = now.getMonth();

console.log(date);
console.log(day);
console.log(month);

console.log(now.toString());

const oct16_2024 = new Date(2024, 9, 16, 9, 30, 0, 0);
console.log(oct16_2024);

const tomorrow = new Date(); // represents today at this point
tomorrow.setDate(tomorrow.getDate() + 1); // if currently last day of month, then it increases month also
console.log(tomorrow.toString());

const todayPlus17 = new Date(); // represents today at this point
todayPlus17.setDate(todayPlus17.getDate() + 17); // if currently last day of month, then it increases month also
console.log(todayPlus17.toString());


// EXERCISE: Explore methods of Intl object (for formatting dates you an use these)
console.log(Intl);