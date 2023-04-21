function returnLargest() {

    if (arguments.length === 0) {
      console.log("პარამეტრები უნდა იყოს რიცხვები");

      return;


    }

    let largest = arguments[0];

    for (let i = 1; i < arguments.length; i++) {

      if (typeof arguments[i] !== "number") {

      
        return;
      }


      if (arguments[i] > largest) {


        largest = arguments[i];


      }

    }
    return largest;
    
  }

  
  console.log(returnLargest(3, 5, 16, 11, 4));
  console.log(returnLargest(2, 11, 12)); 