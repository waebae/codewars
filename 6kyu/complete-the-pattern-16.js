function pattern(n){
    newArr=n.toString().split('').map(element=>Number(element))
    finalArr=[]
    lastDigit=newArr.pop()
    let patternStartValue=''
    let output=[]
      if(n<1){
        return ""
    }
    for (let i=0;i<n;i++){
        newArr[i]=lastDigit
    }
    for(let j=0;j<n;j++){
        for (let i=j;i<n;i++){
            newArr[i]=lastDigit
        }

       
        finalArr.push(newArr.join(''))
        lastDigit=(lastDigit-1<0) ? 9:lastDigit-1
    }

    return(finalArr.join('\n'))
}