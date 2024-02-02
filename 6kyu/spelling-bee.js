/*Instead of testing each and every space, it would be faster to find all the B
letters and see how many "bee"s they can spell.*/


howManyBees = function(hive) {
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
    function topCheck(index){
        if (index<14){ //if index is not on the bottom row, return false
            return false
        }
    }
    function bottomCheck(){
        if (index>7){
            return false //if index is not on the top row, return false
        }
    }
    function leftCheck(array){ //!! Connect the function call parameter to the statements
        if (index==2||index==9||index==16||index==6||index==13||index==20){
            if(combinedHive[index]-1=='e'&&combinedHive[index]-2=='e'){
                console.log('hi')
                return true
            }
        }
        else return false
    }
    leftCheck(indexOfB)
    function rightCheck(){

    }
    function spellsBee(index){
        
    }

    
    spellsBee(indexOfB)
    // for(let )
    // return 0
}
howManyBees([
    [
      'b', 'e', 'e','. ', 'b', 'e','e'
    ],
    [
      '.', 'e', '.','.', 'e', '.','.'
    ],
    [
      '.', 'b', '.','.', 'e', 'e','b'
    ]
  ])