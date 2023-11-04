class Media{
    constructor(title){
        this._title = title;
        this._isCheckedOut = 'false';
        this._ratings = [];

    }
    get title() {
        return this._title;
    }
    //get isCheckedOut() {
      //  return this._isCheckedOut;
    //}
    get ratings() {
        return this._ratings;
    }
    set isCheckedOut(newStatus) {
        this._isCheckedOut = newStatus;
    }

    toggleCheckOutStatus(){
        if(this._isCheckedOut == true){
            this._isCheckedOut = false;
        }else{
            this._isCheckedOut = true;
        }
    }

    getAverageRating(){
        let ratingSum = this.ratings.reduce((currentSum, rating) => currentSum + rating, 0);
        return ratingSum / this.ratings.length;
    }

    addRating(inputValue){
        this._ratings.push(inputValue);
    }

}

//const SawIII = new Media('SawIII',1);
//console.log(SawIII)
//SawIII.toggleCheckOutStatus();
//SawIII.addRating(19);
//SawIII.addRating(29);
//SawIII.addRating(229);
//console.log(SawIII)
//console.log(SawIII.getAverageRating());

class Book extends Media {
    constructor(author, title, pages){
        super(title)
        this._author = author;
        this._pages = pages;
    }
    get author(){
        return this._author;
    }
    get pages(){
        return this._pages;
    }
}

class Movie extends Media {
    constructor(director, runTime, title){
        super(title)
        this._director = director;
        this._runTime = runTime;
    }
    get director(){
        return this._director;
    }
    get runTime(){
        return this._runTime;
    }
}

const historyOfEverything = new Book('Bill Bryson','A Short History of Nearly Everything', 544);
historyOfEverything.toggleCheckOutStatus();
historyOfEverything.addRating(4);
historyOfEverything.addRating(5);
historyOfEverything.addRating(6);
console.log('average rating: ' + historyOfEverything.getAverageRating())
console.log(historyOfEverything)

const speed = new Movie('Jan de Bont', 116, 'Speed');
speed.toggleCheckOutStatus();
speed.addRating(1);
speed.addRating(1);
speed.addRating(5);
console.log('average rating: ' + speed.getAverageRating())
console.log(speed)