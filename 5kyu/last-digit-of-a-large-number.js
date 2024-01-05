//https://brilliant.org/wiki/finding-the-last-digit-of-a-power/

//I found this article about how to identify the patterns based on n and m
//Tomorrow I will continue based on the article above
//I learned so today Jan 5th 2023 that even BigInt is pretty limited on integer size

function lastDigit(n, m) { 
    exp = ((m%4n) == 0n) ? 4n :
    m%4n;

    res = Math.pow(n[Math.floor(n/10n)], exp);
    console.log(res)
}
lastDigit(4n, 1n)
// lastDigit(10n,10000000000n)
lastDigit(1606938044258990275541962092341162602522202993782792835301376n, 2037035976334486086268445688409378161051468393665936250636140449354381299763336706183397376n)