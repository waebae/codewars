function sumArray(array) {
  if (Array.isArray(array)==false || array.length==1|| array==[]){
    return(0)
  } 
  else{
    array.sort((a,b)=>a-b)
    array.pop()
    array.shift()
    array=array.reduce((acc,c)=>acc+c,0)
    return array
  }
}