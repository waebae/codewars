function deleteNth(arr,n){
    function removeDuplicates(arr) {
        let unique = [];
        for (i = 0; i < arr.length; i++) {
            if (unique.indexOf(arr[i]) === -1) {
                unique.push(arr[i]);
            }
        }
        return unique;
    }
    stringArr=arr.join('')
    const uniqueValues = removeDuplicates(arr)
    function getPosition(string, subString, index) {
        return string.split(subString, index).join(subString).length;
    }

    let indexesAfterN = []
    uniqueValues.forEach(number=>{
        indexesAfterN.push(getPosition(stringArr,number.toString(),n+1))
    })
    console.log(indexesAfterN)

    for(let i = 0 ; i < uniqueValues.length; i ++){
        let index = indexesAfterN[i]
        
    }
}
deleteNth([1,2,3,1,2,1,2,3],2)