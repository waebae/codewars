//Is antsString even necessary when we already have input of ants? Probably not.

function bumpCounter(ants){

    let antsArray = ants.split('')
    let bumpArray = []
    antsArray.forEach((element)=>{
        bumpArray.push(0)
    })
    // console.log(bumpArray)

    //What I was trying to do here was to join the string back from array so I
    //can quickly test to see if there are any RLs left.
    
    //I can now solve for whata the finished string will look like, but I have
    //not solved for the amount of collisions
    let antsString=antsArray.join('')
    while(antsString.indexOf('RL')!=-1){
        previousAntsString=antsString
        antsString=antsString.replace(('RL'),('LR'))
        //Here I need to write an algorithm that can count the amount of times
        //collisions occur. My current plan is to find the different letters in
        //ants and antsString. Then use the index of those letters to increase
        //bumpArray[index]
        let antsStringSplit=antsString.split('')
        currentAntsString=antsString


        for (index in previousAntsString){
            if (previousAntsString[index]!=currentAntsString[index]){
                bumpArray[index]+=1
            }
        }
    }
    
    return(bumpArray.join(' '))

}

bumpCounter('RRRLL')


