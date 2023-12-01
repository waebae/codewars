function getOccurrence(array, value) {
    return array.filter((v) => (v === value)).length;
  }function moveZeros(arr) {
    for(let i = 0; i<getOccurrence(arr,0);i++){
      let indexOfFirstZero=arr.indexOf(0,0)
      arr.splice(indexOfFirstZero,1)
      arr.push(0)
    }
    return arr
}