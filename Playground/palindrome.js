function palindrome(str){
    console.log(str.substring(4,0))
    console.log(str.slice(-3).split('').reverse().join(''))
}
palindrome('abcta')