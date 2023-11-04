

function reportingForDuty(rank, lastName){
  return `${rank} ${lastName} reporting for duty!`;
}

console.log(reportingForDuty('Private', 'Fido'));

///////////////////////////////////////////////////////////////////

const rollTheDice = () => {
    let die1 = Math.floor(Math.random() * 6) + 1
    let die2 = Math.floor(Math.random() * 6) + 1
    return die1 + die2
}

console.log(rollTheDice);

///////////////////////////////////////////////////////////////////

const calculateWeight = (earthWeight, planet) => {
  switch (planet){
    case 'Mercury':
      return (earthWeight * 0.378);
      break;
    case 'Venus':
      return (earthWeight * 0.907);
      break;
    case 'Mars':
      return (earthWeight * 0.377);
      break;
    case 'Jupiter':
      return (earthWeight * 2.36);
      break;
    case 'Saturn':
      return (earthWeight * 0.916);
      break;
    default:
      return 'Invalid Planet Entry. Try: Mercury, Venus, Mars, Jupiter, or Saturn.';
      break;
  }
}

console.log(calculateWeight(100, 'Jupiter'));

///////////////////////////////////////////////////////////////////

const truthyOrFalsy = value => {
  if (value) {
      return true
  }
  return false
}

///////////////////////////////////////////////////////////////////

const numImaginaryFriends = totalFriends => Math.ceil(totalFriends * .25)

console.log(numImaginaryFriends(20));

///////////////////////////////////////////////////////////////////

const sillySentence = (adjective, verb, noun) => `I am so ${adjective} because I ${verb} coding! Time to write some more awesome ${noun}!`;

console.log(sillySentence('excited', 'love', 'functions')) 

///////////////////////////////////////////////////////////////////

const howOld = (age, year) => {
const currentYear = 2022;
let birthYear = currentYear - age;

if (year > currentYear){
    let calculatedAge = ((year - currentYear) + age);
    return `You will be ${calculatedAge} in the year ${year}`
}else if (year < birthYear){
    let calculatedYears = (birthYear - year);
    return `The year ${year} was ${calculatedYears} years before you were born`
} else if (year < currentYear && year > birthYear){
    let calculatedYears = (year - birthYear);
    return `You were ${calculatedYears} in the year ${year}`
}else{
  return `Please enter your age and year in number format.`
}
}

console.log(howOld(22, 2045))

///////////////////////////////////////////////////////////////////

const whatRelation = percentSharedDNA => {
if (percentSharedDNA === 100) {
    return 'You are likely identical twins.'
}else if (percentSharedDNA > 34) {
    return 'You are likely parent and child or full siblings.'
}else if (percentSharedDNA > 13) {
    return 'You are likely grandparent and grandchild, aunt/uncle and niece/nephew, or half siblings.'
}else if (percentSharedDNA > 5) {
    return 'You are likely 1st cousins.'
}else if (percentSharedDNA > 2) {
    return 'You are likely 2nd cousins.'
}else if (percentSharedDNA > 0) {
    return 'You are likely 3rd cousins'
}else{
    return 'You are likely not related.'
} 
}

console.log(whatRelation(34))
// Should print 'You are likely grandparent and grandchild, aunt/uncle and niece/nephew, or half siblings.'
console.log(whatRelation(3))
// Should print 'You are likely 2nd cousins.'

///////////////////////////////////////////////////////////////////

const tipCalculator = (quality, total) => {
switch (quality){
  case 'bad':
    return (0.05 * total);
    break;
  case 'ok':
    return (0.15 * total);
    break;
  case 'good':
    return (0.2 * total);
    break;
  case 'excellent':
    return (0.3 * total);
    break;
  default:
    return (0.18 * total);
    break;
}
}

console.log(tipCalculator('good', 100))

///////////////////////////////////////////////////////////////////

const toEmoticon = input => {
switch (input){
  case 'shrug':
    return `|_{"}_|`;
    break;
  case 'smiley face':
    return `:)`;
    break;
  case 'frowny face':
    return `:(`;
    break;
  case 'winky face':
    return `;)`;
    break;
  case 'heart':
    return `<3`;
    break;
  default:
    return `|_(* ~ *)_|`;
    break;
}
}

console.log(toEmoticon("whatever")) 

///////////////////////////////////////////////////////////////////

const chores = ['wash dishes', 'do laundry', 'take out trash'];

chores.push('four','five');

console.log(chores);

///////////////////////////////////////////////////////////////////

const groceryList = ['orange juice', 'bananas', 'coffee beans', 'brown rice', 'pasta', 'coconut oil', 'plantains'];

// removes index 0, could be used to re-assign the variable
groceryList.shift();
console.log(`shift removes index 0 or orange juice from array:  ${groceryList}`);
console.log(``);
// adds popcorn to index 0 of groceryList 
groceryList.unshift('popcorn');
console.log(`unshift adds a element at index 0 of the array, in this case its popcorn:  ${groceryList}`);
console.log(``);
//nonmutating methods 
console.log(groceryList.slice(1,4));
console.log(`non-mutating method slice shows elements between (start, end) properties:  ${groceryList}`);
console.log(``);

const pastaIndex = groceryList.indexOf('pasta');
console.log(`.indexOf finds the element that matches the variable entered and returns the index position of the item": ${pastaIndex}`);
console.log(``);

///////////////////////////////////////////////////////////////////

const concept = ['arrays', 'can', 'be', 'mutated'];

///////////
function changeArr(arr){
arr[3] = 'MUTATED';
}

changeArr(concept);
console.log(concept);

///////////
function removeElement(newArr){
newArr.pop();
}

removeElement(concept);
console.log(concept);

///////////////////////////////////////////////////////////////////

const nestedArr = [[1], [2, 3]];

console.log(nestedArr[1]); // Output: [2, 3]
console.log(nestedArr[1][0]);// Output: 2

///////////////////////////////////////////////////////////////////

var numberClusters = [[1, 2],[3, 4],[5, 6]];
const target = numberClusters[2][1];
//outputs 6

///////////////////////////////////////////////////////////////////

const rapperArray = ["Lil' Kim", "Jay-Z", "Notorious B.I.G.", "Tupac"];

for (let i = 0; i < rapperArray.length; i++){
console.log(rapperArray[i]);
if(rapperArray[i] === "Notorious B.I.G."){
  break;
}
}
console.log("And if you don't know, now you know.");


///////////////////////////////////////////////////////////////////

const hobies = ['singing', 'eating', 'quidditch', 'writing'];

for (let i = 0; i < hobies.length; i++) {
console.log(`I enjoy ${hobies[i]}.`);
}


//instead you can use for.... OF.... for iterating through an array or a string

const hobbies = ['singing', 'eating', 'quidditch', 'writing'];

for (const hobby of hobbies) {
console.log(`I enjoy ${hobby}.`);
}

///////////////////////////////////////////////////////////////////
//The continue statement is used to skip one iteration of the loop. For example:

const strangeBirds = ['Shoebill', 'Cockatrice', 'Basan', 'Cow', 'Terrorbird', 'Parotia', 'Kakapo'];

for (const bird of strangeBirds) {
if  (bird === 'Cow'){
  continue;
}
console.log(bird);
}

///////////////////////////////////////////////////////////////////

for (const letter of spellingWord) {
console.log(letter);
}

///////////////////////////////////////////////////////////////////

const pokemonList = ['Pikachu', 'Charizard', 'Squirtle', 'Yoshi', 'Snorlax'];

// Write your code below
for (const pokeselection of pokemonList){
if  (pokeselection === 'Yoshi'){
  console.log(`Skip!`);
  continue;
}
console.log(`you caught a ${pokeselection}!`);

}

