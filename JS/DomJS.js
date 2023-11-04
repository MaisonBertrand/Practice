document.querySelector('h1').innerHTML = 'Most popular Harry Potter characters';

document.getElementById('fourth').innerHTML = 'Professor Snape';

document.getElementsByClassName('slytherin')[0].innerHTML = 'Salazar Slytherin';

document.getElementsByTagName('li')[0].innerHTML = 'Dobby';

document.body.style.backgroundColor = '#201F2E';

document.querySelector('.heading').style.fontFamily = 'Roboto';

let first = document.body.children[0];
first.innerHTML = 'BROWN BEARS ARE AWESOME!';

first.parentNode.style.backgroundColor = 'beige';




let newAttraction = document.createElement('li');
newAttraction.id = 'vespa';
newAttraction.innerHTML = 'Rent a Vespa';
document.body.getElementById('italy-attractions').appendChild(newAttraction);

let elementToRemove = document.getElementById('vespa')
document.getElementById('italy-attractions').removeChild(elementToRemove)




let element = document.querySelector('button'); 

element.onclick = function() { 
  element.style.backgroundColor = 'blue' 
};


let element = document.querySelector('button'); 
function turnBlue() {
   element.style.backgroundColor = 'blue';
}
element.onclick = turnBlue;



let element = document.querySelector('button');

function turnButtonRed(){
  // Add code to turn button red
element.style.backgroundColor = 'red';
element.style.color = 'white';
element.innerHTML = 'Red Button';
}

element.onclick = turnButtonRed;





/*






let view = document.getElementById('view-button');
let close = document.getElementById('close-button');
let codey = document.getElementById('codey');

let open = function() {
  codey.style.display = 'block';
  close.style.display = 'block';
};

let hide = function() {
  codey.style.display = 'none';
  close.style.display = 'none';
};

view.addEventListener('click', open);
close.addEventListener('click', hide);

// Write your code here

let textChange = function() {
  view.innerHTML = '<h1>Hello, World!</h1>';
}
let textReturn = function() {
  view.innerHTML = 'View';
}

view.addEventListener('click', textChange);
close.addEventListener('click', textReturn);





button.removeEventListener('click', textChange);

'



















let social = document.getElementById('social-media');
let share = document.getElementById('share-button');
let text = document.getElementById('text');

// Write your code below
let sharePhoto = function(event) {
  event.target.style.display = 'none';
  text.innerHTML = 'You shared the puppy photo in ' 
  + event.timeStamp + ' ms.';
}

share.addEventListener('click', sharePhoto);


























// This variable stores the "Pick a Color" button
let button = document.getElementById('color-button');

// This variable stores the "Mystery Color" button
let mysteryButton = document.getElementById('next-button');

// This random number function will create color codes for the randomColor variable
function colorValue() {
  return Math.floor(Math.random() * 256);
}

function colorChange(event){
 let randomColor = 'rgb(' + colorValue() + ',' + colorValue() + ',' + colorValue() + ')';
 event.target.style.backgroundColor = randomColor;
}

button.addEventListener('click', colorChange)
mysteryButton.addEventListener('wheel', colorChange)

























*/
























