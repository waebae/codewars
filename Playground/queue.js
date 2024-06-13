const queue = function(array) {
  let arrayLength = array.length

  for ( let i = 0 ; i < arrayLength ; i++ ){
    let i = array.shift()
    console.log(i)
  }
  
  console.log(array)

} 
queue([1,2,3,4,5])



