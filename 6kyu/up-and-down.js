function isEven(num){return num%2==0 ? true: false ;}
function arrange(strng){
  strngSplit=strng.split(' ')
  for (i=0;i<strngSplit.length-1;i++) {
    if (isEven(i)) { 
      if (strngSplit[i].length > strngSplit[i+1].length) {
        [strngSplit[i], strngSplit[i+1]] = [strngSplit[i+1], strngSplit[i]]
      }
    } else if (!isEven(i)) {
        if (strngSplit[i].length < strngSplit[i+1].length) {
          [strngSplit[i], strngSplit[i+1]] = [strngSplit[i+1], strngSplit[i]]
      }
    }  
  }
  for(i=0;i<strngSplit.length;i++){
    if(!isEven(i)){
      strngSplit[i]=strngSplit[i].toUpperCase()
    }
    if(isEven(i)){
      strngSplit[i]=strngSplit[i].toLowerCase()
    }
  }
  return(strngSplit.join(' '))
}