///////////////////////////////////////////////////////////////////

let spaceshipin = {
homePlanet: 'Earth',
color: 'silver'
};
spaceshipin.homePlanet; // Returns 'Earth',
spaceshipin.color; // Returns 'silver',

///////////////////////////////////////////////////////////////////

let bigSpaceship = {
homePlanet: 'Earth',
color: 'silver',
'Fuel Type': 'Turbo Fuel',
numCrew: 5,
flightPath: ['Venus', 'Mars', 'Saturn']
};

///////////////////////////////////////////////////////////////////

let spaceship = {
'Fuel Type' : 'Turbo Fuel',
'Active Mission' : true,
homePlanet : 'Earth', 
numCrew: 5
};

let propName =  'Active Mission';
let isActive = spaceship['Active Mission'];
console.log(spaceship['Active Mission']);


///////////////////////////////////////////////////////////////////

const spacechip = {type: 'shuttle'};
spacechip = {type: 'alien'}; // TypeError: Assignment to constant variable.
spacechip.type = 'alien'; // Changes the value of the type property
spacechip.speed = 'Mach 5'; // Creates a new key of 'speed' with a value of 'Mach 5'

spacechip.mission = 'Explore the universe';

delete spacechip.mission;  // Removes the mission property

///////////////////////////////////////////////////////////////////

let spaceshop = {
'Fuel Type' : 'Turbo Fuel',
homePlanet : 'Earth',
color: 'silver',
'Secret Mission' : 'Discover life outside of Earth.'
};


spaceshop.color = 'glorious gold'
spaceshop.numEngines = 6;

delete spaceshop['Secret Mission'];

///////////////////////////////////////////////////////////////////'

let retreatMessage = 'We no longer wish to conquer your planet. It is full of dogs, which we do not care for.';

let alienShip = {
retreat () {
  console.log(retreatMessage);
}, //DONT FORGET A COMMA
takeOff () {
  console.log('Spim... Borp... Glix... Blastoff!');
}
}

alienShip.retreat();
alienShip.takeOff();

///////////////////////////////////////////////////////////////////

let spaceships = {
passengers: [{name: 'Space Dog'}],
telescope: {
  yearBuilt: 2018,
  model: "91031-XLT",
  focalLength: 2032 
},
crew: {
  captain: { 
    name: 'Sandra', 
    degree: 'Computer Engineering', 
    encourageTeam() { console.log('We got this!') },
   'favorite foods': ['cookies', 'cakes', 'candy', 'spinach'] }
},
engine: {
  model: "Nimbus2000"
},
nanoelectronics: {
  computer: {
    terabytes: 100,
    monitors: "HD"
  },
  'back-up': {
    battery: "Lithium",
    terabytes: 50
  }
}
}; 

let capFave = spaceship.crew.captain['favorite foods'][0];
let firstPassenger = spaceship.passengers[0]

///////////////////////////////////////////////////////////////////

let spaceshiper = {
'Fuel Type' : 'Turbo Fuel',
homePlanet : 'Earth'
};

let greenEnergy = obj => {
obj['Fuel Type'] = 'avocado oil';
}

let remotelyDisable = obj => {
obj.disabled = true;
}
greenEnergy(spaceshiper)
remotelyDisable(spaceshiper)
console.log(spaceshiper)

///////////////////////////////////////////////////////////////////

// for...in
let spaceshep = {
crew: {
  captain: { 
    name: 'Lily', 
    degree: 'Computer Engineering', 
    cheerTeam() { console.log('You got this!') } 
  },
  'chief officer': { 
    name: 'Dan', 
    degree: 'Aerospace Engineering', 
    agree() { console.log('I agree, captain!') } 
  },
  medic: { 
    name: 'Clementine', 
    degree: 'Physics', 
    announce() { console.log(`Jets on!`) } },
  translator: {
    name: 'Shauna', 
    degree: 'Conservation Science', 
    powerFuel() { console.log('The tank is full!') } 
  }
}
}; 

// for...in
for (let crewMember in spaceshep.crew) {
console.log(`${crewMember}: ${spaceshep.crew[crewMember].name}`);
}

///////////////////////////////////////////////////////////////////

let spadeship = {
crew: {
captain: { 
    name: 'Lily', 
    degree: 'Computer Engineering', 
    cheerTeam() { console.log('You got this!') } 
    },
'chief officer': { 
    name: 'Dan', 
    degree: 'Aerospace Engineering', 
    agree() { console.log('I agree, captain!') } 
    },
medic: { 
    name: 'Clementine', 
    degree: 'Physics', 
    announce() { console.log(`Jets on!`) } },
translator: {
    name: 'Shauna', 
    degree: 'Conservation Science', 
    powerFuel() { console.log('The tank is full!') } 
    }
}
}; 

for (let crewMember in spadeship.crew){
console.log(`${crewMember}: ${spadeship.crew[crewMember].name}`);
console.log(`${spadeship.crew[crewMember].name}: ${spadeship.crew[crewMember].degree}`);
}

///////////////////////////////////////////////////////////////////

const robot1 = {
model: '1E78V2',
energyLevel: 100,
provideInfo() {
  return `I am ${this.model} and my current energy level is ${this.energyLevel}.`
}
};

console.log(robot1.provideInfo());

///////////////////////////////////////////////////////////////////

const robot = {
_energyLevel: 100,
recharge(){
  this._energyLevel += 30;
  console.log(`Recharged! Energy is currently at ${this._energyLevel}%.`)
}
};

robot._energyLevel = 'high';
robot.recharge();

///////////////////////////////////////////////////////////////////

const robot = {
_model: '1E78V2',
_eenergyLevel: 100,

get eenergyLevel(){
  if (typeof this._eenergyLevel === 'number'){
    return 'My current energy level is ' + this._eenergyLevel
  }else{
    return 'System malfunction: cannot retrieve energy level'
  }
}
};

console.log(robot.eenergyLevel);

///////////////////////////////////////////////////////////////////

// Settterrrrrss
const robot = {
_model: '1E78V2',
_energyLevel: 100,
_numOfSensors: 15,
get numOfSensors(){
  if(typeof this._numOfSensors === 'number'){
    return this._numOfSensors;
  } else {
    return 'Sensors are currently down.'
  }
  
},
set numOfSensors(num){
  if (typeof num === 'number' && num >= 0){
    this._numOfSensors = num;
  }else{
    console.log('Pass in a number that is greater than or equal to 0');
  }

},
};




///////////////////////////////////////////////////////////////////

const monsterFactory = (name, age, energySource, catchPhrase) => {
return { 
  name: name,
  age: age, 
  energySource: energySource,
  scare() {
    console.log(catchPhrase);
  } 
}
};


///////////////////////////////////////////////////////////////////

const robotFactory = (model, mobile) =>{
return {
model: model,
mobile: mobile,

beep(){
  console.log('Beep Boop');
}
}
}
const tinCan = robotFactory('P-500', true);
tinCan.beep();

///////////////////////////////////////////////////////////////////

function robotFactory(model, mobile){
return {
  model,
  mobile,
  beep() {
    console.log('Beep Boop');
  }
}
}

// To check that the property value shorthand technique worked:
const newRobot = robotFactory('P-501', false)
console.log(newRobot.model)
console.log(newRobot.mobile)

///////////////////////////////////////////////////////////////////

const vampire = {
name: 'Dracula',
residence: 'Transylvania',
preferences: {
  day: 'stay inside',
  night: 'satisfy appetite'
}
};

const Residence = vampire.residence; 
console.log(Residence); // Prints 'Transylvania' 

