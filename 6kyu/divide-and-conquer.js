function consecutiveNums(arr, groupLen) {

    //I will have two conditionals
    /*First I will make sure the array's length is divisble by groupLen
    Then, if it is, I will then see if all the numbers in arr are consecutive
    If both are true, return true
    Else false */

    /*Seems to be some sort of memory related issue, I don't understand why two
    exact values are not equal to other.  */
    console.log(arr)
    console.log(groupLen)

    if(groupLen==1){
        return true
    }
    function arrayDivisble(){
        if(arr.length%groupLen==0){
            return true
        }
        else{
            return false
        }
    }
    console.log(arrayDivisble())
    console.log(arr.sort((a,b)=>a-b))
    let sortedArr=arr.sort((a,b)=>a-b)
    console.log(sortedArr)
    
    
    function consecutiveArray(){
        let endArray=[]
        for(let i = 0; i < sortedArr.length; i++) {
            
            if(sortedArr[i] - 1 === sortedArr[i - 1]) {
              endArray.push(sortedArr[i]);
              
            }
        }
        console.log(endArray)
        return endArray
    }

    
    function arrayEqualityCheck(){
        
        let endArray=consecutiveArray()
        let checkArray=endArray
        checkArray.unshift(sortedArr[0])
        console.log(sortedArr)
        // console.log(arrayDivisble()) true
        console.log(checkArray==sortedArr)
        if(arrayDivisble() && checkArray==sortedArr){
            return true
        }
        else {
            return false
        }
    }

    console.log (arrayEqualityCheck())
    
}

// consecutiveNums([1, 3, 5], 1)
consecutiveNums([5, 6, 3, 4], 2)
// consecutiveNums([1, 3, 4, 5], 2)