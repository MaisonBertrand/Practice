
for (let counter = 5; counter < 11; counter++) {
    console.log(counter);
}

for (let counter = 3; counter >= 0; counter--) {
    console.log(counter);
}


const vacationSpots = ['Bali', 'Paris', 'Tulum'];

for (let i = 0; i < vacationSpots.length; i++ ){
  console.log('I would love to visit ' + vacationSpots[i]);
}


let bobsFollowers = ['friend1', 'friend2', 'friend3', 'friend4']; 
let tinasFollowers = ['friend1', 'friend2', 'uniqueFriend1'];
let mutualFollowers = [];

for (let i = 0; i < bobsFollowers.length; i++){
  for (let j = 0; j < tinasFollowers.length; j++){
    if (bobsFollowers[i] === tinasFollowers[j]){
      mutualFollowers.push(bobsFollowers[i]);
    }
  }
}


//draw until spade
const cards = ['diamond', 'spade', 'heart', 'club'];

let currentCard;

while (currentCard != 'spade'){
  currentCard = cards[Math.floor(Math.random() * 4)];
  console.log(currentCard);
}



let countString = '';
let i = 0;
 
do {
  countString = countString + i;
  i++;
} while (i < 5);
 
console.log(countString);