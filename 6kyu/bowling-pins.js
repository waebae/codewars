function bowlingPins(arr) {
    let pinArray=[10,9,8,7,6,5,4,3,2,1]
    console.log(pinArray.indexOf(1))
    //remove the index of the elements in arr from pinArray

    for ( let i = 0 ; i < arr.length ; i ++ ){
        let pinIndex=pinArray.indexOf(arr[i])
        pinArray.splice(pinIndex,1,0) //we replace all shared values with 0
    }



    for ( let i = 0 ; i < pinArray.length ; i ++ ){
        console.log(pinArray[i])
        pinArray[i] ? pinArray.splice(i,1,'I') :pinArray.splice(i,1,' ')
        console.log(pinArray[i])
    }
    console.log(pinArray)

    pinArray=pinArray.join(' ')
    
    console.log(pinArray)
    // let output = []
    // function addBreaks(array){
    //     let output=array
    //     for ( let i = 0 ; i < array.length; i++ ){
    //         if(i==4||i==8||i==11){
    //             output.splice(i,0,'\n')
    //         }
    //     }
    //     return output
    // }
    // let spacedArray = addBreaks(pinArray)
    // console.log(spacedArray)

    
    
    // console.log(spacedArray.toString())
    

    // console.log(pinArray[pinArray.length-2])
}
bowlingPins([1,2])

