//Improvement notes on the bottom for future reference

function nbMonths(startPriceOld, startPriceNew, savingperMonth, percentLossByMonth){
  let monthCount=0
  let output=[]
  let percentLossByMonthDecimal=percentLossByMonth/100
  
  if(startPriceNew>startPriceOld){
    let balance=0
    while(balance<startPriceNew){
      monthCount++
      let newSavingPerMonth=savingperMonth*monthCount
      if (monthCount%2===0){
        percentLossByMonthDecimal+=.005
      }
      startPriceNew-=startPriceNew*(percentLossByMonthDecimal)
      startPriceOld-=startPriceOld*(percentLossByMonthDecimal)
      balance=((startPriceOld+newSavingPerMonth))
    }
    output.push(monthCount)  
    output.push(Math.round(balance-startPriceNew))
    return(output)
  }
  if(startPriceNew<=startPriceOld){
    output.push(monthCount)
    output.push(startPriceOld-startPriceNew)
    return(output)
  }
}

/*A few variables were not needed. For example, monthCount is unnecessary because every iteration of the loop, is one month. 
If (monthCount%2===0{} can be replaced by let totalMonthlySavings=0 and then totalMonthlySavings+=savingperMonth*/