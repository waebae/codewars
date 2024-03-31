function zeros(n) {

    //Pseudocode
    //Find and iterate through all the numbers with certain length
    //IF n = 0, return 1
    //ELSE startingNumber = '1 + (n amount of zeros behind it)'
    //count = 0
    
    //LOOP
    //WHILE startingNumber.length == n
        //String(startingNumber).includes('00') ? count ++ ; count = count
    
    //RETURN count
    
    if (n == 1){
        return 1
    }
    let count = 0
    let startingNumber = 1 
    while (startingNumber.toString().length<n){
        startingNumber+='0'
    }
    
    while (startingNumber.toString().length <= n){
        startingNumber.toString().includes('00') ? count=count : count ++
        startingNumber=Number(startingNumber)
        console.log(typeof(startingNumber))
        startingNumber+=1
    }
    console.log(startingNumber)
    console.log(count)
    return(count)
    }
    zeros(3)