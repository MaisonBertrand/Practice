const Calculate = {
    sum(inputArray) {
  
      return inputArray.reduce((sum, value) => {
        return sum + value;
      })
      if(inputArray.length === 0){
        return 0;
      }
    }
  }
  
  module.exports = Calculate;
  

  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


  const Calculate = {
    factorial(num) {
      for (let i = num - 1; i >= 1; i--) {
      num *= i; 
      }//////////////// does 5!
      return num
    }
  }
  
  module.exports = Calculate;



  ////////////////3//////////////////

  const Calculate = {
    factorial(num) {
      if (num == 0){
        num = 1;
        return num;
      }else{
        for (let i = num - 1; i >= 1; i--) {
        num *= i; 
        }//////////////// does 5!
        return num
      }
      
    }
  }
  
  module.exports = Calculate;