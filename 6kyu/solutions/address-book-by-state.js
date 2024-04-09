function byState(str) {
    const statesAbbreviations=['AZ', 'CA', 'ID', 'IN', 'MA','OK','PA','VA']
    const states = ['Arizona','California','Idaho','Indiana','Massachussets','Oklahoma','Pennsylvania','Virginia']
    let strSplit = str.split('\n')
    let listedStates=[]
    let output =['','','','','','','','']
    

    console.log(strSplit)



    for  (index in statesAbbreviations ){
      for ( value in  strSplit){
        ()
      }
    }
    
    // let output =''
    // for (index in listedStates) {
    //   for ( value in strSplit) {
    //     if ( strSplit[value].includes(listedStates[index])){
    //       output+=`${listedStates[index]}\n.....\n`
    //     }
    //   }
        
    // }
    console.log(output)
}
byState(
`John Daggett, 341 King Road, Plymouth MA
Alice Ford, 22 East Broadway, Richmond VA
Sal Carpenter, 73 6th Street, Boston MA`)

//"Massachusetts\r\n..... John Daggett 341 King Road Plymouth Massachusetts\r\n..... Sal Carpenter 73 6th Street Boston Massachusetts\r\n Virginia\r\n..... Alice Ford 22 East Broadway Richmond Virginia"