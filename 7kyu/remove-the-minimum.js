function removeSmallest(numbers) {

    const array = numbers.slice()
    array.sort((a,b)=>a-b)

    for ( let i = 0 ; i < numbers.length ; i ++ ){
        if ( numbers[i] == array [0] ){
            let index = numbers.indexOf(numbers[i])
            numbers.splice((index),1)
            break
        }
    }
    
    console.log(array)
    console.log(numbers)
    return numbers
}   
removeSmallest([5,3,2,1,4])