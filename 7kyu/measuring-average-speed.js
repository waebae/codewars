function calculateSpeed(distance, time) {
    
    //convert distance to meters in number data type
    if (distance.includes('m') && !distance.includes('km')){
        distance = distance.split('m').join('')
    }
    else if (distance.includes('km')){
        distance = distance.split('km').join('')*1000
    }

    //convert time to seconds in number data type
    if (time.includes('s')){
        time = time.split('s').join('')
    }
    else if (time.includes('min')){
        time = time.split('min').join('')*60
    }

    const metersPerSecond = distance/time

    return (Math.round(metersPerSecond*2.23694)) + 'mph'
}
calculateSpeed("3km", "5min")// "22mph"