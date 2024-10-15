const quote = 'With great power comes great responsibility';

console.log(quote.substring(0, 4));

console.log(quote.indexOf('great'));
console.log(quote.indexOf('greater'));

console.log(quote.includes('great'));
console.log(quote.includes('greater'));

const uppercaseQuote = quote.toUpperCase();

console.log('quote =', quote);
console.log('uppercaseQuote =', uppercaseQuote);

// console.log(quote.replace('great', 'greater'));

console.log(quote.replace(/great/g, 'greater'));

const name = '    John   Doe   ';
const trimmedName = name.trim();
console.log(name);
console.log(trimmedName);

// Strings are immutable