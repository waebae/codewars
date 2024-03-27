function sortMyString(S) {
    console.log(S.split(''))
    let array = S.split('')
    let leftArray=[]
    let rightArray=[]
    array.forEach((element,index)=>{
        if (index % 2 ===0){
            leftArray.push(element)
        }
        else{
            rightArray.push(element)
        }
    })
    
    return `${leftArray.join('')} ${rightArray.join('')}`;
}
sortMyString("CodeWars")//"CodeWars" => "CdWr oeas"