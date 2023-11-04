// Import the encryptors functions here.
const {caesarCipher, symbolCipher, reverseCipher} = require("./encryptors.js");
const encodedMessage = '';
const encodeMessage = (str) => {
  // Use the encryptor functions here.
  encodedMessage = reverseCipher(symbolCipher(caesarCipher(str,Math.floor(Math.random()*27))));
  return encodeMessage;
}

const decodeMessage = (str) => {
  // Use the encryptor functions here.
    const decodedMessage = caesarCipher(reverseCipher(symbolCipher),(str,(Math.floor(Math.random() * 27))));
    return decodedMessage;

}

// User input / output.

const handleInput = (userInput) => {
  const str = userInput.toString().trim();
  let output;
  if (process.argv[2] === 'encode') {
    output = encodeMessage(str);
  } 
  if (process.argv[2] === 'decode') {
    output = decodeMessage(str);
  } 
  
  process.stdout.write(output + '\n');
  process.exit();
}

// Run the program.
process.stdout.write('Enter the message you would like to encrypt...\n> ');
process.stdin.on('data', handleInput);