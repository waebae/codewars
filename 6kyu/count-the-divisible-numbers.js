/* First solution, O(n^2) 
Too slow, couldn't finish, but works*/
function divisibleCount(x, y, k) {
    let allNumbers=[]
    let count = 0
    let occurences =0 
    
    for(i=x;i<=y;i++){
        allNumbers.push(i)
        // allNumbers.push({ key : count , value: i})
        // count++
    }
    for(i=0;i<allNumbers.length;i++){
        allNumbers[i]=allNumbers[i]%k
        // allNumbers[i].value=allNumbers[i].value%k
    }
    const result = allNumbers.filter((element) => element < 1);

    // const map = new Map(allNumbers.map((obj) => [obj.key, obj.value]));
    
    // map.forEach(value=>{console.log(value)})
    

    for(i=0;i<result.length;i++){
        occurences++
    }

    return(occurences)

    // console.log(map)

    // return (allDivisibleNumbers.length)
 }
 
 divisibleCount(6,11,2)