const { residence } = vampire; 
console.log(residence); // Prints 'Transylvania'

const { day } = vampire.preferences; 
console.log(day); // Prints 'stay inside


///////////////////////////////////////////////////////////////////

const robot = {
model: '1E78V2',
energyLevel: 100,
functionality: {
  beep() {
    console.log('Beep Boop');
  },
  fireLaser() {
    console.log('Pew Pew');
  },
}
};

const { functionality } = robot;
//can now directly call methods inside robot with functionality.
functionality.beep();

///////////////////////////////////////////////////////////////////

const robot = {
model: 'SAL-1000',
mobile: true,
sentient: false,
armor: 'Steel-plated',
energyLevel: 75
};

// What is missing in the following method call?
const robotKeys = Object.keys(robot);

console.log(robotKeys);

// Declare robotEntries below this line:
const robotEntries = Object.entries(robot)
console.log(robotEntries);

// Declare newRobot below this line:
const NewRobot = Object.assign({laserBlaster: true, voiceRecognition: true}, robot);

console.log(NewRobot);

///////////////////////////////////////////////////////////////////

const car = {
numDoors: 4,
isDirty: true,
color: 'red'
}

for (let key in car) {
console.log(key)
}

///////////////////////////////////////////////////////////////////

const menu = {
_meal: '',
_price: 0,
set meal(mealToCheck) {
  if(typeof mealToCheck === 'string'){
    return this._meal = mealToCheck;
  }
},
set price(priceToCheck) {
  if(typeof priceToCheck === 'number'){
    return this._price = priceToCheck;
  }
},
get todaysSpecial(){
  if (this._meal && this._price){
    console.log('Today’s Special is Spaghetti for $5!')
  }else{
    console.log('Meal or price was not set correctly!')
  }
}

}

menu.meal = 'Burger';
menu.price = 12;
console.log(menu._meal);
console.log(menu._price);
menu.todaysSpecial;

///////////////////////////////////////////////////////////////////
/////////////////add objects to array of objects///////////////////
///////////////////////////////////////////////////////////////////

const team = {
_players: [
  {firstName: 'John', lastName: 'Batemen', age: 22},
  {firstName: 'Roger', lastName: 'Bishop', age: 22},
  {firstName: 'Robert', lastName: 'Bicycle', age: 22}
],
_games: [
  {opponent: 'John', teamPoints: 24, opponentPoints: 22},
  {opponent: 'Roger', teamPoints: 24, opponentPoints: 22},
  {opponent: 'Robert', teamPoints: 24, opponentPoints: 22}
],
get players(){
  return this._players
},
get games(){
  return this._games
},
addPlayer(newFirstName, newLastName, newAge){
  let player = {
    FirstName: newFirstName,
    LastName: newLastName,
    age: newAge
  };
this.players.push(player);
},
addGame(newOpponent, newTeamPoints, newOpponentPoints){
  let game = {
    Opponent: newOpponent,
    TeamPoints: newTeamPoints,
    OpponentPoints: newOpponentPoints
  };
  this.games.push(game)
}
};

team.addPlayer('Bugs', 'Bunny', 76);
console.log(team.players);

team.addGame('Titans', 100, 98);
console.log(team.games);

///////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////

const addTwo = num => {
return num + 2;
}

const checkConsistentOutput = (func, val) => {
let checkA = val + 2;
let checkB = func(val);
return checkA === checkB ? func(val) : 'inconsistent results';  
}

console.log(checkConsistentOutput(addTwo, 10));

///////////////////////////////////////////////////////////////////

const artists = ['Picasso', 'Kahlo', 'Matisse', 'Utamaro'];
///////// forEach
artists.forEach(artist => {
console.log(artist + ' is one of my favorite artists.');
});

const numbers = [1, 2, 3, 4, 5];
///////// .map
const squareNumbers = numbers.map(number => {
return number * number;
});

console.log(squareNumbers);

const things = ['desk', 'chair', 5, 'backpack', 3.14, 100];
///////// .filter
const onlyNumbers = things.filter(thing => {
return typeof thing === 'number';
});

console.log(onlyNumbers);

///////////////////////////////////////////////////////////////////

const fruits = ['mango', 'papaya', 'pineapple', 'apple'];

// Iterate over fruits below
fruits.forEach(fruit => console.log(`I want to eat a ${fruit}.`))

///////////////////////////////////////////////////////////////////

const checkThatTwoPlusTwoEqualsFourAMillionTimes = () => {
for(let i = 1; i <= 1000000; i++) {
  if ( (2 + 2) != 4) {
    console.log('Something has gone very wrong :( ');
  }
}
};

const isTwoPlusTwo = checkThatTwoPlusTwoEqualsFourAMillionTimes;
isTwoPlusTwo();
console.log(isTwoPlusTwo.name);


///////////////////////////////////////////////////////////////////

const animals = ['Hen', 'elephant', 'llama', 'leopard', 'ostrich', 'Whale', 'octopus', 'rabbit', 'lion', 'dog'];

// Create the secretMessage array below
const secretMessage = animals.map(animal => animal[0]);

console.log(secretMessage.join(''));

const bigNumbers = [100, 200, 300, 400, 500];

// Create the smallNumbers array below
const smallNumbers = bigNumbers.map(num => num/100
);

console.log(smallNumbers.join(''));

///////////////////////////////////////////////////////////////////
// .FILTER!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
const words = ['chair', 'music', 'pillow', 'brick', 'pen', 'door']; 

const shortWords = words.filter(word => {
return word.length < 6;
});
console.log(words); // Output: ['chair', 'music', 'pillow', 'brick', 'pen', 'door']; 
console.log(shortWords); // Output: ['chair', 'music', 'brick', 'pen', 'door']

///////////////////////////////////////////////////////////////////

const randomNumbers = [375, 200, 3.14, 7, 13, 852];

// .filter()


const favoriteWords = ['nostalgia', 'hyperbole', 'fervent', 'esoteric', 'serene'];


// .filter()

const SmallNumbers = randomNumbers.filter(num => {
  if (num < 250){
    return true;
  }
});

const longFavoriteWords = favoriteWords.filter(word => {
  return word.length > 7;
});

///////////////////////////////////////////////////////////////////

const moreAnimals = ['hippo', 'tiger', 'lion', 'seal', 'cheetah', 'monkey', 'salamander', 'elephant'];

const foundAnimal = moreAnimals.findIndex(x => { return x === 'elephant'});

const startsWithS = moreAnimals.findIndex(y => { return y[0] === 's'});

///////////////////////////////////////////////////////////////////


///////.Reduce  returns a single value.

const newNumbers = [1, 3, 5, 7];

const newSum = newNumbers.reduce((accumulator, currentValue) => {
console.log('The value of accumulator: ', accumulator);
console.log('The value of currentValue: ', currentValue);
return accumulator + currentValue;
}, 10)

console.log(newSum);

///////////////////////////////////////////////////////////////////

const notWords = ['unique', 'uncanny', 'pique', 'oxymoron', 'guise'];
//.some tests whether at least one element in the array passes the test
console.log(notWords.some((word) => {
return word.length < 6;
}));

// Use the .filter() method to save any words longer than 5 characters to a new variable called interestingWords
const interestingWords = notWords.filter((longWord) => {
return longWord.length > 5;
});

// check if every element has more than 5 characters.
console.log(interestingWords.every((word) => {
return word.length > 5;
} ));

///////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////

const cities = ['Orlando', 'Dubai', 'Edinburgh', 'Chennai', 'Accra', 'Denver', 'Eskisehir', 'Medellin', 'Yokohama'];

