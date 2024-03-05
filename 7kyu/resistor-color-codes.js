// function decodeResistorColors(bands) {
//     let bandColors=(bands.split(' '))
//     console.log(bandColors)

//     function colorsToNumbers(color){
//         if((color)=='black'){
//             return 0
//         }else if((color)=='brown'){
//             return 1
//         }else if((color)=='red'){
//             return 2
//         }else if((color)=='orange'){
//             return 3
//         }else if((color)=='yellow'){
//             return 4
//         }else if((color)=='green'){
//             return 5
//         }else if((color)=='blue'){
//             return 6
//         }else if((color)=='violet'){
//             return 7
//         }else if((color)=='gray'){
//             return 8
//         }else if((color)=='white'){
//             return 9
//         }else if((color)=='silver'){
//             return '10%'
//         }else if((color)=='gold'){
//             return '5%'
//         }
//     }
//     let colorValuesArray=bandColors.map(element=>colorsToNumbers(element))
//     if(colorValuesArray.length==3){
//         colorValuesArray.push('20%')
//     }
//     console.log(colorValuesArray)
//     function colorValuesConversion(array){
//         return array[0]=Number(array[0]+String(array[1]))*(Math.pow(10,array[2]))
//     }
//     let ohms = colorValuesConversion(colorValuesArray)

//     if(ohms <1000){
//         return(`${ohms} ohms, ${(colorValuesArray[3])}`)
//     }
//     else if(ohms>=1000000){
//         return(`${ohms/1000000}M ohms, ${(colorValuesArray[3])}`)
//     }
//     else if(ohms>=1000&&ohms<1000000){
//         return(`${ohms/1000}k ohms, ${(colorValuesArray[3])}`)
//     }
    
// }
function decodeResistorColors(bands){
    const colors = {black:0,brown:1,red:2,orange:3,yellow:4,green:5,blue:6,violet:7,gray:8,white:9,gold:5,silver:10}

    let [first, second, multiplier, tolerance] = bands.split(' ').map(color => (colors[color])) //uses the key of 'red' to get value '2'

    ohm = (10 * first + second) * 10**multiplier;

    return `${ohm >= 10**6 ? ohm / 10**6 + 'M' : ohm >= 1000 ? ohm / 1000 + 'k' : ohm} ohms, ${tolerance || 20}%`;
}
decodeResistorColors("red black green gold") 
decodeResistorColors("orange orange brown gold")