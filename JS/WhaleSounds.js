var input = 'turpentine and turtles';
const vowels = 'aeiou';
const resultsArray = [];

for (i = 0; i < input.length; i++){
  // console.log(input[i]);
  // -------------- .push 1 extra e and u for these values
  if(input[i] === 'e'){
    resultsArray.push(input[i]);
  }else if(input[i] === 'u'){
    resultsArray.push(input[i]);
  }
  // -------------- check each input[letter] if they are vowels
  for (j = 0; j < vowels.length; j++){
    // console.log(vowels[j]);
    if (input[i] === vowels[j]){
      // console.log(input[i]);
      resultsArray.push(input[i]);
    }
  }
}

console.log(resultsArray.join(' '));