const dnaBases = ['A', 'T', 'C', 'G'];

// Returns a random DNA base
const returnRandBase = () => {
  return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};

let _mutants = []

//console.log(mockUpStrand());
const speciesArray = [];

const pAequorFactory = {
    _speciesNum: [],
    _dna: [],
    _survivalChance: [],


    addMutant(specimenNum, dna){
      let mutant = {
        _speciesNum: specimenNum,
        _dna: dna,
      };

      if(speciesArray.includes(specimenNum)){
        console.log('Entries must have a unique ID');
      }else{
        speciesArray.push(specimenNum);
        _mutants.push(mutant);
      }
         
    },

    mutate(specimenNum){
      if(speciesArray.includes(specimenNum)){
        let i = speciesArray.indexOf(specimenNum)
        console.log('mutate index = ' + i + ' With ID = ' + specimenNum);
        let j = Math.floor(Math.random() * 15) //pick random dna strand 0-15
        //console.log('j === ' + j)
        //console.log('dna at [j] = ' + this._mutants[i]._dna[j]) //at matching index print dna at random entry j
        let k = returnRandBase();
        while(k === _mutants[i]._dna[j]){
          k = returnRandBase();
        };
        //console.log('mutate dna[j] to = ' + k)
        _mutants[i]._dna[j] = k;
        return 'after mutate dna = ' + _mutants[i]._dna

      }else{
        console.log('can only mutate an active entry');
      }
      //_mutants[i]._dna = mockUpStrand();  
    },

    compareDNA(specimenNum,arr){
      if(speciesArray.includes(specimenNum)){
        let index = speciesArray.indexOf(specimenNum)
        let inCommon = 0;

          for(let k = 0; k < _mutants[index]._dna.length; k++){
          //  console.log('check if ' + this._mutants[i]._dna[k] + '=' + arr[k])
            if(_mutants[index]._dna[k] === arr[k]){
              inCommon++;
            }
          }
        return ('dna match = ' + (inCommon / _mutants[index]._dna.length)*100 + '%')

      }else{
        console.log('can only compare DNA with an active entry');
      }
    },

    willLikelySurvive(specimenNum){
      if(speciesArray.includes(specimenNum)){
        let index = speciesArray.indexOf(specimenNum)
        let l = 0;

        //console.log(this._mutants[index]._dna.length);

        for(let k = 0; k < _mutants[index]._dna.length; k++){
        //  console.log('survive mutatnt dna = ' + this._mutants[index]._dna[k])
          if(_mutants[index]._dna[k] === 'C' || _mutants[index]._dna[k] === 'G'){
            l++;
        //    console.log(l);
          } 
        }
        _mutants[index]._survivalChance = ((l / _mutants[index]._dna.length)*100);
        return ('species ' + _mutants[index]._speciesNum + ' Likelyhood of survival = ' + _mutants[index]._survivalChance + '%')

      }else{
        console.log('can only analyze an active entry');
      }
    }

}

const savedEntries = [];
let i = 0;

while (savedEntries.length < 30) {

  pAequorFactory.addMutant(i,mockUpStrand());
  console.log('created mutant i = ' + _mutants[i] + 'i = ' + i)
  console.log(pAequorFactory.willLikelySurvive(i))

  if(mutants[i]._survivalChance >= 60){
    savedEntries[i] = _mutants[i]
    i++;
  }else{
    i--;
  }
  
}

console.log('saved = ' + savedEntries.length);

pAequorFactory.addMutant(31,mockUpStrand());
pAequorFactory.addMutant(32,mockUpStrand());
pAequorFactory.addMutant(33,mockUpStrand());
pAequorFactory.addMutant(31,mockUpStrand());
//console.log('x==' + pAequorFactory.mutants[0]._speciesNum);

//console.log(speciesArray);
//console.log(pAequorFactory.mutants.length);
console.log(_mutants);
//console.log('mutants[0] id === ' + pAequorFactory.mutants[0]._speciesNum);
//console.log('mutants[0] dna === ' + pAequorFactory.mutants[0]._dna);

console.log(pAequorFactory.mutate(31));

//console.log('after mutate mutants[0] dna === ' + pAequorFactory.mutants[0]._dna);

console.log(pAequorFactory.compareDNA(31,mockUpStrand()));


console.log(pAequorFactory.willLikelySurvive(31));
/*
for(i = 0; i < this._mutants.length; i++){
        if(specimenNum === this._mutants[i]._speciesNum){
          console.log('enter a unique ID');
        }else{
           */


