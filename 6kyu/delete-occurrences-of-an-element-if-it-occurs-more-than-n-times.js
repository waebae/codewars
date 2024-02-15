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
    const uniqueValues = removeDuplicates(arr)
    for (let i = 0 ; i < uniqueValues.length ; i ++) {
        let nthCount=arr.lastIndexOf(uniqueValues[i])
        console.log(nthCount)
        arr.splice(nthCount)
    }
}
deleteNth([1,2,3,1,2,1,2,3],2)