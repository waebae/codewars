function pigIt(str){
    str=str.split(" ")
    let result=str.map(element=>{
      let firstLetter=element.charAt(0)
      if(firstLetter.match(/[^\w\s]/g)){
        return firstLetter
      }
      element=element.slice(1)
      element = element + firstLetter +'ay'
      return element
    })
    return(result.join(' '))
}