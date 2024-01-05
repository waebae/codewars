//I looked at other solutions AFTER finishing my own. I really need to study Map more...
function topThreeWords(text) {
    
    const wordCounts = { }

    let words=text.toLowerCase()
    //getting rid of all standard punctuations
    words=words.replace(/[\.,-\/#!$%\^&\*;:{}=\-_`~()@\+\?><\[\]\+]/g, '') 

    //getting rid of all spaces left
    words=words.replace(/\s{2,}/g," ")
    //splitting string into array
    words=words.split(' ')
    //filtering out all empty elements in array
    words = words.filter((element)=>element!=="")
    

    for(let i = 0; i <words.length; i++){
    wordCounts["_" + words[i]] = (wordCounts["_" + words[i]] || 0) + 1;
    }

    let output= Object.values(wordCounts)
    output=output.sort((a,b)=>b-a)

    result=[]

 
    if (output.length==1){
        for(i=0;i<1;i++){
            result.push(output[i])
        }
    }
    if(output.length==2){
        for(i=0;i<2;i++){
            result.push(output[i])
        }
    }
    if(output.length>=3){
        for(i=0;i<3;i++){
            result.push(output[i])
        }
    }

    function getKeyByValue(object, value) {
        return Object.keys(object).find(key =>
        object[key] === value);
    }
    let final=[]

    for(i=0;i<result.length;i++){
        final.push(getKeyByValue(wordCounts,result[i]))
    }
    
    final=final.map((element)=>element.replace(/[_]/g,''))
    
    if (final=="'"){
      final=[]
    }
    return(final)
}