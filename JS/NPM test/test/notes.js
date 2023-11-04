const assert = require('assert');
const fs = require('fs');
let path, str;
 
describe('appendFileSync', () => {
  it('creates a new file with a string of text', () => {
 
   // Setup
   path = './message.txt';
   str = 'Hello Node.js';
  
   // Exercise: write to file
   fs.appendFileSync(path, str);
 
   // Verify: compare file contents to string
   const contents = fs.readFileSync(path);
   assert.equal(contents.toString(), str);
 
   // Teardown: restore file
  fs.unlinkSync(path)
 });
 
 it('creates a new file with a string of text', () => {
 
   // Setup
   path = './message.txt';
   str = '';
  
   // Exercise: write to file
   fs.appendFileSync(path, str);
 
   // Verify: compare file contents to string
   const contents = fs.readFileSync(path);
   assert.equal(contents.toString(), str);
 
   // Teardown: restore file
  fs.unlinkSync(path)
 });
});

//////////////////////////////////////////////////////////////////////////////////////////////////////////////


const assert = require('assert');
const fs = require('fs');
let path, str;
 
describe('appendFileSync', () => {
  // Write hooks above the tests
  before(() => {
    path = './message.txt';
  })
  afterEach(() => {
    fs.unlinkSync(path);
  })
  it('writes a string to text file at given path name', () => {
 
   // Setup
   str = 'Hello Node.js';
  
   // Exercise: write to file
   fs.appendFileSync(path, str);
 
   // Verify: compare file contents to string
   const contents = fs.readFileSync(path);
   assert.equal(contents.toString(), str);
 
   // Teardown: restore file
 
 });
 
 it('writes an empty string to text file at given path name', () => {
 
   // Setup
   str = '';
  
   // Exercise: write to file
   fs.appendFileSync(path, str);
 
   // Verify: compare file contents to string
   const contents = fs.readFileSync(path);
   assert.equal(contents.toString(), str);
 
   // Teardown: restore file
  
 });
});


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const assert = require('assert');

describe('-', () => {
  it('returns the difference of two values', () => {
    const bigNum = 100;
		const smallNum = 4;
		const expected = 96;
    
    const result =  bigNum - smallNum;

    // Write assertion here
    assert.ok(result === expected);
  });
});


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Import assert here
const assert = require('assert');

describe('-', () => {
  it('returns the difference of two values', () => {
    const bigNum = 100;
		const smallNum = 4;
		const expected = 96;
    
    const result =  bigNum - smallNum;

    // Write assertion here
    assert.equal(result, expected);
  });
});


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Import assert here
const assert = require('assert');

describe('-', () => {
  it('returns the difference of two values', () => {
    const bigNum = 100;
		const smallNum = 4;
		const expected = 96;
    
    const result =  bigNum - smallNum;

    // Write assertion here
    assert.strictEqual(result, expected);
  });
});

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const assert = require('assert');

describe('+', () => {
  it('returns the sum of two values', () => {
    // Setup
		let expected = {a: 3, b: 4, result: 7};
		let sum = {a: 3, b: 4};

    // Exercise
		sum.result = sum.a + sum.b;

    // Verify
    assert.deepEqual(sum, expected);
  });
});

////////////////////////////////////////////////////////////////////////////////////////


const assert = require('assert');

describe('+', () => {
  it('returns the sum of two values', () => {
    // Setup
		let expected = [3, 4, 7];
		let sum = [3, 4];

    // Exercise
		sum.push(3 + 4);

    // Verify
    assert.deepEqual(sum, expected);
  });
});

////////////////////////////////////////////////////////////////////////////////////////

const assert = require('assert');

describe('Numbers', () => {
  it('1 does not equal 2', () => {
    // Verify
    assert.notStrictEqual(1, 2);
  });
});




//////////////////////////////////////////////////////////////////////////////////////////////
const assert = require('assert');
const Rooster = require('../index');

describe('Rooster', () => {
  describe('.anounceDawn', () => {
    it('returns a rooster call', () => {
      let expected = 'cock-a-doodle-doo!';
      const testSubject = Rooster.announceDawn();
      assert.equal(expected, testSubject);
      });
    });
  describe('.timeAtDawn', () => {
      it('returns its argument as a string', () => {
          let expected = '';
          const testSubject = Rooster.timeAtDawn(8);
          assert.strictEqual(expected.type='string', testSubject.type='string');
        });
      });
    describe('.timeAtDawn', () => {
      it('throws an error if passed a number less than 0', () => {
        let hour = -10;
          assert.throws(
              () => {
                Rooster.timeAtDawn(hour);
              },
              RangeError
          );
        });
        it('throws an error if passed a number greater than 23', () => {
        let hour = 55;
          assert.throws(
              () => {
                Rooster.timeAtDawn(hour);
              },
              RangeError
          );
        });
      });
});

////////////////////

describe('Phrase', () => {
  describe('.initials', () => {
    it('returns the first letter of each word in a phrase.', () => {
      assert.strictEqual(Phrase.initials('Nelson Mandela'), 'NM');
    })
  })
})

//////////////////////



const assert = require('assert');
const Calculate =  require('../index.js')

describe('Calculate', () => {
  describe('.sum',() => {
    it('returns the sum of an array of numbers', () => {
      assert.strictEqual(Calculate.sum([1,2,3]), 6);
    });
  });
});



//////////////////

const assert = require('assert');
const Calculate =  require('../index.js')

describe('Calculate', () => {
  describe('.sum',() => {
    it('returns the sum of an array of numbers', () => {
      const expectedResult = 6;
      const inputArray = [1,2,3]
      
      const result = Calculate.sum(inputArray)
      
      assert.strictEqual(result, expectedResult);
    });
    
    // Second test goes here --checks if the Calculate sum function works
    it('returns the sum of a four-item list', () => {
      const expectedResult = 22;
      const inputArray = [4,5,6,7];

      const result = Calculate.sum(inputArray);

      assert.strictEqual(result, expectedResult);
    });
  });
});


////////////////////////////get Initials test/////////////////////////////////////


const Phrase = {
  initials(inputName) {
    // Create an empty array for initials
    const initials = [];
    // Create an array of strings 
    const words = inputName.split(" ");
    // Iterate through the array of strings and push the first character of each to array
    words.forEach((word) => {
      initials.push(word.charAt(0));
    });
    // Return the initials as one string
    return initials.join("");
  }
}


//////////////////////////////////////////////////////////////////