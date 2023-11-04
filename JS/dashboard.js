let itemOne = document.getElementById('option 1')
let itemTwo = document.getElementById('option 2')
let itemThree = document.getElementById('option 3')
let itemFour = document.getElementById('option 4')
let itemFive = document.getElementById('option 5')

let optionsTreeOne = itemOne.querySelector('ul').querySelectorAll('li');
let optionsTreeTwo = itemTwo.querySelector('ul').querySelectorAll('li');
let optionsTreeThree = itemThree.querySelector('ul').querySelectorAll('li');
let optionsTreeFour = itemFour.querySelector('ul').querySelectorAll('li');
let optionsTreeFive = itemFive.querySelector('ul').querySelectorAll('li');

let reset = function () {
    itemOne.style.backgroundColor = ''
    itemTwo.style.backgroundColor = ''
    itemThree.style.backgroundColor = ''
    itemFour.style.backgroundColor = ''
    itemFive.style.backgroundColor = ''

    itemOne.querySelector('ul').style.display = '';
    itemTwo.querySelector('ul').style.display = '';
    itemThree.querySelector('ul').style.display = '';
    itemFour.querySelector('ul').style.display = '';
    itemFive.querySelector('ul').style.display = '';
}

let openTableOne = function () {
    itemOne.style.backgroundColor = '#2F01F2'
    itemOne.querySelector('ul').style.display = 'block'
}

itemOne.addEventListener('mouseover', openTableOne);
itemOne.addEventListener('mouseout', reset);

let openTableTwo = function () {
    itemTwo.style.backgroundColor = '#2F01F2'
    itemTwo.querySelector('ul').style.display = 'block'
}

itemTwo.addEventListener('mouseover', openTableTwo);
itemTwo.addEventListener('mouseout', reset);

let openTableThree = function () {
    itemThree.style.backgroundColor = '#2F01F2'
    itemThree.querySelector('ul').style.display = 'block'
}

itemThree.addEventListener('mouseover', openTableThree);
itemThree.addEventListener('mouseout', reset);

let openTableFour = function () {
    itemFour.style.backgroundColor = '#2F01F2'
    itemFour.querySelector('ul').style.display = 'block'
}

itemFour.addEventListener('mouseover', openTableFour);
itemOne.addEventListener('mouseout', reset);

let openTableFive = function () {
    itemFive.style.backgroundColor = '#2F01F2'
    itemFive.querySelector('ul').style.display = 'block'
}

itemFive.addEventListener('mouseover', openTableFive);
itemFive.addEventListener('mouseout', reset);

let resetSubtable = function () {
    optionsTreeOne[0].style.backgroundColor = '';
    optionsTreeOne[1].style.backgroundColor = '';
    optionsTreeOne[2].style.backgroundColor = '';
    optionsTreeOne[3].style.backgroundColor = '';
    optionsTreeOne[4].style.backgroundColor = '';
}

let tableReaderOne = function () {
    optionsTreeOne[0].style.backgroundColor = 'royalblue';
}
optionsTreeOne[0].addEventListener('mouseover', tableReaderOne);
optionsTreeOne[0].addEventListener('mouseout', resetSubtable);


let tableReaderTwo = function () {
    optionsTreeOne[1].style.backgroundColor = 'royalblue';
}
optionsTreeOne[1].addEventListener('mouseover', tableReaderTwo);
optionsTreeOne[1].addEventListener('mouseout', resetSubtable);

let tableReaderThree = function () {
    optionsTreeOne[2].style.backgroundColor = 'royalblue';
}
optionsTreeOne[2].addEventListener('mouseover', tableReaderThree);
optionsTreeOne[2].addEventListener('mouseout', resetSubtable);

let tableReaderFour = function () {
    optionsTreeOne[3].style.backgroundColor = 'royalblue';
}
optionsTreeOne[3].addEventListener('mouseover', tableReaderFour);
optionsTreeOne[3].addEventListener('mouseout', resetSubtable);

let tableReaderFive = function () {
    optionsTreeOne[4].style.backgroundColor = 'royalblue';
}
optionsTreeOne[4].addEventListener('mouseover', tableReaderFive);
optionsTreeOne[4].addEventListener('mouseout', resetSubtable);


let resetSubtableTwo = function () {
    optionsTreeTwo[0].style.backgroundColor = '';
    optionsTreeTwo[1].style.backgroundColor = '';
    optionsTreeTwo[2].style.backgroundColor = '';
    optionsTreeTwo[3].style.backgroundColor = '';
    optionsTreeTwo[4].style.backgroundColor = '';
}

let secondTableReaderOne = function () {
    optionsTreeTwo[0].style.backgroundColor = 'royalblue';
}
optionsTreeTwo[0].addEventListener('mouseover', secondTableReaderOne);
optionsTreeTwo[0].addEventListener('mouseout', resetSubtableTwo);

let secondTableReaderTwo = function () {
    optionsTreeTwo[1].style.backgroundColor = 'royalblue';
}
optionsTreeTwo[1].addEventListener('mouseover', secondTableReaderTwo);
optionsTreeTwo[1].addEventListener('mouseout', resetSubtableTwo);

let secondTableReaderThree = function () {
    optionsTreeTwo[2].style.backgroundColor = 'royalblue';
}
optionsTreeTwo[2].addEventListener('mouseover', secondTableReaderThree);
optionsTreeTwo[2].addEventListener('mouseout', resetSubtableTwo);

let secondTableReaderFour = function () {
    optionsTreeTwo[3].style.backgroundColor = 'royalblue';
}
optionsTreeTwo[3].addEventListener('mouseover', secondTableReaderFour);
optionsTreeTwo[3].addEventListener('mouseout', resetSubtableTwo);

