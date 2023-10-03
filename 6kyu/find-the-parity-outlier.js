//Notes added at the bottom for better solution in the future

function findOutlier(integers){
  let i=0
  integersLength=integers.length;
  let oddCount = 0
  let evenCount = 0
  let output=0
  while (i<=2){
    if(integers[i]%2==0){
      evenCount++
      // console.log(evenCount)
    }
    if(integers[i]%2!=0){
      oddCount++
      // console.log(oddCount)
    }
    i++
  }
  if(evenCount>oddCount){
    integers.forEach(element => {
      if(element%2!=0){
        output=element
      }
    });
    return(output)
    }else if(oddCount>evenCount){
    integers.forEach(element=>{
      if(element%2==0){
        output=element
      }
    });
    return(output)
  }
}
//Next time, simply run the array.filter(element=>{//code}) function 