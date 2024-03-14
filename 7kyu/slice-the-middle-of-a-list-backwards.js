function reverseMiddle(array) {
	newArray=[...array]
    newArray=[...newArray].reverse()
    // console.log(newArray)
    if (newArray.length%2==0){
        while(newArray.length>2){
            newArray.pop()
            newArray.shift()
        }
    }
    else if (newArray.length%2!=0){
        while(newArray.length>3){
            newArray.pop()
            newArray.shift()
        }
    }
    console.log(newArray)
    
    return(newArray)
}
reverseMiddle([1,2,3,4,5])