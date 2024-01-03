/* Problem Set
https://www.codewars.com/kata/52b7ed099cdc285c300001cd/train/javascript */


/* January 3rd 2024 Update
I have decided to stop brute forcing this problem. My new approach to codewars
will be that if I can't solve it in an hour, I will commit my thought process
and progress. 
*/

function sumIntervals(intervals) {
   let newArray=intervals.map(element => { //mapping the difference of intervals[1] and intervals[0]
      return element=element[1]-element[0]
   });
   console.log(newArray)
   let totatIntervalNumbers = newArray.reduce((a,b)=>a+b,0)//totalling newArray
   console.log(totatIntervalNumbers)
   let allNumbersInIntervals = []

   function createArray(start, end) {
      return Array.from({ length: end - start + 1 }, 
         (_, index) => start + index);
   }
   for(let i=0;i<intervals.length;i++){
      allNumbersInIntervals.push(createArray(intervals[i][0],intervals[i][1]))
   }
   console.log(allNumbersInIntervals)
   let allNumbersInIntervalsCombined=[]
   for(let i=0;i<allNumbersInIntervals.length;i++){
      allNumbersInIntervalsCombined=allNumbersInIntervalsCombined.concat(allNumbersInIntervals[i])
   }
   console.log(allNumbersInIntervalsCombined)
   let uniqueNumbers = []
   function onlyUnique(value, index, array) {
      return array.indexOf(value) === index;
   }
   uniqueNumbers=allNumbersInIntervalsCombined.filter(onlyUnique)
   console.log(uniqueNumbers)
   let difference = allNumbersInIntervalsCombined.length-intervals.length
   console.log(difference)
   let amount = uniqueNumbers.length-difference
   console.log(amount)
   let result = totatIntervalNumbers-amount
   console.log(result)
   return(result)
 }
 sumIntervals([1,4] , [7, 10] , [3, 5])