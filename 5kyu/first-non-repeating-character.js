function firstNonRepeatingLetter(s) {
  let string = s.toLowerCase()
    
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

  function findingFirstOccurenceofLetter(string){
    string=string.split('')
    
  }
}
firstNonRepeatingLetter('sTrseSS')