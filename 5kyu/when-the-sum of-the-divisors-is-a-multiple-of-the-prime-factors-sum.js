//Version 1, algorithm is too slow and times out 
function  dsMultofPfs(n1, n2) {
  //between n1 and n2 - if the sum of the divisors is divisible by the sum of the prime factors,
  //return number
  let output=[]
  function primeFactorsSummed(n) { //https://stackoverflow.com/questions/39899072/how-can-i-find-the-prime-factors-of-an-integer-in-javascript
      let factors = [];
      let divisor = 2;
      while (n >= 2) {
        if (n % divisor == 0) {
          factors.push(divisor);
          n = n / divisor;
        } else {
          divisor++;
        }
      }
      return factors.reduce((a,b)=>a+b,0);
  }
  function divisors(integer) {
      let result = [];
      for(let i = 0; i < integer+1; i++) {
        if(integer % i == 0) {
          result.push(i)
        }
      }
      console.log(result)
      if (result!=[]){
          return result.reduce((a,b)=>a+b,0);
      }
  };

  for(let i=n1;i<n2+1;i++){
      if((divisors(i)%primeFactorsSummed(i))==0){
          output.push(i)
      }
  }
  return(output)
}
dsMultofPfs(12,119)