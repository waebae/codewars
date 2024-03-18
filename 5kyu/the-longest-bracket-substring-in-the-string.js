function findLongest(str){
    let stringLengthArray=[]
    let strings=[]
    //First detection
    for ( let i = 0 ; i < str.length ; i++){
        let openingIndex = str.indexOf('(',i)
        let closingIndex = str.indexOf('(',str.indexOf(')',i))
        strings.push(str.substring(openingIndex,closingIndex))
        stringLengthArray.push(str.substring(openingIndex,closingIndex).length)
    }
    //Second detection
    for (let i = 0; i < str.length ; i++){
        let openingIndex = str.indexOf('(',i)
        
    }
    let stringLengthArraySorted=stringLengthArray.sort((a,b)=>(b-a))
    return(stringLengthArraySorted[0])
    
    // strings=strings.filter((element)=>element.length==stringLengthArray[0])
    // return strings[0]


}
findLongest(')((((())))(') //5 opening, 4 close, one opening
  