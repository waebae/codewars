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
    const uniqueValues=removeDuplicates(arr)
   
    function getAllIndexes(arr, val) {
        let indexes = [], i;
        for(i = 0; i < arr.length; i++)
            if (arr[i] === val)
                indexes.push(i);
        return indexes;
    }
    
    let uniqueValuesIndexes=[]
    uniqueValues.forEach((element)=>{
        uniqueValuesIndexes.push(getAllIndexes(arr,element))
    })  

    for ( let i = 0 ; i < uniqueValuesIndexes.length ; i ++ ){
        while (uniqueValuesIndexes[i].length > n){
            uniqueValuesIndexes[i].pop()
        }
    }
    uniqueValuesIndexes=uniqueValuesIndexes.flat(Infinity).sort((a,b)=>a-b)

    let output = [...arr]

    //I have these uniqueValues and their indexes, I just need to return the
    //elements from those indexes from the original array or a copy of the oringal
    let result=[]
    for ( let i = 0 ; i < uniqueValuesIndexes.length ; i++ ){
        result.push(output[uniqueValuesIndexes[i]])
    }

    return(result)

}
deleteNth([20,37,20,21], 1)

//[ 1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 5 ]
//[ 1, 2, 3, 1, 1, 2, 2, 3, 3, 4, 5 ]