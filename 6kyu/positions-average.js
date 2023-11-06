function match(s1, s2) {
    let count = 0;
    for(let i in s1) {
      s2.charAt(i)==s1.charAt(i) ? count++ : false;
    }
    return count;
  }
  function posAverage(s) {
    let numberOfWords=0
    let arrayOfInput=s.split(', ')
    console.log(arrayOfInput)
    function countWords(str) {
      numberOfWords= str.trim().split(/\s+/).length;
    }
    countWords(s)
    let runs= (numberOfWords * (numberOfWords-1)) / 2
    let secondLoopCount=1
    let totalMatches=0
    for(let i=0;i<arrayOfInput.length;i++){
      let indexPosition=s[i]
      for (j=secondLoopCount;j<arrayOfInput.length;j++){
          totalMatches+=match(arrayOfInput[i],arrayOfInput[j]) 
      }
      secondLoopCount++
    }
    return((totalMatches/(arrayOfInput[0].length*runs)).toFixed(12)*100)
  }
