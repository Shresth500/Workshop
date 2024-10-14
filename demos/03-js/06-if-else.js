const city = 'Bengaluru';
// const city = 'Chennai';

// process.stdin.on('data', (value) => {
//     console.log(value.toString());
// })

if (city === 'New Delhi') {
    console.log('India gate');
} else if (city === 'Mumbai') {
    console.log('Gateway of India');
} else if (city === 'Bengaluru') {
    console.log('Vidhan Soudha');
} else {
    console.log('I don\'t know');
}