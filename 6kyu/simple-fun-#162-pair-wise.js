function pairwise(arr, n) {
    let pairs=[]
    //problem with this block is that elements can be repeated, hence why
    //[1,1,1] becomes [1,1,1 ,1,1,1]
    for(i = 0; i < arr.length; i++){
        for(j = i+1; j < arr.length; j++){
            if(arr[i]+arr[j]==n){
                pairs.push(arr[i],arr[j])
            }
        }
    }
    
}
pairwise([1, 1, 1],2)
pairwise([1, 4, 2, 3, 0, 5],7)