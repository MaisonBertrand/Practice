function capAllElements(arr){
    try {
        arr.forEach((el, index, array) => {
        array[index] = el.toUpperCase();
      });
    capAllElements('Incorrect argument');
    throw Error('INCORRECT ARG');
    } catch(e){
      console.log(e);
    };
    };



    ////////////
    class Network {
        constructor(data, users) {
          this.data = data;
          this.users = users;
        }
        // Insert code below
        movieTime(){
          const userData = this.users * 5;
          if (this.data - userData >= 10){
            return true;
          }
          return false;
        }
      }


      