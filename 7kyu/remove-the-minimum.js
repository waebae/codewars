function removeSmallest(numbers) {

    const array = [...numbers]
    const array1 = [...numbers]
    array.sort((a,b)=>a-b)

    for ( let i = 0 ; i < numbers.length ; i ++ ){
        if ( numbers[i] == array [0] ){
            let index = numbers.indexOf(numbers[i])
            array1.splice((index),1)
            break
        }
    }
    
    console.log(array)
    console.log(numbers)
    return array1
}   
removeSmallest([5,3,2,1,4])
//[ 278, 165, 334, 243, 97, 371, 278, 229, 186, 266, 252, 219, 231, 298, 271 ]
//[ 278, 165, 334, 243, 97, 371, 278, 229, 186, 266, 252, 27, 219, 231, 298, 271 ]