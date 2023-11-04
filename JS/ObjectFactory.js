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
          return this._weight = weight
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
  
  dogFactory('ghost', 'pit', 40)
  console.log(dogFactory._weight);