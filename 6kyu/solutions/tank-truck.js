function tankvol(h, d, vt) {
    let r = d / 2;
    let w = vt / (r * r * Math.PI);
    let a = (r * r) * Math.acos(1 - h / r) 
          - (r - h) * Math.sqrt(2 * r * h - h * h); 
    console.log(Math.acos(1 - h / r) )
    return w * a | 0;
}
/*Looking at the above solution, I can see that they did not use any additional
functions

Fundamentally, I did not recall how to calculate the volume of a liquid inside a
cylinder - despite having watched videos on the formulas needed and several
attempts to understand the process first

I can see they first found the radius using d (diameter/2)
Then they used the total volume divided by r^2 * pi - this gave them the area of
circle base! (Oh my god I wish I saw that in my notes). Then they took the total
volume dividing area of circle.

Then they calculated r^2 * inverse cosine of the height/radius - radius in this
case was the hypotonuse as well.

I don't understand where the rest of the code goes. Not sure what they were
calculating. I wish this solution had more variables that were better named so a
layman like myself could understand the process.
*/


function tankvol(h, d, vt) {
  if (h === 0) return 0; //if height of water is 0, volume == 0
  // radius
  var r = d / 2.0; //radius
  if (h === r) return Math.floor(vt / 2); //if the height of the water is half of the tank, return tank/2
  if (h === d) return vt; //if tank is full return tank
  // height > radius, calculate with d - h and at the end change the volume

  if (h > r) { //if height is taller than half the tank
      h = d - h; 
      var hilevel = true; 
  }
  else
      hilevel = false;
  // total area of circle base
  var st = Math.PI * r * r; 
  // half angle from the center
  var theta = Math.acos((r - h) / r);
  // b = sqrt(r * r - (r - h) ** 2) one side of the right triangle
  var sr = (r - h) * Math.sqrt(r * r - (r - h) * (r - h));
  // area corresponding to angle 2 * theta
  var sa = st / Math.PI * theta;
  // surface corresponding to the height
  var sh = sa - sr;
  // volume to find corresponding to surface of liquid / total surface
  var v = vt * sh / st;
  // if height > radius
  if (hilevel)
      v = vt - v;   
  return Math.floor(v)
}

/*This is another solution that uses more lines and also more variables */





// function tankvol(h, d, vt) {
//     //height of liquid 40
//     //diameter of the cylinder base = 120
//     //total volume of the cylinder = 3500
//     //output 1021.26992027
//     //output floor^
  
//     //
//     function pythagorean(sideA, hypotenuse){
//         return Math.sqrt(Math.pow(hypotenuse, 2) - Math.pow(sideA, 2));
//       }
      

//     const radius = d*1/2
//     const hypotenuse = radius

//     const baseLength = pythagorean(h, hypotenuse)
//     console.log(baseLength)
//     console.log(Math.sqrt(3200))

    
// }
tankvol(40,120,3500)