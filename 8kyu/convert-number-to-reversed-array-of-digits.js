/*Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

Example(Input => Output):
35231 => [1,3,2,5,3]
0 => [0] */

function digitize(n) {
  inputString=n.toString()
  console.log(inputString)
  reverseArray=[]
  for (i=1;i<=inputString.length;i++){
    reverseArray.push(+inputString.charAt(inputString.length-i))
    
  }
  return(reverseArray) 
}