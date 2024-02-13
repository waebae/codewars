//I think I should consider making four seperate arrays with lengths of 7 each,
//and splicing data into those arrays instead of my approach right now. 

function bowlingPins(arr) {
    

    let array1=['I' , ' ' , 'I' , ' ' , 'I', ' ' , 'I']   //['1', ' ', '2', ' ', '3', ' ','4'] 
    let array2=[' ' , 'I' , ' ' , 'I' , ' ', 'I' , ' ']   //[' ', '1', ' ', '2', ' ', '3',' '] 
    let array3=[' ' , ' ' , 'I' , ' ' , 'I', ' ' , ' ']   //[' ', ' ', '1', ' ', '2', ' ',' '] 
    let array4=[' ' , ' ' , ' ' , 'I' , ' ', ' ' , ' ']   //[' ', ' ', ' ', '1', ' ', ' ',' '] 

    for( let i = 0 ; i<arr.length ; i++){
        if(arr[i]<5){ //operate on array1
            
        }
         else if(arr[i]<8){ //operate on array2

        }
        else if(arr[i]<10){ //operate on array3

        }

        else if(arr[i]<11){ //operate on array4

        }
    }
    //turn all arrays in string and concat them

}
bowlingPins([2, 4])

//'I I I I\n I I I \n       \n   I   '
//'I I I I\n I     \nI I \nI '

