function bumpCounter(ants){

    loopThroughCount=0
    let antsString=ants
    let bumpArray=[]
    for ( let i = 0; i<ants.split('').length;i++){
        bumpArray.push(0)
    }

    function nextBump(string){
        return(string=antsString.replace(('RL'),('LR')))
    }

    
    function compareStrings(previous, current,index){
        for (index in previous){
            if (previous[index]!=current[index]){
                bumpArray[index]+=1
            }
        }
    }
    
    while(antsString.indexOf('RL')!=-1){
        let previousAntsString=antsString
        antsString=nextBump(antsString)
        compareStrings(previousAntsString,antsString)

    }
    return(bumpArray.join(' '))

    //end condition


}
bumpCounter('RRRLL')

/*Old code
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
    let antsStringSplit=antsString.split('')
    while(antsString.indexOf('RL')!=-1){
        let previousAntsString=antsString 
        antsString=antsString.replace(('RL'),('LR'))
        //Here I need to write an algorithm that can count the amount of times
        //collisions occur. My current plan is to find the different letters in
        //ants and antsString. Then use the index of those letters to increase
        //bumpArray[index]

        currentAntsString=antsString    

        for (index in previousAntsString){
            if (previousAntsString[index]!=currentAntsString[index]){
                bumpArray[index]+=1
            }
        }
    }
    return(bumpArray.join(' '))

}
  
*/
  
  