const nums = [1, 50, 75, 200, 350, 525, 1000];

//  Choose a method that will return undefined
cities.forEach(city => console.log('Have you visited ' + city + '?'));

// Choose a method that will return a new array
const longCities = cities.filter(city => city.length > 7);

// Choose a method that will return a single value
const word = cities.reduce((acc, currVal) => {
return acc + currVal[0]
}, "C");

console.log(word)

// Choose a method that will return a new array
const smallerNums = nums.map(num => num - 5);

// Choose a method that will return a boolean value
nums.some(num => num < 0);

///////////////////////////////////////////////////////////////////

const isSumBigger = (number1, number2, total) => {
const numberSum = number1 + number2;

if (numberSum > total) {
  return true;
} else {
  return false;
}
}

// Should return true
console.log('isSumBigger(1, 3, 2) returns: ' + isSumBigger(1, 3, 2));

// Should return false
console.log('isSumBigger(1, 3, 5) returns: ' + isSumBigger(1, 3, 5));

///////////////////////////////////////////////////////////////////

function getLaterFirstLetter(string1, string2) {
const firstLetter1 = string1.charAt(0);
const firstLetter2 = string2.charAt(0);

if (firstLetter1 === firstLetter2) {
  return null;
} else if (firstLetter1 < firstLetter2) {
  return string2;
} else {
  return string1;
}
}

// Should return "blueberry"
console.log("getLaterFirstLetter('avocado', 'blueberry') returns: " + getLaterFirstLetter('avocado', 'blueberry'));

// Should return "zebra"
console.log("getLaterFirstLetter('zebra', 'aardvark') returns : " + getLaterFirstLetter('zebra', 'aardvark'));

// Should return null
console.log("getLaterFirstLetter('astro', 'afar') returns: " + getLaterFirstLetter('astro', 'afar'));

///////////////////////////////////////////////////////////////////

function containsCake(string) {
if(string.includes('cake')){
  return true;
}else{
  return false;
}
}

// Should return true
console.log("containsCake('I think cake is my soul mate.') returns: " + containsCake('I think cake is my soul mate.'));

// Should return false
console.log("containsCake('Pie is certainly the coolest dessert.') returns: " + containsCake('Pie is certainly the coolest dessert.'));

///////////////////////////////////////////////////////////////////
// Alternate solutions:

const reverseArray = arr => {
let reversed = [];
for (let i = arr.length - 1; i >= 0; i--) {
    reversed.push(arr[i]);
}
return reversed
}


// Using the .unshift() method
const reverseArray = arr => {
let reversed = [];
for (let i = 0; i < arr.length; i++) {
    reversed.unshift(arr[i]);
}
return reversed
}

// As a function declaration:
function reverseArray(arr) {
let reversed = [];
for (let i = arr.length - 1; i >= 0; i--) {
    reversed.push(arr[i]);
}
return reversed
}


const arr = ['sense.','make', 'all', 'will', 'This'];

console.log(reverseArray(sentence)); 

/////////////////////////////////////////////////////////////////////////////////////////////

const greetAliens = aliens => {
for (i = 0; i < aliens.length; i++){
  console.log(`Oh powerful ${aliens[i]}, we humans offer our unconditional surrender!`);
}
}
const aliens = ["Blorgous", "Glamyx", "Wegord", "SpaceKing"];
greetAliens(aliens);

///////////////////////////////////////////////////////////////////

const convertToBaby = Animals => {
let babyAnimals = [];
for(let i = 0; i < Animals.length; i++){
  babyAnimals.push(`baby ${Animals[i]}`);
}
return babyAnimals
}
const Animals = ['panda', 'turtle', 'giraffe', 'hippo', 'sloth', 'human'];

console.log(convertToBaby(Animals)) 

///////////////////////////////////////////////////////////////////

const anumbers = [5, 3, 9, 30];

const smallestPowerOfTwo = arr => {
    let results = [];
    for (let i = 0; i < arr.length; i++) {
          number = arr[i];
          let j = 1;
          while (j < number) {
                j = j * 2;
          }
          results.push(j);
    }
    return results
};

console.log(smallestPowerOfTwo(anumbers));


///////////////////////////////////////////////////////////////////

const sortYears = arr => {
arr.sort();
arr.reverse();
return arr
}
const years = [1970, 1999, 1951, 1982, 1963, 2011, 2018, 1922]

console.log(sortYears(years))

///////////////////////////////////////////////////////////////////

const justCoolStuff = (firstArray, secondArray) => firstArray.filter(word => secondArray.includes(word))

const coolStuff = ['gameboys', 'skateboards', 'backwards hats', 'fruit-by-the-foot', 'pogs', 'my room', 'temporary tattoos'];

const myStuff = [ 'rules', 'fruit-by-the-foot', 'wedgies', 'sweaters', 'skateboards', 'family-night', 'my room', 'braces', 'the information superhighway']; 

console.log(justCoolStuff(myStuff, coolStuff))

///////////////////////////////////////////////////////////////////

const isTheDinnerVegan = food => food.every(item => item.source === 'plant')

const dinner = [{name: 'hamburger', source: 'meat'}, {name: 'cheese', source: 'dairy'}, {name: 'ketchup', source:'plant'}, {name: 'bun', source: 'plant'}, {name: 'dessert twinkies', source:'unknown'}];

console.log(isTheDinnerVegan(dinner))

///////////////////////////////////////////////////////////////////

const speciesArray = [ {speciesName:'shark', numTeeth:50}, {speciesName:'dog', numTeeth:42}, {speciesName:'alligator', numTeeth:80}, {speciesName:'human', numTeeth:32}];

const sortSpeciesByTeeth = arr => arr.sort((a,b) => a.numTeeth > b.numTeeth);

console.log(sortSpeciesByTeeth(speciesArray))

// Should print:
// [ { speciesName: 'human', numTeeth: 32 },
//   { speciesName: 'dog', numTeeth: 42 },
//   { speciesName: 'shark', numTeeth: 50 },
//   { speciesName: 'alligator', numTeeth: 80 } ]

///////////////////////////////////////////////////////////////////

const findMyKeys = arr => arr.findIndex(element => element === 'keys');

const randomStuff = ['credit card', 'screwdriver', 'receipt', 'gum', 'keys', 'used gum', 'plastic spoon'];

console.log(findMyKeys(randomStuff))

///////////////////////////////////////////////////////////////////

const dogFactory = (name, breed, weight) => {
return{
  _name: name,
  _breed: breed,
  _weight: weight,

  bark() {
  return 'ruff! ruff!'
  },

  eatTooManyTreats() {
    return this.weight = this._weight + 1
  },

  set name(nameToCheck){
    if (typeof nameToCheck === 'string'){
      return this._name = nameToCheck;
    }
  },
  set breed(breedToCheck){
    if (typeof breedToCheck === 'string'){
      return this._breed = breedToCheck;
    }
  },
  set weight(weightToCheck){
    if (typeof weightToCheck === 'number'){
      return this._weight = weightToCheck
    }
  },
  get name(){
    return this._name;
  },
  get breed(){
    return this._breed;
  },
  get weight(){
    return this._weight;
  }
}
}

////////////////////////////////destructuring to shorten our code/
////////////////////////////////destructuring to shorten our code/
////////////////////////////////destructuring to shorten our code/

// If we wanted to access these cars individually and assign them to variables we could do this:

let cars = ['ferrari', 'tesla', 'cadillac'];
let car1 = cars[0];
let car2 = cars[1];
let car3 = cars[2];
console.log(car1, car2, car3); // Prints: ferrari tesla cadillac
// We can use destructuring to shorten our code and make it more concise:

