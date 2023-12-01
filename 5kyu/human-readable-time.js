function checkTime(i) {
    if (i < 10) {
      i = "0" + i;
    }
    return i;
}
function humanReadable (seconds) {
    let secondsLeft=0

    let hours = Math.floor(seconds/3600)
    secondsLeft = seconds%3600

    let minutes= Math.floor(secondsLeft/60)
    secondsLeft=secondsLeft%60

    hours=checkTime(hours)
    minutes=checkTime(minutes)
    secondsLeft=checkTime(secondsLeft)

    let result = hours + ":" + minutes + ":" + secondsLeft
    
    return(result)

}