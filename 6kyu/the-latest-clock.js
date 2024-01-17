function latestClock(a, b, c, d) {
    /* */
    let array = []
    array.push(a,b,c,d)
    array.sort((a,b)=>b-a)
    console.log(array)
    
    //First find largest number between the elements that can concat in <=23
    function firstHalf(array){
       
        return array

    }
    firstHalf(array)
    //Find the second half
    let result = ""
    let secondHalfStart = firstHalf.split('')
    let filteredArray=JSON.parse(JSON.stringify(array))
    for(index in secondHalfStart){
        secondHalfStart[index]=+secondHalfStart[index]
    }
    console.log(secondHalfStart)
    let newArr=filteredArray.filter(val => !secondHalfStart.includes(val));
    console.log(newArr)
    let secondHalf=[]
    secondHalf.push(newArr[0].toString()+newArr[1])
    secondHalf.push(newArr[1].toString()+newArr[0])
    secondHalf.sort((a,b)=>b-a)
    for (index in secondHalf){
        if(secondHalf[index]<=59){
            result = firstHalf + secondHalf[index]
        }
    }

    
    console.log(result)
    console.log(typeof(result))
    const output=result.split('')
    output.splice(2,0,":")
    console.log(output.join(""))

    return output.join("")
}
latestClock(9,1,2,5)