let cars = ['ferrari', 'tesla', 'cadillac'];
let [car1, car2, car3] = cars;
console.log(car1, car2, car3); // Prints: ferrari tesla cadillac

//////////////////////////destruct objects/////////////////////////////////////////

let planets = { x: 'Saturn', y: 'Mars', z: 'Neptune' };

// Destructure here

let {x, y, z} = planets;
console.log(x, y, z);


///////////////////////////////////////////////////////////////////

let truck = {
  model: '1977 Mustang convertible',
  maker: 'Ford',
  city: 'Detroit',
  year: '1977',
  convertible: true
};
 
const printCarInfo = ({model, maker, city}) => {
  console.log(`The ${model}, or ${maker}, is in the city ${city}.`);
};
 
printCarInfo(truck);
// Prints: The 1977 Mustang convertible, or Ford, is in the city Detroit.

///////////////////////////////////////////////////////////////////

let prairieRose = {
  name: 'Prairie Rose',
  scientificName: 'Rosa arkansana',
  kingdom:	'Plantae',
  genus:	'Rosa',
  use: 'ornamental'
};

const printPlantInfo = ({name,scientificName,kingdom}) => {
  console.log(`The ${name}, or ${scientificName}, is in the kingdom ${kingdom}`)
};

printPlantInfo(prairieRose);

///////////////////////////////////////////////////////////////////

let prairieRose = {
  name: 'Prairie Rose',
  scientificName: 'Rosa arkansana',
  kingdom:	'Plantae',
  genus:	'Rosa',
  use: 'ornamental'
};

const printPlantInfo = ({ name, scientificName, kingdom }) => {
  console.log(`The ${name}, or ${scientificName}, is in the kingdom ${kingdom}.`)
};

printPlantInfo(prairieRose);


///////////////////////////////JSX////////////////////////////////////
///////////////////////////////JSX////////////////////////////////////
///////////////////////////////JSX////////////////////////////////////
///////////////////////////////JSX////////////////////////////////////
///////////////////////////////JSX////////////////////////////////////
///////////////////////////////JSX////////////////////////////////////
///////////////////////////////JSX////////////////////////////////////

///////////////////////////////JSX////////////////////////////////////
//CAN ONLY HAVE 1 OUTERMOST ELEMENT//////SO WRAP IN A DIV/////////////

const myDiv = (
  <div>
    <h1>Hello world</h1>
  </div>
);

///////////////////////////////////////////////////////////////////

import React from 'react';
import ReactDOM from 'react-dom';

// Write code here:

ReactDOM.render(<h1>Render me!</h1>, document.getElementById('app'));

///////////////////////////////////////////////////////////////////

import React from 'react';
import ReactDOM from 'react-dom';

// Write code here:
const myList = (
  <ul>
    <li>text</li>
    <li>text</li>
    <li>text</li>
    <br />
  </ul>
);

ReactDOM.render( myList, document.getElementById('app'));

///////////////////////////////////////////////////////////////////

const hello = <h1>Hello world</h1>;
 
// This will add "Hello world" to the screen:
 
ReactDOM.render(hello, document.getElementById('app'));
 
// This won't do anything at all:
 
ReactDOM.render(hello, document.getElementById('app'));

///////////////////////////////////////////////////////////////////
import React from 'react';
import ReactDOM from 'react-dom';

// Write code here:
ReactDOM.render(
  <h1>2 + 3</h1>,
  document.getElementById('app')
);
///////////////////////////////////////// prints 2+3

import React from 'react';
import ReactDOM from 'react-dom';

// Write code here:
ReactDOM.render(
  <h1>{2 + 3}</h1>,
  document.getElementById('app')
);
///////////////////////////////////////// prints 5

import React from 'react';
import ReactDOM from 'react-dom';

// Write code here:
const math = <h1>2 + 3 = {2 + 3}</h1>
ReactDOM.render( math, document.getElementById('app'));
///////////////////////////////////////// prints 2+3 = 5

///////////////////////////////////////////////////////////////////

import React from 'react';
import ReactDOM from 'react-dom';

const theBestString = 'tralalalala i am da best';

ReactDOM.render(<h1>{theBestString}</h1>, document.getElementById('app'));

///////////////////////////////////////////////////////////////////

const pics = {
  panda: "http://bit.ly/1Tqltv5",
  owl: "http://bit.ly/1XGtkM3",
  owlCat: "http://bit.ly/1Upbczi"
}; 
 
const panda = (
  <img 
    src={pics.panda} 
    alt="Lazy Panda" />
);
 
const owl = (
  <img 
    src={pics.owl} 
    alt="Unimpressed Owl" />
);
 
const owlCat = (
  <img 
    src={pics.owlCat} 
    alt="Ghastly Abomination" />
); 

///////////////////////////////////////////////////////////////////

import React from 'react';
import ReactDOM from 'react-dom';

const goose = 'https://content.codecademy.com/courses/React/react_photo-goose.jpg';

// Declare new variable here:

const gooseImg = <img src={goose}/>
ReactDOM.render(gooseImg, document.getElementById('app'));

///////////////////////////////////////////////////////////////////

import React from 'react';
import ReactDOM from 'react-dom';

function makeDoggy(e) {
  // Call this extremely useful function on an <img>.
  // The <img> will become a picture of a doggy.
  e.target.setAttribute('src', 'https://content.codecademy.com/courses/React/react_photo-puppy.jpeg');
  e.target.setAttribute('alt', 'doggy');
}

const kitty = (
	<img 
		src="https://content.codecademy.com/courses/React/react_photo-kitty.jpg" 
		alt="kitty" 
    onClick={makeDoggy}
    />
);

ReactDOM.render( kitty, document.getElementById('app'));

///////////////////////////////////////////////////////////////////

if(coinToss() === 'heads'){
  img = <img src={pics.kitty} />
}else{
  img = <img src={pics.doggy} />
}

ReactDOM.render( img, document.getElementById('app'));

///////////////////////////////////////////////////////////////////

const headline = (
  <h1>
    { age >= drinkingAge ? 'Buy Drink' : 'Do Teen Stuff' }
  </h1>
);

///////////////////////////////////////////////////////////////////

import React from 'react';
import ReactDOM from 'react-dom';

function coinToss () {
  // Randomly return either 'heads' or 'tails'.
  return Math.random() < 0.5 ? 'heads' : 'tails';
}

const pics = {
  kitty: 'https://content.codecademy.com/courses/React/react_photo-kitty.jpg',
  doggy: 'https://content.codecademy.com/courses/React/react_photo-puppy.jpeg'
};

const img = <img src={pics[coinToss() === 'heads' ? 'kitty' : 'doggy']} />;

ReactDOM.render(
	img, 
	document.getElementById('app')
);

///////////////////////////////////////////////////////////////////

import React from 'react';
import ReactDOM from 'react-dom';

// judgmental will be true half the time.
const judgmental = Math.random() < 0.5;

const favoriteFoods = (
  <div>
    <h1>My Favorite Foods</h1>
    <ul>
      <li>Sushi Burrito</li>
      <li>Rhubarb Pie</li>
      { !judgmental  && <li>Nacho Cheez Straight Out The Jar</li>}
      <li>Broiled Grapefruit</li>
    </ul>
  </div>
);

ReactDOM.render(
	favoriteFoods, 
	document.getElementById('app')
);

///////////////////////////////////////////////////////////////////

// This is fine in JSX, not in an explicit array:
 
<ul>
  <li>item 1</li>
  <li>item 2</li>
  <li>item 3</li>
</ul>
 
// This is also fine!
 
