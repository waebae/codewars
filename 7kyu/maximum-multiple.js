function maxMultiple(divisor, bound){
  n=bound
  while (n%divisor!==0){
    n--
  }
  return n
}