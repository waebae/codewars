function pairwise(arr, n) {
    let pairs =[]
    for(i = 0; i < arr.length; i++){
        for(j = i+1; j < arr.length; j++){
            if(arr[i]+arr[j]==n){
                pairs.push(arr[i],arr[j])
            }
        }
    }
    let indices = []
    console.log(pairs)
    // pairs.forEach((element)=>{
    //     indices.push(arr.indexOf(element))
    // })
    // console.log(indices.reduce((a,b)=>a+b))
    let startingIndex=0
    for (subarrays in pairs){
        for (value in subarrays){
            // console.log(subarrays[value])
            console.log(arr.indexOf(pairs[subarrays],startingIndex+1))
            startingIndex=arr.indexOf(pairs[subarrays])
        }
    }

}
pairwise([1, 1, 1],2)
pairwise([1, 4, 2, 3, 0, 5],7)