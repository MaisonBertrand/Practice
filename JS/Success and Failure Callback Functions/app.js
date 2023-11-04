const { checkInventory } = require('./library.js');

const order = [['sunglasses', 1], ['bags', 2]];

// Write your code below:

const handleSuccess = (result) => {
  console.log(result);
}
const handleFailure = (failureResult) => {
  console.log(failureResult);
}


checkInventory(order).then(handleSuccess, handleFailure);

////////////////////////Chaining Multiple Promises/////////////////////////////////


const { checkInventory, processPayment, shipOrder } = require('./library.js');

const order = {
  items: [['sunglasses', 1], ['bags', 2]],
  giftcardBalance: 79.82
};

checkInventory(order)
  .then((resolvedValueArray) => {
    // Write the correct return statement here:
    return processPayment(resolvedValueArray);
  })
  .then((resolvedValueArray) => {
    // Write the correct return statement here:
    return shipOrder(resolvedValueArray);
  })
  .then((successMessage) => {
    console.log(successMessage);
  })
  .catch((errorMessage) => {
    console.log(errorMessage);
  });


////////////////////////Avoiding Common Mistakes/////////////////////////////////


  const { checkInventory, processPayment, shipOrder } = require("./library.js");

const order = {
  items: [
    ["sunglasses", 1],
    ["bags", 2],
  ],
  giftcardBalance: 79.82,
};

// Refactor the code below:

checkInventory(order)
    .then((resolvedValueArray) => {
    return processPayment(resolvedValueArray)
    })
    .then((resolvedValueArray) => {
      return shipOrder(resolvedValueArray);
    })
    .then((successMessage) => {
      console.log(successMessage);
    });



//////////////////Using Promise.all()////////////////////////////////////



    const {checkAvailability} = require('./library.js');

    const onFulfill = (itemsArray) => {
      console.log(`Items checked: ${itemsArray}`);
      console.log(`Every item was available from the distributor. Placing order now.`);
    };
    
    const onReject = (rejectionReason) => {
      console.log(rejectionReason);
    };
    
    // Write your code below:
    
    const checkSunglasses = checkAvailability('sunglasses','Favorite Supply Co.');
    const checkPants = checkAvailability('pants','Favorite Supply Co.');
    const checkBags = checkAvailability('bags','Favorite Supply Co.');
    
    const promiseArray = [checkSunglasses, checkPants, checkBags];
    
    Promise.all(promiseArray)
      .then(onFulfill)
      .catch(onReject)

///////////////////////////
///////////////////////////
/////////////////////////////identical code 

//    const promise1 = examplePromise1.then(onFulfill, onReject);
 
//    const promise2 = examplePromise2.then(onFulfill).catch(onReject);



///////////////////////////
///////////////////////////The async Keyword///////////////////////////////////////////////////////////////////////////////////////
///////////////////////////




function withConstructor(num){
  return new Promise((resolve, reject) => {
    if (num === 0){
      resolve('zero');
    } else {
      resolve('not zero');
    }
  });
}

withConstructor(0)
  .then((resolveValue) => {
  console.log(` withConstructor(0) returned a promise which resolved to: ${resolveValue}.`);
});

// Write your code below:

async function withAsync(num){
  if (num === 0){
      return 'zero';
  } else {
    return 'not zero';
  }
  
}

// Leave this commented out until step 3:
withAsync(100)
  .then((resolveValue) => {
  console.log(` withAsync(100) returned a promise which resolved to: ${resolveValue}.`);
})



////////////////////////////await///////////////////////////////////////


const brainstormDinner = require('./library.js');


// Native promise version:
function nativePromiseDinner() {
  brainstormDinner().then((meal) => {
	  console.log(`I'm going to make ${meal} for dinner.`);
  });
}


// async/await version:
async function announceDinner() {
  // Write your code below:
  let meal = await brainstormDinner();
  console.log(`I'm going to make ${meal} for dinner.`);
  
}

announceDinner();


//////////////////////////////////////bean status//////////////////


const shopForBeans = require('./library.js');

async function getBeans() {
  console.log(`1. Heading to the store to buy beans...`);
  let value = await shopForBeans();
  console.log(`3. Great! I'm making ${value} beans for dinner tonight!`);
}

getBeans();

console.log('1. Heading to the store to buy beans...')


/////////////////////////////////////////////

const {shopForBeans, soakTheBeans, cookTheBeans} = require('./library.js');

// Write your code below:

async function makeBeans(){
  let type = await shopForBeans();
  let isSoft = await soakTheBeans(type);
  let dinner = await cookTheBeans(isSoft);
  console.log(dinner);
}

makeBeans();


///////////////////////////////dinner party/////////////////////////////

const cookBeanSouffle = require('./library.js');

// Write your code below:

async function hostDinnerParty(){
  try{
    let cookedDinner = await cookBeanSouffle();
    console.log(`${cookedDinner} is served!`)
  }catch(error){
    console.log(error);
    console.log('Ordering a pizza!');
  }
}

hostDinnerParty();



///////////////////////////////Handling Independent Promises///////////////////////////////////////

let {cookBeans, steamBroccoli, cookRice, bakeChicken} = require('./library.js')

// Write your code below:

async function serveDinner() {
 const vegetablePromise = steamBroccoli();
 const starchPromise = cookRice();
 const proteinPromise = bakeChicken();
 const sidePromise = cookBeans();
 console.log(`Dinner is served. We're having ${await vegetablePromise}, ${await starchPromise}, ${await proteinPromise}, and ${await sidePromise}.`);
}

serveDinner();



//////////////////////Await Promise.all()///////////////////()///////////////////()///////////////////


let {cookBeans, steamBroccoli, cookRice, bakeChicken} = require('./library.js')

// Write your code below:
async function serveDinnerAgain(){
  let foodArray = await Promise.all([steamBroccoli(), cookRice(), bakeChicken(), cookBeans()]); 
  
  console.log(`Dinner is served. We're having ${foodArray[0]}, ${foodArray[1]}, ${foodArray[2]}, and ${foodArray[3]}.`);
}

serveDinnerAgain();


/*
Awesome work getting the hang of the async...await syntax! Let’s review what you’ve learned:

async...await is syntactic sugar built on native JavaScript promises and generators.
We declare an async function with the keyword async.
Inside an async function we use the await operator to pause execution of our function until an asynchronous action completes and the awaited promise is no longer pending .
await returns the resolved value of the awaited promise.
We can write multiple await statements to produce code that reads like synchronous code.
We use try...catch statements within our async functions for error handling.
We should still take advantage of concurrency by writing async functions that allow asynchronous actions to happen in concurrently whenever possible.
*/ 