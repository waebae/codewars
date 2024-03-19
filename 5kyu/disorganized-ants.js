//Is antsString even necessary when we already have input of ants? Probably not.

function bumpCounter(ants){
    function leftIndex(index){
        return index-1
    }
    function rightIndex(index){
        return index+1
    }
    let antsArray = ants.split('')
    let bumpArray = []
    antsArray.forEach((element)=>{
        bumpArray.push(0)
    })
    console.log(bumpArray)

    //What I was trying to do here was to join the string back from array so I
    //can quickly test to see if there are any RLs left.

    let antsString=antsArray.join('')

    while(antsString.indexOf('RL')!=-1){
        antsString=antsString.replace(('RL'),('LR'))
    }
    console.log(antsString)
    
    return(bumpArray)
}

bumpCounter('RLRL')


