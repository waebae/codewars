//I think I should consider making four seperate arrays with lengths of 7 each,
//and splicing data into those arrays instead of my approach right now. 

function bowlingPins(arr) {
 
    let pinArray=[10,9,8,7,6,5,4,3,2,1]

    //remove the index of the elements in arr from pinArray

    for ( let i = 0 ; i < arr.length ; i ++ ){
        let pinIndex=pinArray.indexOf(arr[i])
        pinArray.splice(pinIndex,1,0) //we replace all shared values with 0
    }
    console.log(pinArray)

    for ( let i = 0 ; i < pinArray.length ; i ++ ){ //replaces all non-empty values with I

        if(pinArray[i] && i == 4){
            pinArray.splice(i,1,' I ')
        }
        else if(pinArray[i] && i == 3){
            pinArray.splice(i,1,'I')
        }
        else if(pinArray[i] == 0 ){
            pinArray.splice(i,1,' ')
        }
        else {pinArray[i]? pinArray.splice(i,1,'I ') :pinArray.splice(i,1,' ')}


    }
    console.log(pinArray)
    for (let i=0;i<pinArray.length;i++){
        if(i==4||i==8||i==11){
            pinArray.splice(i,0,'\n')
        }
    }

    
    
    console.log(pinArray)
    
    pinArray=pinArray.join('')

    
    console.log(pinArray)
    return(pinArray)

}
bowlingPins([2, 4])

//'I I I I\n I I I \n       \n   I   '
//'I I I I\n I     \nI I \nI '

