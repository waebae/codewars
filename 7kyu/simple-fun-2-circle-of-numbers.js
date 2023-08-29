function circleOfNumbers(n, firstNumber){
  if (firstNumber > (n-1)/2){
    return firstNumber - n/2
  }
  else if (firstNumber < (n-1)/2){
    return firstNumber + n/2
  }
}
