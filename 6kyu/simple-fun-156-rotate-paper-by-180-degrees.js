function rotatePaper(number) {

    let numberArray=[]
    //Turn number into an array
    numberArray=number.split('') 
    //If number contains not reversable digits, return false
    const isZeroOrEight = (currentValue) => currentValue == 0 || currentValue == 8
    if(numberArray.every(isZeroOrEight)){
        return true
    }
    if(numberArray.includes('1')||numberArray.includes('7')||numberArray.includes('3')||numberArray.includes('4')){
        return false
    }
    function sixNineSwap(array){
        array=array.reverse()
        for( let i = 0; i < array.length ; i ++ ){
            if ( array[i] == 6){
                array[i] = 9

            }
            else if (array[i] == 9 ){
                array[i] = 6

            }
        }
        return(array)
        
    }
    const rotatedNumber = String(sixNineSwap(numberArray).join(''))
    return rotatedNumber==number ? true : false
}
rotatePaper('1')
// rotatePaper('29562')