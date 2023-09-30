function cutTheRopes(a){
  let ropeCount=0
  let ropesLeft=[]
  a=a.filter(element=>element>0)
  //We need to cut the array down by the smallest number, then we need to find the smallest 
  //number again, and cut all the elements by the smallest number until we reach <0 for all elements.
  while(Math.max(...a)>0){
    a.forEach(element => {
      if (element>0){
        ++ropeCount
      }})
    ropesLeft.push(ropeCount)
    ropeCount=0
    
    a=a.filter(element=>element>0)
    let min=Math.min(...a)
    a=a.map(element=>element-min)

  }
return(ropesLeft)
}