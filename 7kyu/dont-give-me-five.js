function dontGiveMeFive(start, end){
  let count =0
    for (let i=start;i<=end;i++){
      if(!((i+'').includes(5)==true)){
        count++
      }
    }
  return(count);
}
dontGiveMeFive(4,17)
