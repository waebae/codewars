/*After seeing how confusing this problem was, my first thought was to just do a
test for every combination - sort of like tic tac toe. However, I counted maybe
50-70 possible combinations since each space can have between 2-4 combinations.
So instead, I am attempting to make one test function for bee and add a count
every time it returns true*/


howManyBees = function(hive) {
    console.log('test')
    console.log(hive)

    function spellsBee(index){
        if(index==3||index==10||index==17){
            return false
        }
        
    }
    
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