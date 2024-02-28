function isEven(a){
    if(a==0){
        return('even')
    }
    else if(a==1){
        return('odd')
    }
    else if(a>1){
        return(isEven(a-2))
    }
    else{
        return isEven(-a)
    }
}
console.log(isEven(-1))
