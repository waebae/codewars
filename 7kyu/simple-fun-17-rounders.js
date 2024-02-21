function rounders(value) {
    let valueArray = value.toString().split('')

    const array = [...valueArray]
    let newArray = [...array].map(element=>Number(element))

    console.log(newArray)
    for (let i = newArray.length -1 ; i > 0 ; i --){

        if (newArray[i]>=5){
            newArray[i]=0
            if(!array[i-1]){
                console.log(newArray)
                newArray.unshift(1)
            }
            else{
                newArray[i-1]=newArray[i-1]+1
                console.log(newArray)
            }
        }
        else if (newArray[i]<5){
            newArray[i]=0
        }

    }
    console.log(newArray)
    return Number(newArray.join(''))
}
