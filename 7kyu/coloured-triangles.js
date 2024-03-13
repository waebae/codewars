function triangle(row) {
    let array =[]
    for ( i = 0 ; i < row.length ; i++ ) {
        if ( row[i] == row[i+1] ){
            array.push({
                key:i,
                value:row[i]
            })
        }
    }
}
console.log(triangle('rr'))
