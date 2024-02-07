/*Instead of testing each and every space, it would be faster to find all the B
letters and see how many "bee"s they can spell.*/

/*The random test parameters have changed greatly from the sample examples.
There is no longer a fixed '.' every three indexes */

howManyBees = function(hive) {
    console.log(hive)
    // if(!hive || !Array.isArray(hive) || hive.length === 0){
    //     return 0
    // }
    let combinedHive=hive[0].concat(hive[1],hive[2])
    let beeCount = 0
    console.log(combinedHive)

    function findLetterB(input){
        output=[]
        for(let i=0;i<combinedHive.length;i++){
            if(combinedHive[i]=='b'){
                output.push(i)
            }
        }
        console.log(output)
        return output
    }

    const indexOfB = findLetterB(combinedHive)
    if (indexOfB==[]){
        return 0
    }

    function topCheck(array){
        
        for(let i = 0; i<array.length;i++){ //loop the amount of B's
            let currentArrayIndexValue=array[i]
            if(array[i]>13){

                if(combinedHive[currentArrayIndexValue-7]=='e'&&combinedHive[currentArrayIndexValue-14]=='e'){
                    beeCount++
                }
            }
        }
    }
    
    function bottomCheck(array){
        for(let i = 0; i<array.length;i++){
            let currentArrayIndexValue=array[i]
            if(array[i]<7){
                console.log(combinedHive[currentArrayIndexValue+7])
                if(combinedHive[currentArrayIndexValue+7]=='e'&&combinedHive[currentArrayIndexValue+14]=='e'){
                    beeCount++
                }
            }
        }

    }
    function leftCheck(array){
        for(let i = 0; i<array.length;i++){
            let currentArrayIndexValue=array[i]
            console.log(currentArrayIndexValue)
            if(array[i]==2||array[i]==9||array[i]==16||array[i]==6||array[i]==13||array[i]==20){
                if(combinedHive[currentArrayIndexValue-1]=='e'&&combinedHive[currentArrayIndexValue-2]=='e'){
                    beeCount++
                }
            }
        }
    }
    function rightCheck(array){
        console.log(array)
        for(let i = 0; i<array.length;i++){
            let currentArrayIndexValue=array[i]
            console.log(currentArrayIndexValue)
            console.log(array[i])
            if(array[i]==0||array[i]==7||array[i]==14||array[i]==4||array[i]==11||array[i]==18){
                console.log(combinedHive[currentArrayIndexValue+1])
                if(combinedHive[currentArrayIndexValue+1]=='e'&&combinedHive[currentArrayIndexValue+2]=='e'){
                    beeCount++
                }
            }
        }
    }

    rightCheck(indexOfB)
    leftCheck(indexOfB)
    topCheck(indexOfB)
    bottomCheck(indexOfB)
    console.log(beeCount)
    return(beeCount)
}

// howManyBees([
//     [
//       ' ', ' ', ' ','.', ' ', ' ',' '
//     ],
//     [
//       'e', 'e', ' ','.', ' ', ' ',' '
//     ],
//     [
//       'b', 'e', 'e','.', 'b', 'e','e'
//     ]
//   ])

howManyBees([
    [
      'e', '.', 'e',
      '.', 'b', 'b',
      '.', 'e', 'e'
    ],
    [
      'e', '.', 'b',
      'e', '.', 'e',
      'e', '.', 'b'
    ],
    [
      '.', 'e', 'e',
      '.', '.', 'b',
      'b', 'e', 'e'
    ],
    [
      'b', '.', 'e',
      'e', 'e', '.',
      'b', 'e', '.'
    ],
    [
      'b', '.', '.',
      'e', 'e', '.',
      'e', 'e', 'b'
    ],
    [
      'b', 'e', '.',
      'e', 'e', 'b',
      '.', 'e', '.'
    ],
    [
      '.', 'e', '.',
      'e', 'e', 'b',
      'b', 'e', '.'
    ],
    [
      'e', '.', 'e',
      'e', 'b', 'e',
      '.', '.', 'b'
    ],
    [
      'e', 'b', 'b',
      '.', 'e', 'e',
      '.', '.', 'e'
    ]
  ])