/* Problem Set
https://www.codewars.com/kata/52b7ed099cdc285c300001cd/train/javascript */


//Bug Dec 27 2023 - the function's input "intervals" seems to be mutating even
//when setting a new variable. My best guess is that Javascript's array memory
//address handling is causing the issue. It seems changes to the array later in the code
//have effects to the array earlier in the code. My next guess is that it is
//mutation related.

function sumIntervals(intervals) { // BUGGED
    const test = intervals
    console.log(test)
    // test.forEach((element)=>element.pop())
    test.sort(function(a,b){
       return a-b;
    })
    console.log(intervals) 
 
    //                               PROGRAM FORMAT BEGINS HERE
    // function findLowestNumber(input){ // first I find the lowest number, which I know will be on index 0 of each array as per the question
    //    let lowestNumber=0
    //    input.forEach((element)=>element.pop())
    //    input.sort(function(a,b){
    //       return a-b;
    //    })
    //    return(lowestNumber)
    // }
    // input = intervals
    // function findHighestNumber(input){ // first I find the lowest number, which I know will be on index 0 of each array as per the question)
    //    let highestNumber=0
    //    input.forEach((element)=>element.pop())
    //    input.sort(function(a,b){
    //       return b-a;
    //    })
    //    console.log(highestNumber)
    //    return(highestNumber)
    // }
    // findLowestNumber(input)
    // findHighestNumber(input)
    
 }
 sumIntervals([[1,4] , [7, 10] , [3, 5]])
 