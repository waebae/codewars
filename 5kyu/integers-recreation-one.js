function findFactors(integer){
    let factors=[]
    for(let j=1;j<integer+1;j++){
      if(integer%j===0){
        factors.push(j)
      }
    }
    let factorsSquared=factors.map(element=>Math.pow(element,2))
    let sumOfFactorsSquared=factorsSquared.reduce((a,b)=>a+b,0)
    if(Math.sqrt(sumOfFactorsSquared)%1===0){
      return([integer,sumOfFactorsSquared])
    }
  }
  function listSquared(start, end) {
    let result=[]
    for (let i=start;i<end+1;i++){
      result.push(findFactors(i))
    }
    return(result.filter(element=>element !== undefined)) //filters all undefined returns
}