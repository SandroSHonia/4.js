function newFunction(func, obj) {


  return function() {


    func.call(obj);


  }


}


newFunction(function() {


  console.log(this);
  
}, { name: "Front-endBetter" })();