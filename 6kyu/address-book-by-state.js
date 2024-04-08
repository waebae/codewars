function byState(str) {
    const statesAbbreviations=['AZ', 'CA', 'ID', 'IN', 'MA','OK','PA','VA']
    const states = ['Arizona','California','Idaho','Indiana','Massachussets','Oklahoma','Pennsylvania','Virginia']
    let listedStates=[]
    
    for (index in statesAbbreviations){
      if (str.includes(statesAbbreviations[index])){
        console.log('hi')
        listedStates.push(states[index])
      }
    }
    console.log(listedStates)
}