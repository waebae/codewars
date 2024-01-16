function latestClock(a, b, c, d) {
    /* */
    let array = []
    array.push(a,b,c,d)
    array.splice(2,0,":")
    console.log(array.join(""))

    return array.join("")
}
latestClock(1, 9, 8, 3)