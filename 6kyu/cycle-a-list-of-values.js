function cycle(dir, arr, cur) {
    let indexValue=0
    let endingIndex=arr.indexOf(cur)+dir
    if(arr.indexOf(cur)==-1){
        console.log(null)
    }
    else{
        let index=((((dir+arr.indexOf(cur))%arr.length + arr.length)%arr.length))
        console.log(arr[index])
    }
}