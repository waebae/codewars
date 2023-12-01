function gap(g, m, n) {
    result=[]
    function getPrimes(max) {
      let sieve = [], i, j, primes = [];
      for (i = 2; i <= max; ++i) {
          if (!sieve[i]) {
              // i has not been marked -- it is prime
              primes.push(i);
              for (j = i << 1; j <= max; j += i) {
                  sieve[j] = true;
              }
          }
        }
      return(primes)
    }
    let array=getPrimes(n)
    let index = array.findIndex(number => number > m)
    for(i=index;i<array.length;i++){
      if(array[i+1]-array[i]===g){
        result.push(array[i])
        result.push(array[i+1])
        return(result)
      } 
    }
    return null
}