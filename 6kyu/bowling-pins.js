function bowlingPins(arr) {
    let pinArray=[10,9,8,7,6,5,4,3,2,1]

    //remove the index of the elements in arr from pinArray

    for ( let i = 0 ; i < arr.length ; i ++ ){
        let pinIndex=pinArray.indexOf(arr[i])
        pinArray.splice(pinIndex,1,0) //we replace all shared values with 0
    }
    console.log(pinArray)

    for ( let i = 0 ; i < pinArray.length ; i ++ ){ //replaces all non-empty values with I

        pinArray[i]? pinArray.splice(i,1,'I ') :pinArray.splice(i,1,' ')


    }
    console.log(pinArray)
    for (let i=0;i<pinArray.length;i++){
        if(i==4||i==8||i==11){
            pinArray.splice(i,0,'\n')
        }
    }
    pinArray.splice(3,1,'I')
    
    
    console.log(pinArray)
    
    pinArray=pinArray.join('')

    
    console.log(pinArray)
    return(pinArray)
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
bowlingPins([2, 3, 4])

//'I I I I\n I I I \n       \n   I   '
//'I I I I\nI I I \n    \n I '

