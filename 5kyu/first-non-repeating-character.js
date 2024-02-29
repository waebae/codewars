//After looking at solutions, I was unaware about the string.lastIndexOf()
//function hahahahah

function firstNonRepeatingLetter(s) {
  let string = s.toLowerCase()
  if(s == ''){
    return ('')
  }
  let uniqueCharacters = (string) => {
    let unique_characters = "";
    for (let i = 0; i < string.length; i++) {
        if (unique_characters.indexOf(string.charAt(i)) < 0) {
            unique_characters += string.charAt(i);
        }
    }
    return unique_characters;
  };
  let uniqueLetters = (uniqueCharacters(string))

  for (let i = 0; i < uniqueLetters.length;i++){
    let index = string.indexOf(uniqueLetters.charAt(i))
    // console.log(index)
    if(!(string.includes(uniqueLetters.charAt(i),index+1))){
      const firstUniqueLetter=uniqueLetters.charAt(i)
      const index = string.indexOf(firstUniqueLetter)
      return s.charAt(index)
    }
    else if(i==uniqueLetters.length-1){
      return ('')
    }
  }
}
firstNonRepeatingLetter('sTrseSS')