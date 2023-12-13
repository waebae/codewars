//Version 2 Changed the Function Algorithms, but still timing out

function  dsMultofPfs(n1, n2) { 
  //between n1 and n2 - if the sum of the divisors is divisible by the sum of the prime factors,
  //return number
  let output=[]
  function primeFactors(n) { 
  let array=[]
  // Print the number of 2s that divide n 
  while (n % 2 == 0) { 
      array.push(2); 
      n = Math.floor(n / 2); 
  } 

  // n must be odd at this point.  
  // So we can skip one element 
  // (Note i = i +2) 
  for(let i = 3;  
          i <= Math.floor(Math.sqrt(n));  
          i = i + 2) { 
        
      // While i divides n, print i 
      // and divide n 
      while (n % i == 0) { 
          array.push(i); 
          n = Math.floor(n / i); 
      } 
  } 

  if (n > 2) 
      array.push(n);
  return array 
} 
  // function primeFactors(n) { //https://stackoverflow.com/questions/39899072/how-can-i-find-the-prime-factors-of-an-integer-in-javascript
  //     let factors = [];
  //     let divisor = 2;
  //     while (n >= 2) {
  //       if (n % divisor == 0) {
  //         factors.push(divisor);
  //         n = n / divisor;
  //       } else {
  //         divisor++;
  //       }
  //     }
  // return factors;
  // }
  // function divisors(integer) {
  //     let result = [];
  //     for(let i = 0; i < integer+1; i++) {
  //       if(integer % i == 0) {
  //         result.push(i)
  //       }
  //     }
  // return result.reduce((a,b)=>a+b,0);
  // };
  function divisors(n, d) { 
      if (n < 1) return [];     
      if (n == 1) return [1]; 
      if (n == 2) return [1,2]; 
      if (n/d<2) return [n]; 
      if (n % d == 0) return [d, ...divisors(n, d + 1)]; 
      return divisors(n, d + 1); 
  } 

  for(let i=n1;i<n2+1;i++){
      let factorsSum=primeFactors(i).reduce((a,b)=>a+b,0)
      let divisorsSum = divisors(i,1).reduce((a,b)=>a+b,0)
      if((divisorsSum%factorsSum)==0){
          output.push(i)
      }
  }
  return(output)
}
dsMultofPfs(12,119)