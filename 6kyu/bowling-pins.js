//
function bowlingPins(arr) {
    let array = ['7' , ' ' , '8', ' ', '9',' ', '10 ', 
                '\n',
                ' ' , '4' , ' ' , '5', ' ', '6', ' ',
                '\n', 
                ' ', ' ', '2' , ' ' , '3' , ' ' , ' ',
                '\n',
                ' ', ' ' , ' ' , '1' , ' ' , ' ' , ' ']

    console.log(array)
    console.log(array.join(''))
   
    for( let i = 0 ; i < array.length ; i++){
        for ( let j = 0 ; j < array.length ; j++){
            if (array[i]==arr[j]){
                array[i]=' '
            }
        }
    }

    for (let i = 0; i < array.length ; i++){
        if (array[i]!=' ' && array[i]!='\n'){
            array[i]='I'
        }
    }

    console.log(array.join(''))
    return array.join('')
}

bowlingPins([2, 4])

//'I I I I\n I I I \n       \n   I   '
//'I I I I\n I     \nI I \nI '

