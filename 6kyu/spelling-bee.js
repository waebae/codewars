/*Instead of testing each and every space, it would be faster to find all the B
letters and see how many "bee"s they can spell.*/

/*Template for random tests developed, need to fix error with left and right
check as they will make false positives. Check for only left and right in the
same row */

howManyBees = function(hive) {
    let combinedHive=[]
    let beeCount=0
    if(!hive || !Array.isArray(hive) || hive.length === 0){
        console.log('null')
        return 0
    }
    for(let i = 0 ; i < hive.length ; i++){ //iterates through all the subarrays
        for (let j = 0 ; j < hive[i].length;j++){ //iterates through all indexes in the subarrays
            combinedHive.push(hive[i][j])
        }
    }

    function findLetterB(input){
        let output=[]
        for(let i=0;i<combinedHive.length;i++){
            if(combinedHive[i]=='b'){
                output.push(i)
            }
        }
        console.log(output)
        return output
    }
    const indexOfB=findLetterB(combinedHive)
    function findLetterE(array){
        let rowCount=hive[0].length
        
        for(let i = 0; i < indexOfB.length;i ++){ //iterate through amount of B's
            let currentIndex=indexOfB[i]

            if(combinedHive[currentIndex-rowCount]==='e'&&combinedHive[currentIndex-rowCount*2]==='e'){
                beeCount++
            }
        }
        for(let i = 0; i < indexOfB.length;i ++){ //iterate through amount of B's
            let currentIndex=indexOfB[i]

            if(combinedHive[currentIndex+rowCount]==='e'&&combinedHive[currentIndex+rowCount*2]==='e'){
                beeCount++
            }
        }
        for(let i = 0; i < indexOfB.length;i ++){ //iterate through amount of B's
            let currentIndex=indexOfB[i]

            let indexOfBInRow=(currentIndex%rowCount)
            let rowOfB=(Math.floor(currentIndex/rowCount))
            if(hive[rowOfB][indexOfBInRow+1]==='e'&&hive[rowOfB][indexOfBInRow+2]==='e'){
                beeCount++
            }
        }
        for(let i = 0; i < indexOfB.length;i ++){ //iterate through amount of B's
            let currentIndex=indexOfB[i]

            let indexOfBInRow=(currentIndex%rowCount)
            let rowOfB=(Math.floor(currentIndex/rowCount))
            if(hive[rowOfB][indexOfBInRow-1]==='e'&&hive[rowOfB][indexOfBInRow-2]==='e'){
                beeCount++
            }
        }
    }
    findLetterE(indexOfB)

    return (beeCount)
}   