function fakeBin(x){
  let newString=""  
  for (let i=0; i<x.length;i++){
    if(x[i]>=5){
      newString+="1"
    }
    else if(x[i]<5){
      newString+="0"
    }
  }
  return(newString)
}

fakeBin("12345")