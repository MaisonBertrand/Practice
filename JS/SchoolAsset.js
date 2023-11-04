class School {
    constructor(name, level, numberOfStudents){
      this._name = name;
      this._level = level;
      this._numberOfStudents = numberOfStudents;
    }
    get name() {
      return this._name;
    }
    get level(){
      return this._level;
    }
    get numberOfStudents(){
        return this._numberOfStudents;
    }
    set numberOfStudents(newNumberOfStudents){
        if (typeof newNumberOfStudents === 'number'){
            this._numberOfStudents = newNumberOfStudents;
        }else{
            console.log('Invalid input: numberOfStudents must be set to a Number.');
        }
    }
    quickFacts(){
       return `${this._name} educates ${this._numberOfStudents} students at the ${this._level} school level.`;
    }
    static pickSubstituteTeacher(){
        const substituteTeachers = ['Jamal Crawford', 'Lou Williams', 'J. R. Smith', 'James Harden', 'Jason Terry', 'Manu Ginobli'];
        const index = Math.floor(Math.random()*substituteTeachers.length);
        return substituteTeachers[index];
    }
      
  }

  

  class PrimarySchool extends School {
    constructor(name, level, numberOfStudents, pickupPolicy){
        super(name, level, numberOfStudents)
        this._pickupPolicy = pickupPolicy;
    }
    get pickupPolicy(){
        return this._pickupPolicy;
    }
  }

  

  class HighSchool extends School {
    constructor(name, level, numberOfStudents, sportsTeam){
        super(name, level, numberOfStudents)
        this._sportsTeam = sportsTeam;
    }
    get sportsTeam(){
        return this._sportsTeam;
    }
  }

  const lorraineHansbury = new PrimarySchool('Lorraine Hansbury','primary', 514, 'Students must be picked up by a parent, guardian, or a family member over the age of 13.');
  console.log(lorraineHansbury);
  console.log(lorraineHansbury.quickFacts());
  console.log(School.pickSubstituteTeacher());

  const alSmith = new HighSchool('Al E. Smith', 'high', 415, 'Track and Field');
  console.log(alSmith.sportsTeam);

