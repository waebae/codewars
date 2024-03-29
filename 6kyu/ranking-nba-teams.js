function nbaCup(resultSheet, toFind) {
    if(toFind==''){
        return ''
    }
    if(!resultSheet.includes(`${toFind} `)){
        return (`${toFind}:This team didn't play!`)
    }
    let resultSheetArray=resultSheet.split(',')
    resultSheetArray=resultSheetArray.filter((element)=>element.includes(toFind))

    function findFloat(array){
        let output = ''
        array.forEach((element,index)=>{
            if(element.includes('.')){
                output = element
                
            }
        })
        return(output)
    }

    if(findFloat(resultSheetArray)){
        let output = findFloat(resultSheetArray)
        return `Error(float number):${output}`
    }
    let toFindScores = []
    resultSheetArray.forEach((element,index)=>{
        let startIndex=resultSheetArray[index].indexOf(toFind)
        toFindScores.push(resultSheetArray[index].substring(startIndex,startIndex+toFind.length+4))
    })
    
    let opposingTeamScores = []

    resultSheetArray.forEach((element,index)=>{
        opposingTeamScores.push(resultSheetArray[index].split(toFindScores[index]).join(''))
    })

    opposingTeamScores=opposingTeamScores.map((element)=>element.split(' '))
    let opposingScores=[]
    opposingTeamScores=opposingTeamScores.map((element,index)=>{
        element=element.map((value)=>{
            if(Number(value)){
                element=value
                opposingScores.push(value)
            }
        })
    })
    let toScores=[]

    toFindScores.forEach((element,index)=>{
        element=element.split(' ')
        element.map((value,index)=>{
            if(Number(value)){
                element=value
                toScores.push(value)
            }
        })
    })

    
    let w=0;
    let d=0;
    let l=0;
    let scored = 0;
    let conceded = 0;
    let points = 0;

    toScores.forEach((element,index)=>{

        if(Number(toScores[index])>Number(opposingScores[index])){
            w++
        }
        else if(Number(toScores[index])<Number(opposingScores[index])){
            l++
        }
        else if(Number(toScores[index])===Number(opposingScores[index])){
            d++
        }
        scored+=Number(toScores[index])
        conceded+=Number(opposingScores[index])

    })

    points = (3 * w) + (1 * d)
    return `${toFind}:W=${w};D=${d};L=${l};Scored=${scored};Conceded=${conceded};Points=${points}`
}
nbaCup("Los Angeles Clippers 104 Dallas Mavericks 88,New York Knicks 101.12 Atlanta Hawks 112,Indiana Pacers 103 Memphis Grizzlies 112,Los Angeles Clippers 100 Boston Celtics 120","Atlanta Hawks")

//Boston Celtics:W=4;D=0;L=0;Scored=0Bost;Conceded=0 95 65 85105;Points=12'
//'Boston Celtics:W=4;D=0;L=0;Scored=403;Conceded=350;Points=12'
//Boston Celt: This team didn\'t play!
//Boston Celt:This team didn\'t play!