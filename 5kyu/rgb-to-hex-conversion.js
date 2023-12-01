function rgb(r, g, b) {
  function convert(value){
    if (value>255){
      value=255
    }
    if (value<0){
      value=0
    }
    let firstHalf = Math.floor(value/16)
    let secondHalf = ((value/16)%1)*16
    return(firstHalf.toString(16).toUpperCase()+secondHalf.toString(16)).toUpperCase()
  }
  return(convert(r)+convert(g)+convert(b))

  
}