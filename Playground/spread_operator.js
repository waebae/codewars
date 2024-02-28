let array = [1,2,3,4]
let string = 'hi'

console.log(Math.min(...array))
console.log(Math.min(...[1,2,3,4]))
console.log(Math.min(array))//NaN
console.log(Math.min([1,2,3,4])) //NaN

let array1=string.split('')
//Alternatively
let array2=[...string] //Same output as array1
let array3=[string] //['hi] since it treats hi as one element
console.log(array1)
console.log(array2)
console.log(array3)