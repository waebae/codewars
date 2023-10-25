function common(a,b,c){
    let newArray=[]
    let finalArray=[]
    for (let i=0;i<b.length;i++){
      if(a.includes(b[i])){
        newArray.push(b[i])
        let index=a.indexOf(b[i])
        a.splice(index,1)
      }
    }
    for (let i=0;i<newArray.length;i++){
      if(c.includes(newArray[i])){
        finalArray.push(newArray[i])
        let index=c.indexOf(newArray[i])
        c.splice(index,1)
      }
    }
  
    return(finalArray.reduce((a,c)=>a+c,0))
}
/*in the future I can use a dictionary and hash to compare the values instead of having to use this
function with Big O(2n^2)*/