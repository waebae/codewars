function isAllPossibilities(x){

    if(x.length==0){
        return false
    }

    let arr=[]

    for(let i = 0 ; i < x.length ; i ++ ){
        console.log(i)
        if (x.includes(i)){
            arr.push(i)
        }
    }
    console.log(arr)
    
    console.log(arr.length===x.length)

    if (arr.length === x.length){
        return true
    }
    else{
        return false
    }
    
}


isAllPossibilities([6,0,4])