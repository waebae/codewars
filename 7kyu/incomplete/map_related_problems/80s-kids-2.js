//Learned to use string.split('\n') to turn string inputs into arrays that can
//be manipulated using "rows" and "columns"

const findSpaceship = (map = "") => {
  // console.log(map)
  map = map.split("\n").reverse()
  console.log(map[0])

  for (let y = 0; y < map.length; y++) {
    for (let x = 0; x < map[y].length; x++) {
      if (map[y][x] === "X") return [x, y]
    }
  }

  return "Spaceship lost forever."
}
findSpaceship('..........\n..........\n.......X..\n..........\n..........')
/*
..........[5]
..........[4]
..........[3]
.......X..[2]
..........[1]
..........[0] 
[0,0]
*/
