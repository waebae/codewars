function findSpaceship(map) {
  console.log(typeof(map))
  let array = map.split('')
  array = array.filter(element=> element !='\n')
  console.log(array)
  const index= array.indexOf('X')
  const rowLength=map.indexOf('\n')

  return([index%rowLength,Math.floor(index/rowLength)])
}
findSpaceship(
  '..........\n..........\n.......X..\n..........\n..........')

  /*
..........[5]
..........[4]
..........[3]
.......X..[2]
..........[1]
..........[0] 
[0,0]
*/