const liArray = [
  <li>item 1</li>, 
  <li>item 2</li>, 
  <li>item 3</li>
];
 
<ul>{liArray}</ul>

///////////////////////////////////////////////////////////////////

import React from 'react';
import ReactDOM from 'react-dom';
const people = ['Rowe', 'Prevost', 'Gare'];

const peopleLis = people.map(person => <li>{person}</li>
  // expression goes here:

);

// ReactDOM.render goes here:
ReactDOM.render(<ul>{peopleLis}</ul>, document.getElementById('app'));

///////////////////////////////////////////////////////////////////

import React from 'react';
import ReactDOM from 'react-dom';

const people = ['Rowe', 'Prevost', 'Gare'];

const peopleLis = people.map((person, i )=> <li key={'person_' + i}>{person}</li>
  // expression goes here:

);

// ReactDOM.render goes here:
ReactDOM.render(<ul>{peopleLis}</ul>, document.getElementById('app'));

///////////////////////////////////////////////////////////////////
//The following JSX expression:

const h1 = <h1>Hello world</h1>;
//can be rewritten without JSX, like this:

const h1 = React.createElement(
  "h1",
  null,
  "Hello world"
);

/////////////////////////React Component//////////////////////////////////////////
import React from 'react';
import ReactDOM from 'react-dom';

class MyComponentClass extends React.Component {
  render() {
    return <h1>Hello world</h1>;
  }
}

// component goes here:
<MyComponentClass />


///////////////////////////////////////////////////////////////////

ReactDOM.render(
  <MyComponentClass />,
  document.getElementById('app')
);

///////////////////////////////////////////////////////////////////

import React from 'react';
import ReactDOM from 'react-dom';

class QuoteMaker extends React.Component {
  render() {
    return (
      <blockquote>
        <p>
          The world is full of objects, more or less interesting; I do not wish to add any more.
        </p>
        <cite>
          <a target="_blank"
            href="https://en.wikipedia.org/wiki/Douglas_Huebler">
            Douglas Huebler
          </a>
        </cite>
      </blockquote>
    );
  }
};

ReactDOM.render(
  <QuoteMaker />,
  document.getElementById('app')
);

///////////////////////////////////////////////////////////////////

import React from "react";
import ReactDOM from "react-dom";

class QuoteMaker extends React.Component {
  render() {
    return (
      <blockquote>
        <p> What is important now is to recover our senses. </p>
        <cite>
          <a target="_blank" href="https://en.wikipedia.org/wiki/Susan_Sontag">
            Susan Sontag
          </a>
        </cite>
      </blockquote>
    );
  }
}

ReactDOM.render(<QuoteMaker />, document.getElementById("app"));

///////////////////////////////////////////////////////////////////

import React from 'react';
import ReactDOM from 'react-dom';

class QuoteMaker extends React.Component {
  render() {
    return (
      <blockquote>
        <p>
          The world is full of objects, more or less interesting; I do not wish to add any more.
        </p>
        <cite>
          <a target="_blank"
            href="https://en.wikipedia.org/wiki/Douglas_Huebler">
            Douglas Huebler
          </a>
        </cite>
      </blockquote>
    );
  }
};

ReactDOM.render(
  <QuoteMaker />,
  document.getElementById('app')
);


/////////////////////CREATE A NEW OWL PICTURE class//////////////////////////

import React from 'react';
import ReactDOM from 'react-dom';


const owl = {
  title: 'Excellent Owl',
  src: 'https://content.codecademy.com/courses/React/react_photo-owl.jpg'
};

// Component class starts here:
class Owl extends React.Component {
  render () {
    return (
      <div>
        <h1>{owl.title}</h1>
        <img alt={owl.title} src={owl.src}/> 
      </div>
    )
  }
}

ReactDOM.render(
  <Owl />,
  document.getElementById('app')
);


///////////////////////////////////////////////////////////////////

import React from 'react';
import ReactDOM from 'react-dom';


const friends = [
  {
    title: "Yummmmmmm",
    src: "https://content.codecademy.com/courses/React/react_photo-monkeyweirdo.jpg"
  },
  {
    title: "Hey Guys!  Wait Up!",
    src: "https://content.codecademy.com/courses/React/react_photo-earnestfrog.jpg"
  },
  {
    title: "Yikes",
    src: "https://content.codecademy.com/courses/React/react_photo-alpaca.jpg"
  }
];

// New component class starts here:

class Friend extends React.Component {
  render () {
    let friend = friends[2];
    return (
      <div>
        <h1>{friend.title}</h1>
        <img src={friend.src} />
      </div>
    );
  }
};

ReactDOM.render(
  <Friend />,
  document.getElementById('app')
);

///////////////////////////////////////////////////////////////////

import React from 'react';
import ReactDOM from 'react-dom';

const fiftyFifty = Math.random() < 0.5;

// New component class starts here:

class TonightsPlan extends React.Component {
  render () {
    let task;
    if (fiftyFifty) {
      return <h1>Tonight I'm going out WOOO</h1>
    } else {
      return <h1>Tonight I'm going to bed WOOO</h1>
    }
    };
}

ReactDOM.render(
	<TonightsPlan />,
	document.getElementById('app')
);

///////////////////////////////////////////////////////////////////

import React from 'react';
import ReactDOM from 'react-dom';

class MyName extends React.Component {
	// name property goes here:
  get name() {
    return 'Himney crocket'
  }

  render() {
    return <h1> My name is {this.name}.</h1>;
  }
}

ReactDOM.render(<MyName />, document.getElementById('app'));

///////////////////////////////////////////////////////////////////

import React from 'react';
import ReactDOM from 'react-dom';

class Button extends React.Component {
  scream() {
    alert('AAAAAAAAHHH!!!!!');
  }

  render() {
    return <button onClick={this.scream}>AAAAAH!</button>;
  }
}

ReactDOM.render(<Button />, document.getElementById('app'));

///////////////////////////////////////////////////////////////////
export const faveManifestos = {
  futurist: 'http://www.artype.de/Sammlung/pdf/russolo_noise.pdf',
  agile:  'https://agilemanifesto.org/iso/en/manifesto.html',
  cyborg:   'http://faculty.georgetown.edu/irvinem/theory/Haraway-CyborgManifesto-1.pdf'
};
 
export const alsoRan = 'TimeCube';

import { faveManifestos, alsoRan } from './Manifestos';

///////////////////////////////////////////////////////////////////

import React from 'react';

export class NavBar extends React.Component {
  render() {
    const pages = ['home', 'blog', 'pics', 'bio', 'art', 'shop', 'about', 'contact'];
    const navLinks = pages.map(page => {
      return (
        <a href={'/' + page}>
          {page}
        </a>
      )
    });

    return <nav>{navLinks}</nav>;
  }
}

///////////////////////////////////////////////////////////////////

import React from 'react';
import ReactDOM from 'react-dom';
import {NavBar} from './NavBar';

class ProfilePage extends React.Component {
  render() {
    return (
      <div>
        <NavBar />
        <h1>All About Me!</h1>
        <p>I like movies and blah blah blah blah blah</p>
        <img src="https://content.codecademy.com/courses/React/react_photo-monkeyselfie.jpg" />
      </div>
    );
  }
}

ReactDOM.render(<ProfilePage />, document.getElementById('app'));

///////////////////////////////////////////////////////////////////

import React from 'react';
import ReactDOM from 'react-dom';

class Greeting extends React.Component {
  render() {
    return <h1>Hi there, {this.props.firstName}!</h1>;
  }
}

ReactDOM.render(
  <Greeting firstName='qweasd' />, 
  document.getElementById('app')
);


