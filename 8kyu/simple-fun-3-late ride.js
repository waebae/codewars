function lateRide(n) {
  remainderMinutesInRideTime=n%60
  console.log(remainderMinutesInRideTime)
  rideTimeInHours=(n-remainderMinutesInRideTime)/60
  console.log(rideTimeInHours)
  clockTime=String(rideTimeInHours)+String(remainderMinutesInRideTime)
  clockTimeArray=clockTime.split('').map(Number) 
  console.log(typeof clockTimeArray)
  console.log(clockTimeArray)
  addedClockTime=clockTimeArray.reduce((acc,c) => acc + c,0)
  return addedClockTime

}