function bumpCounter(ants){

    loopThroughCount=0
    let antsString=ants
    //make a loop for every bump

    //ideally i dont want nextString to be a global variable
    // let nextString=ants

    //So far I have a function to return the next bump cycle
    function nextBump(string){
        return(string=antsString.replace(('RL'),('LR')))
    }
    //I need some way to store the last bump cycle to compare with the current
    //one
    
    while(antsString.indexOf('RL')!=-1){
        antsString=nextBump(antsString)
        console.log(antsString)
    }
    

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
  
  