///////////////////////////////////////////////////////////////////
//greating.js

import React from 'react';

export class Greeting extends React.Component {
  render() {

                          return <h1>Hi there, {this.props.name}!</h1>;
  
  }
}

//app.js 


import React from 'react';
import ReactDOM from 'react-dom';
import {Greeting} from './Greeting';

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>
          Hullo and, "Welcome to The Newzz," "On Line!"
        </h1>

                        <Greeting name="billy" /> 

        <article>
          Latest newzz:  where is my phone?
        </article>
      </div>
    );
  }
}

ReactDOM.render(
  <App />, 
  document.getElementById('app')
);

///////////////////////////////////////////////////////////////////

//talker.js
import React from 'react';
import ReactDOM from 'react-dom';
import { Button } from './Button';

class Talker extends React.Component {
  talk() {
    let speech = '';
    for (let i = 0; i < 10000; i++) {
      speech += 'blah ';
    }
    alert(speech);
  }
  
  render() {
    return <Button talk={this.talk}/>;
  }
}

ReactDOM.render(
  <Talker />,
  document.getElementById('app')
);

///////button.js


import React from 'react';

export class Button extends React.Component {
  render() {
    return (
      <button onClick={this.props.talk}>
        Click me!
      </button>
    );
  }
}
///////////////////////////////////////////////////////////////////

import React from 'react';
import ReactDOM from 'react-dom';

class Button extends React.Component {
  render() {
    return (
      <button>
        {this.props.text}
      </button>
    );
  }
}

// defaultProps goes here:
Button.defaultProps = {
  text: 'I am a button'
}

ReactDOM.render(
  <Button text=""/>, 
  document.getElementById('app')
);


///////////////////////////////////////////////////////////////////

class TodayImFeeling extends React.Component {
  constructor(props) {
    super(props);
    this.state = { mood: 'decent' };
  }
 
  render() {
    return (
      <h1>
        I'm feeling {this.state.mood}!
      </h1>
    );
  }
}

///////////////////////////////////////////////////////////////////

import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
	// constructor method begins here:
constructor(props) {
  super(props);
  this.state = { title: 'Best App' }
}
	
  render() {
    return (
      <h1>
        {this.state.title}
      </h1>
    );
  }
}
ReactDOM.render(<App />, document.getElementById('app'));

///////////////////////////////////////////////////////////////////

class Example extends React.Component {
  constructor(props) {
    super(props);
    this.state = { weather: 'sunny' };
    this.makeSomeFog = this.makeSomeFog.bind(this);
  }
 
  makeSomeFog() {
    this.setState({
      weather: 'foggy'
    });
  }
}


//////toggle Mood/////////////////////toggle Mood///////////////toggle Mood/////////////////////////

import React from 'react';
import ReactDOM from 'react-dom';

class Mood extends React.Component {
  constructor(props) {
    super(props);
    this.state = { mood: 'good' };
    this.toggleMood = this.toggleMood.bind(this);
  }

  toggleMood() {
    const newMood = this.state.mood == 'good' ? 'bad' : 'good';
    this.setState({ mood: newMood });
  }

  render() {
    return (
      <div>
        <h1>I'm feeling {this.state.mood}!</h1>
        <button onClick={this.toggleMood}>
          Click Me
        </button>
      </div>
    );
  }
}

ReactDOM.render(<Mood />, document.getElementById('app'));


/////React//changeColor///////////////////React//changeColor////////////////React//changeColor/////////////////////

import React from "react";
import ReactDOM from "react-dom";

const green = "#39D1B4";
const yellow = "#FFD712";

class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = { color: green };
    this.changeColor = this.changeColor.bind(this);
  }

  changeColor() {
    const newColor = this.state.color == green ? yellow : green;
    this.setState({ color: newColor });
  }

  render() {
    return (
      <div style={{ background: this.state.color }}>
        <h1>Change my color</h1>
        <button onClick={this.changeColor}>Change color</button>
      </div>
    );
  }
}

ReactDOM.render(<Toggle />, document.getElementById("app"));



///////////////////////////////////////////////////////////////////
import React from 'react';
import ReactDOM from 'react-dom';
import { Button } from './Button';

class Random extends React.Component {
  constructor(props) {
    super(props);
    this.state = { color: [12, 25, 55] }
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(){
    this.setState = { color: this.chooseColor() };
  }
  componentDidMount() {
    this.applyColor();
  }

  componentDidUpdate(prevProps, prevState) {
    this.applyColor();
  }

  formatColor(ary) {
    return 'rgb(' + ary.join(', ') + ')';
  }

  isLight() {
    const rgb = this.state.color;
    return rgb.reduce((a,b) => a+b) < 127 * 3;
  }

  applyColor() {
    const color = this.formatColor(this.state.color);
    document.body.style.background = color;
  }

  chooseColor() {
    const random = [];
    for (let i = 0; i < 3; i++) {
      random.push(Math.floor(Math.random()*256));
    }
    return random;
  }

  render() {
    return (
      <div>
        <h1 className={this.isLight() ? 'white' : 'black'}>
        Your color is { this.formatColor(this.state.color) }
        </h1>
        <Button onClick={this.handleClick} light={this.isLight()} />
      </div>
    );
  }
}

ReactDOM.render(
  <Random />, 
  document.getElementById('app')
);


import React from 'react';

export class Button extends React.Component {
	render() {
		return (
			<button
				className={ this.props.light ? 'light-button' : 'dark-button' }
        onClick={this.props.onClick}>
				Refresh
			</button>
		);
	}
}

////////////////Parent.js REACT///////////<-- STATEFULL////////////////////////////////////////

import React from "react";
import ReactDOM from "react-dom";

import { Child } from './Child';

class Parent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Frarthur",
    };
  }
  render() {
    return <Child name= { this.state.name }/>;
  }
}

ReactDOM.render(<Parent />, document.getElementById('app'));


////////////////child.js REACT//// <-- STATELESS

import React from 'react';
import ReactDOM from 'react-dom';

export class Child extends React.Component {
  render() {
    return <h1>
    Hey, my name is {this.props.name}!
    </h1>;
  }
}

// The parent component class defines a method that calls this.setState(). 
// For an example, look in 1 at the .handleClick() method.
//////////////////////////////////1/////////////////////////////////
import React from 'react';
import ReactDOM from 'react-dom';
import { ChildClass } from './ChildClass';

class ParentClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = { totalClicks: 0 };
  }

  handleClick() {
    const total = this.state.totalClicks;

    // calling handleClick will 
    // result in a state change:
    this.setState(
      { totalClicks: total + 1 }
    );
  }
}
// The parent component binds the newly-defined method to the current instance of the component in its constructor. 
// This ensures that when we pass the method to the child component, it will still update the parent component.
//////////////////////////////////2/////////////////////////////////
import React from 'react';
import ReactDOM from 'react-dom';
import { ChildClass } from './ChildClass';

class ParentClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = { totalClicks: 0 };
// Once the parent has defined a method that updates its state and bound to it, 
//  the parent then passes that method down to a child.
    this.handleClick = this.handleClick.bind(this);
  }

  
  handleClick() {
    const total = this.state.totalClicks;

    // calling handleClick will 
    // result in a state change:
    this.setState(
      { totalClicks: total + 1 }
    );


//////////////////////////////////3/////////////////////////////////
import React from 'react';
import ReactDOM from 'react-dom';

export class ChildClass extends React.Component {
  render() {
    return (
      // The stateless component class uses
      // the passed-down handleClick function,
      // accessed here as this.props.onClick,
      // as an event handler:
      <button onClick={this.props.onClick}>
        Click Me!
      </button>
    );
  }
}
///////////////////////////////////////////////////////////////////

/////////////// Parent.js REACT///////////<-- STATEFULL?////////////////////////////////////////

import React from 'react';
import ReactDOM from 'react-dom';
import { Child } from './Child';

class Parent extends React.Component {
  constructor(props) {
    super(props);
    this.changeName = this.changeName.bind(this)
    this.state = { name: 'Frarthur' };
  }
  changeName(newName) {
    this.setState({
      name: newName
    });
  }
  render() {
    return <Child name={this.state.name} onChange={this.changeName}/>
  }
}

ReactDOM.render(
	<Parent />,
	document.getElementById('app')
);


////////////////  child.js REACT//// <-- STATELESS?

import React from 'react';

export class Child extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e) {
    const name = e.target.value;
    this.props.onChange(name);
  }
  render() {
    return (
      <div>
        <h1>
          Hey my name is {this.props.name}!
        </h1>
        <select id="great-names" onChange={this.handleChange}>
          <option value="Frarthur">
            Frarthur
          </option>

          <option value="Gromulus">
            Gromulus
          </option>

          <option value="Thinkpiece">
            Thinkpiece
          </option>
        </select>
      </div>
    );
  }
}
///////////////////////////////////////////////////////////////////
///////////////////////// Parent Parent//////////////////////////////////////////
import React from 'react';
import ReactDOM from 'react-dom';
import { Child } from './Child';
import { Sibling } from './Sibling';

class Parent extends React.Component {
  constructor(props) {
    super(props);

    this.state = { name: 'Frarthur' };

    this.changeName = this.changeName.bind(this);
  }

  changeName(newName) {
    this.setState({
      name: newName
    });
  }

  render() {
    return (
      <div>
        <Child 
          onChange={this.changeName} />
        <Sibling 
          name={this.state.name}
        />
      </div>
    );
  }
}

ReactDOM.render(
  <Parent />,
  document.getElementById('app')
);
//////////////////////////////  Child/////////////////////////////////////
import React from 'react';

export class Child extends React.Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    const name = e.target.value;
    this.props.onChange(name);
  }

  render() {
    return (
      <div>
        <select
          id="great-names"
          onChange={this.handleChange}>

          <option value="Frarthur">Frarthur</option>
          <option value="Gromulus">Gromulus</option>
          <option value="Thinkpiece">Thinkpiece</option>
        </select>
      </div>
    );
  }
}
////////////////////////////  Sibling///////////////////////////////////////
import React from 'react';

export class Sibling extends React.Component {
  render() {
    const name = this.props.name
    return (
      <div>
        <h1>Hey, my name is {name}!</h1>
        <h2>Don't you think {name} is the prettiest name ever?</h2>
        <h2>Sure am glad that my parents picked {name}!</h2>
      </div>
    );
  }
}
///////////////////////////////////////////////////////////////////



import React from 'react';
import ReactDOM from 'react-dom';

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }
  render() {
    return <div>{this.state.date.toLocaleTimeString()}</div>;
  }
}

ReactDOM.render(<Clock />, document.getElementById('app'));

////////////////////////////Clock////////////////Clock///////////////////////

import React from "react";
import ReactDOM from "react-dom";

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }
  render() {
    return <div>{this.state.date.toLocaleTimeString()}</div>;
  }
  componentDidMount() {
    const oneSecond = 1000;
    setInterval(() => {
      this.setState({ date: new Date() });
    }, oneSecond);
  }
}

ReactDOM.render(<Clock />, document.getElementById("app"));



///////////////////componentDidMount//////////////componentWillUnmount//////////////////////////////////

import React from 'react';

export class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }
  render() {
    return <div>{this.state.date.toLocaleTimeString()}</div>;
  }
  componentDidMount() {
    const oneSecond = 1000;
    this.intervalID = setInterval(() => {
      this.setState({ date: new Date() });
    }, oneSecond);
  }
  componentWillUnmount() {
    clearInterval(this.intervalID)
  }
}

///////////////////////////////////////////////////////////////////

import React from "react";

export class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }
  startInterval() {
    let delay = 100;
    this.intervalID = setInterval(() => {
      this.setState({ date: new Date() });
    }, delay);
  }
  render() {
    return (
      <div>
        {this.props.isPrecise
          ? this.state.date.toISOString()
          : this.state.date.toLocaleTimeString()}
      </div>
    );
  }
  componentDidMount() {
    this.startInterval();
  }
  componentWillUnmount() {
    clearInterval(this.intervalID);
  }
  componentDidUpdate(prevProps) {
    if (this.props.isPrecise === prevProps.isPrecise) {
      return;
    }
    clearInterval(this.intervalID);
    this.startInterval();
  }
}


///////////////////////////////////////////////////////////////////

import React from "react";
import { fetchUserData, cancelFetch } from "./dataFetcher";
import { Userlist } from "./Userlist";

export class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = { userData: null };
  }

  loadUserData() {
    this.state = { userData: null };
    this.fetchID = fetchUserData(this.props.username, (userData) => {
      this.setState({ userData });
    });
  }

  componentDidMount() {
    this.loadUserData();
  }

  componentWillUnmount() {
    cancelFetch(this.fetchID);
  }

  componentDidUpdate(prevProps) {
    if (this.props.username != pervProps.username) {
      cancelFetch(this.fetchID);
      this.loadUserData();
    }
  }

  render() {
    const isLoading = this.state.userData === null ? true : false;

    const name = isLoading ? "loading..." : this.state.userData.name;
    const bio = isLoading ? "Bio goes here" : this.state.userData.bio;
    const friends = isLoading ? [] : this.state.userData.friends;

    let className = "Profile";
    if (isLoading) {
      className += " loading";
    }

    return (
      <div className={className}>
        <div className="profile-picture">
          {isLoading === false && (
            <img src={this.state.userData.profilePictureUrl} alt="" />
          )}
        </div>
        <div className="profile-body">
          <h2>{name}</h2>
          <h3>@{this.props.username}</h3>
          <p>{bio}</p>
          <h3>My Friends</h3>
          <Userlist usernames={friends} onChoose={this.props.onChoose} />
        </div>
      </div>
    );
  }
}


////////////////////////////Function Components and Props///////////////////////////////////////

import React from 'react';
import ReactDOM from 'react-dom';

export const NewFriend = (props) => {
		return (
      <div>
        <img src={props.src} />
      </div>
    );
}

ReactDOM.render(
  <NewFriend src="https://content.codecademy.com/courses/React/react_photo-squid.jpg" />,
  document.getElementById('app')
);



///////////////////////////////////////////////////////////////////

import React, { useState } from 'react';

const colorNames = ['Aquamarine', 'BlueViolet', 'Chartreuse', 'CornflowerBlue', 'Thistle', 'SpringGreen', 'SaddleBrown', 'PapayaWhip', 'MistyRose'];

export default function ColorPicker() {
  const [color, setColor] = useState('Tomato');

 const divStyle = {backgroundColor: color};

  return (
    <div style={divStyle}>
      <p>Selected color: {color}</p>
      {colorNames.map((colorName)=>( // map through array and make buttons jsx
        <button 
          onClick={() => setColor(colorName)} 
          key={colorName}>
       	     {colorName}
      	</button>
      ))}
    </div>
  );
}




///////////////////////////////////////////////////////////////////

const handleChange = (event) => {
  const newEmail = event.target.value;
  setEmail(newEmail);
}
//To this:

const handleChange = (event) => setEmail(event.target.value);
//Or even, use object destructuring to just write this:

const handleChange = ({target}) => setEmail(target.value);


///////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////
