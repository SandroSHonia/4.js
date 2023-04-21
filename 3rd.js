function returnEvenArray(n, arr = []) {

    if (n === 0) {

      return arr;

    }

    if (n % 2 === 0) {

      arr.unshift(n);

    }

    return returnEvenArray(n - 1, arr);
    
  }
  
  console.log(returnEvenArray(10)); 