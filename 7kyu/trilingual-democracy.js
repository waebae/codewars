// input is a string of three chars from the set 'D', 'F', 'I', 'K'
// output is a single char from this set

/*
When all three are native speakers of the same language, it also becomes their group's language.

When two are native speakers of the same language, but the third person speaks a different language, all three will converse in the minority language.

When native speakers of three different languages meet, they eschew these three
languages and instead use the remaining of the four official languages.5c 
*/

function trilingualDemocracy(group) {

    const numberOfF=group.split('F').length-1
    const numberOfD=group.split('D').length-1
    const numberOfI=group.split('I').length-1
    const numberOfK=group.split('K').length-1

    let array = []
    array.push(numberOfF)
    array.push(numberOfD)
    array.push(numberOfI)
    array.push(numberOfK)

    console.log(array)
    function findIndex(){
        if(array.includes(3)){
            console.log(array.indexOf(3))
            return array.indexOf(3)
        }

        if (array.includes(2)){
            console.log(array.indexOf(1))
            return array.indexOf(1)
        }
        if (array.indexOf(2)==-1){
            console.log(array.indexOf(0))
            return array.indexOf(0)
        }
    }
    const index = findIndex()
    console.log(index)
    if(index==0){
        return 'F'
    }
    if(index==1){
        return 'D'
    }
    if(index==2){
        return 'I'
    }
    if(index==3){
        return 'K'
    }


}
trilingualDemocracy('IFK')