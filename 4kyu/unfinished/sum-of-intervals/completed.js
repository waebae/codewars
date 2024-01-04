/* Not my solution */

/*I don't understand how the author came to discover this solution, but I
learned that I can use Math.max amd Math.min to find the largest/smallest values
instead of iterating through everything*/
function sumIntervals(xs) {
    let ys = xs.sort(([a,b], [c,d]) => a-c); //the author first sorts the arrays in smallest to largest
    console.log(ys)
    let m = -Number.MAX_VALUE; //they assign m the smallest number possible
    let res = 0; 
    for (let [a,b] of ys) { //iterates through the arrays in ys
      console.log([a,b])
      console.log(m)
      m = Math.max(m, a); //m reassigned to the larger value between the lowest value and a
      console.log(m)
      res += Math.max(0, b-m); //res = res + the larger value between b - m
      console.log(res)
      m = Math.max(m, b); //m reassigned to the larger value between m and b
      console.log(m)
    }
    return res;
  }
  
sumIntervals([
    [1, 4],
    [7, 10],
    [3, 5]
 ])