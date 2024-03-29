function nbaCup(resultSheet, toFind) {
    if(!resultSheet.includes(`${toFind} `)){
        return (`${toFind}:This team didn't play!`)
    }

    let resultSheetArray=resultSheet.split(',')
    resultSheetArray=resultSheetArray.filter((element)=>element.includes(toFind))

    function findFloat(array){
        array.forEach((element,index)=>{
            if(element.includes('.')){
                return element
            }
        })
    }
    findFloat(resultSheetArray)

    // for ( x in resultSheetArray){
    //     for ( y in resultSheetArray[x]){
    //         if (resultSheetArray[x][y]=='.'){
    //             console.log('hi')
    //         }
    //     }
    // }
    

}
nbaCup("Los Angeles Clippers 104 Dallas Mavericks 88,New York Knicks 101.12 Atlanta Hawks 112,Indiana Pacers 103 Memphis Grizzlies 112,Los Angeles Clippers 100 Boston Celtics 120","Atlanta Hawks")

//Boston Celtics:W=4;D=0;L=0;Scored=0Bost;Conceded=0 95 65 85105;Points=12'
//'Boston Celtics:W=4;D=0;L=0;Scored=403;Conceded=350;Points=12'
//Boston Celt: This team didn\'t play!
//Boston Celt:This team didn\'t play!