let secondTableReaderFive = function () {
    optionsTreeTwo[4].style.backgroundColor = 'royalblue';
}
optionsTreeTwo[4].addEventListener('mouseover', secondTableReaderFive);
optionsTreeTwo[4].addEventListener('mouseout', resetSubtableTwo);

let resetSubtableThree = function () {
    optionsTreeThree[0].style.backgroundColor = '';
    optionsTreeThree[1].style.backgroundColor = '';
    optionsTreeThree[2].style.backgroundColor = '';
    optionsTreeThree[3].style.backgroundColor = '';
    optionsTreeThree[4].style.backgroundColor = '';
}

let FourthTableReaderOne = function () {
    optionsTreeThree[0].style.backgroundColor = 'royalblue';
}
optionsTreeThree[0].addEventListener('mouseover', FourthTableReaderOne);
optionsTreeThree[0].addEventListener('mouseout', resetSubtableThree);

let FourthTableReaderTwo = function () {
    optionsTreeThree[1].style.backgroundColor = 'royalblue';
}
optionsTreeThree[1].addEventListener('mouseover', FourthTableReaderTwo);
optionsTreeThree[1].addEventListener('mouseout', resetSubtableThree);

let FourthTableReaderThree = function () {
    optionsTreeThree[2].style.backgroundColor = 'royalblue';
}
optionsTreeThree[2].addEventListener('mouseover', FourthTableReaderThree);
optionsTreeThree[2].addEventListener('mouseout', resetSubtableThree);

let FourthTableReaderFour = function () {
    optionsTreeThree[3].style.backgroundColor = 'royalblue';
}
optionsTreeThree[3].addEventListener('mouseover', FourthTableReaderFour);
optionsTreeThree[3].addEventListener('mouseout', resetSubtableThree);

let FourthTableReaderFive = function () {
    optionsTreeThree[4].style.backgroundColor = 'royalblue';
}
optionsTreeThree[4].addEventListener('mouseover', FourthTableReaderFive);
optionsTreeThree[4].addEventListener('mouseout', resetSubtableThree);

let resetSubtableFour = function () {
    optionsTreeFour[0].style.backgroundColor = '';
    optionsTreeFour[1].style.backgroundColor = '';
    optionsTreeFour[2].style.backgroundColor = '';
    optionsTreeFour[3].style.backgroundColor = '';
    optionsTreeFour[4].style.backgroundColor = '';
}

let fourthTableReaderOne = function () {
    optionsTreeFour[0].style.backgroundColor = 'royalblue';
}
optionsTreeFour[0].addEventListener('mouseover', fourthTableReaderOne);
optionsTreeFour[0].addEventListener('mouseout', resetSubtableFour);

let fourthTableReaderTwo = function () {
    optionsTreeFour[1].style.backgroundColor = 'royalblue';
}
optionsTreeFour[1].addEventListener('mouseover', fourthTableReaderTwo);
optionsTreeFour[1].addEventListener('mouseout', resetSubtableFour);

let fourthTableReaderThree = function () {
    optionsTreeFour[2].style.backgroundColor = 'royalblue';
}
optionsTreeFour[2].addEventListener('mouseover', fourthTableReaderThree);
optionsTreeFour[2].addEventListener('mouseout', resetSubtableFour);

let fourthTableReaderFour = function () {
    optionsTreeFour[3].style.backgroundColor = 'royalblue';
}
optionsTreeFour[3].addEventListener('mouseover', fourthTableReaderFour);
optionsTreeFour[3].addEventListener('mouseout', resetSubtableFour);

let fourthTableReaderFive = function () {
    optionsTreeFour[4].style.backgroundColor = 'royalblue';
}
optionsTreeFour[4].addEventListener('mouseover', fourthTableReaderFive);
optionsTreeFour[4].addEventListener('mouseout', resetSubtableFour);

let resetSubtableFive = function () {
    optionsTreeFive[0].style.backgroundColor = '';
    optionsTreeFive[1].style.backgroundColor = '';
    optionsTreeFive[2].style.backgroundColor = '';
    optionsTreeFive[3].style.backgroundColor = '';
    optionsTreeFive[4].style.backgroundColor = '';
}

let fifthTableReaderOne = function () {
    optionsTreeFive[0].style.backgroundColor = 'royalblue';
}
optionsTreeFive[0].addEventListener('mouseover', fifthTableReaderOne);
optionsTreeFive[0].addEventListener('mouseout', resetSubtableFive);

let fifthTableReaderTwo = function () {
    optionsTreeFive[1].style.backgroundColor = 'royalblue';
}
optionsTreeFive[1].addEventListener('mouseover', fifthTableReaderTwo);
optionsTreeFive[1].addEventListener('mouseout', resetSubtableFive);

let fifthTableReaderThree = function () {
    optionsTreeFive[2].style.backgroundColor = 'royalblue';
}
optionsTreeFive[2].addEventListener('mouseover', fifthTableReaderThree);
optionsTreeFive[2].addEventListener('mouseout', resetSubtableFive);

let fifthTableReaderFour = function () {
    optionsTreeFive[3].style.backgroundColor = 'royalblue';
}
optionsTreeFive[3].addEventListener('mouseover', fifthTableReaderFour);
optionsTreeFive[3].addEventListener('mouseout', resetSubtableFive);

let fifthTableReaderFive = function () {
    optionsTreeFive[4].style.backgroundColor = 'royalblue';
}
optionsTreeFive[4].addEventListener('mouseover', fifthTableReaderFive);
optionsTreeFive[4].addEventListener('mouseout', resetSubtableFive);

