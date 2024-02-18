function rounders(value) {
    let valueArray = value.toString().split('')
    let newValueArray=[...valueArray]

    let array = valueArray.map((number)=>Number(number))

    console.log(array)

    for (let i = array.length-1 ; i>-1;i-- ){
        console.log(typeof(array[i]))
        if(array[i] >=5 && array[i]!=9 ){ //adding conditional
            array[i]=0
            if (array[i]-1){
                array[i-1]=array[i-1]+1
            }
            else{
                break
            }
        }
        else if(array[i]=9 && !array[i-1]){
            array[i]=0
            array[i-1]=1
        }
        else if(array[i]<5 && array[i-1]){ //rounding down conditional
            array[i]=0
        }
    }
    console.log(array)
    return Number(array.join(''))
  
}
rounders(15)