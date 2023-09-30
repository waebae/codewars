function solve(str,idx){
  let openBracketCount=0
  if(str.charAt(idx)==="("){
    for(let i=idx;i<str.length;i++){
      if(str.charAt(i)==="("){
        openBracketCount++
      }
      if (openBracketCount===1&&str.charAt(i)===")"){
        return(i)
      }
      if(str.charAt(i)===")"){
        --openBracketCount
      }
    }
  }
  else{
    return(-1)
  }
}