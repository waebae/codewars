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
    console.log(arr)
    arr=arr.join('')
    console.log(arr)
    for (let i = 0 ; i < uniqueValues.length ; i ++) {
        arr=arr.split(uniqueValues[i], 2).join("")
        console.log(arr)
    }
    console.log(arr)
}
deleteNth([1,2,3,1,2,1,2,3],2)