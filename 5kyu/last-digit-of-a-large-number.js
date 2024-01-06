//https://brilliant.org/wiki/finding-the-last-digit-of-a-power/

//I found this article about how to identify the patterns based on n and m
//Tomorrow I will continue based on the article above
//I learned so today Jan 5th 2023 that even BigInt is pretty limited on integer size

function lastDigit(n, m) { 
    if(typeof(n)!==BigInt){
        n=BigInt(n)
    }
    if(typeof(m)!==BigInt){
        m=BigInt(m)
    }
    let modulusM=m%4n
    let patternArray=[]
    if(m==0n){
        return(1n)
    }
    else if(n%10n==1n){
        return(1n)
    }
    else if(n%10n==0n){
        return(0n)
    }
    else if(n%10n==5n){
        return(5n)
    }
    else if(n%10n==6n){
        return(6n)
    }
    else if(n%10n==2n){ //if last digit of base number is 2
        patternArray=[6,2,4,8]
        return (BigInt(patternArray[modulusM]))
    }
    else if(n%10n==3n){
        patternArray=[1,3,9,7]
        return (BigInt(patternArray[modulusM]))
    }
    else if(n%10n==4n){
        patternArray=[6,4]
        return (BigInt(patternArray[modulusM%2n]))
    }
    else if(n%10n==7n){
        patternArray=[1,7,9,3]
        return (BigInt(patternArray[modulusM]))
    }
    else if(n%10n==8n){
        patternArray=[6,8,4,2]
        return (BigInt(patternArray[modulusM]))
    }
    else if(n%10n==9n){
        patternArray=[1,9]
        return (BigInt(patternArray[modulusM%2n]))
    }
}

lastDigit(31, 73)