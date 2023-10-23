/*The testing for this question doesn't seem to have any examples where you need to insert 0's into the extra indexes of the
return array*/

var splitInteger = function(num, parts) {
    let returnValue=[]
    let inputRemainder=0
    while(num/parts<1){
      --parts
      let partsValue=parts
      console.log(partsValue)
    }
    if(num/parts>=1){
      inputRemainder=num%parts
      let roundEven=((num-inputRemainder)/parts)
      for(let i=0;i<parts;i++){
        returnValue.push(roundEven)
      }
    }
    let remaindersLeft=inputRemainder
    for(let i=0;i<inputRemainder;i++){
      let remainderAddition=returnValue[returnValue.length-remaindersLeft]
      returnValue[returnValue.length-remaindersLeft]=returnValue[returnValue.length-remaindersLeft]+1
      remaindersLeft--
    }
    return(returnValue)
}