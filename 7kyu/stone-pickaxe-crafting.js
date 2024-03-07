//const cobble = arr.filter((element)=>element === 'Cobblestone').length
//In the future I should use arr.filter(element=>element === value).length to
//find number of occurences
function stonePick(arr) {
    let map = new Map
    
    function itemCounter(item){
        let count=1
        arr.forEach((value)=>{
            if(value==item){
                map.set(value,0+count)
                count++
            }
        })
    }
    itemCounter('Sticks')
    itemCounter('Cobblestone')
    itemCounter('Wood')
    
    let woodCount=0
    let sticksCount=0

    map.get('Wood') ? woodCount = map.get('Wood'): woodCount=0
    map.get('Sticks') ? sticksCount = map.get('Sticks'):sticksCount=0
    sticksCount=woodCount*4+sticksCount

    if(!(map.get('Cobblestone'))||!(sticksCount)){
        return 0
    }

    if(map.get('Cobblestone')>sticksCount){
        return Math.floor(sticksCount/2)
    }
    return Math.floor(map.get('Cobblestone')/3)
}
stonePick(['Cobblestone','Cobblestone','Cobblestone','Cobblestone','Cobblestone','Cobblestone','Sticks','Sticks','Sticks','Sticks'])