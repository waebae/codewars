//Problem is too slow to pass tests, but algorithm works

function arrange(s) {
    array = [...s]
    output = []

    while(array.length>1){
        output.push(array[0])
        output.push(array[array.length-1])
        array.shift()
        array.pop()
        array=array.reverse()
    }
    if(array.length==1){
        output.push(array[0])
    }
    
    return(output)
    
}