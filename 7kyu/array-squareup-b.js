function squareUp(n){
    let array = []
    let currentCount = n
    function arraySegment(n){
        let result = []
        for (let i = currentCount;i>0;i--){
            result.push(i)
        }
        while(result.length<n){
            result.unshift(0)
        }
        return result
    }
    
    for (let i = 1; i <=n ; i++){
        array.push(arraySegment(n))
        currentCount--
    }
    return(array.reverse().flat(Infinity))

}
squareUp(5)