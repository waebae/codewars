function latestClock(a, b, c, d) {
    /* */
    let array = []
    array.push(a,b,c,d)
    array.sort((a,b)=>b-a)
    console.log(array)
    
    //First find largest number between the elements that can concat in <=23
    function firstHalf(arr){
        let combinations=[]
        for(index in arr){
            let currentValue=arr[index]
            let tempArr=arr.filter(value=>value!=currentValue) //array without current value
            for (index in tempArr){
                if(currentValue.toString()+tempArr[index]<=23){
                    combinations.push(currentValue.toString()+tempArr[index])
                }
            }  
        }
        return combinations
    }
    result=firstHalf(array)
    function secondHalf(arr){
        let value= firstHalf(array).sort((a,b)=>b-a) //not sure if this really sorts highest to lowest or just coincidence
        highestValueIsolated=value.shift()
        console.log(highestValueIsolated)
        highestValueArray=highestValueIsolated.split('')
        for(index in highestValueArray){
            highestValueArray[index]=+highestValueArray[index]
        }
        let newArr=[...array]
        lastArr=newArr.filter(x=>!highestValueArray.includes(x))
        console.log(lastArr)
        let combinations=[]
        combinations.push(lastArr[0].toString()+lastArr[1])
        combinations.push(lastArr[1].toString()+lastArr[0])
        combinations.sort((a,b)=>(b,a))
        let largestValue=0
        for (index in combinations){
            if(combinations[index]<=59){
                largestValue=(combinations[index])
                break
            }
        }

        return highestValueIsolated + ":"+largestValue
    }
    console.log(secondHalf(result))


}
latestClock(1, 2, 8, 9)