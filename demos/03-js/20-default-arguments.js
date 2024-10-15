// ES2015
function greet(message = 'Hello', name = 'World',) {
    console.log(`${message} ${name}!`);
}

greet();
greet('Good morning');