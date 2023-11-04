let secretMessage = ['Learning', 'is', 'not', 'about', 'what', 'you', 'get', 'easily', 'the', 'first', 'time,', 'it', 'is', 'about', 'what', 'you', 'can', 'figure', 'out.', '-2015,', 'Chris', 'Pine,', 'Learn', 'JavaScript'];

console.log(secretMessage.length);

console.log('-------------------- POP --------------------');
secretMessage.pop();
console.log(secretMessage.length);

console.log(`-------------------- add 'TO PROGRAM' --------------------`);
secretMessage.push('to');
secretMessage.push('Program');
console.log(secretMessage);

console.log('-------------------- change [7] to Right --------------------');
secretMessage[7] = 'right';
console.log(secretMessage);

console.log('-------------------- SHIFT --------------------');
secretMessage.shift();
console.log(secretMessage);

console.log('-------------------- UNSHIFT --------------------');
secretMessage.unshift('Programming');
console.log(secretMessage);

console.log('-------------------- SPLICE --------------------');
// array.splice(indexToStart, numberOfIndices, 'stringToAdd');
secretMessage.splice(6,5,'know');
console.log(secretMessage);
//
console.log('-------------------- JOIN --------------------');
console.log(secretMessage.join(' '));
