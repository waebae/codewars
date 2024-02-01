/* First solution, O(n^2) 
Too slow, couldn't finish, but works*/
function divisibleCount(x, y, k) {
    let allDivisibleNumbers = []

    for(i=x;i<=y;i++){
        if(i%k==0){
            allDivisibleNumbers.push(i)
        }
    }
    return (allDivisibleNumbers.length)
 }
 