//Notes for improvement at the bottom and iteration improvements below.

// function solution(number){
//   total=0
//     for (let i=3;i<number;i+=3){
//       if (i%5!=0){
//         total+=i
//     }
//   }

//     for (let i =5;i<number;i+=5){
//       total+=i
//     }
//   console.log(total)
  
//   }

/*I was so close with this idea, but the execution kept timing out. In the future I will know that
declaring all variables on one line can make the execution time less in Codewars, not sure about 
IRL IDEs.*/

function solution(number){
  let starter=1
  let array=[]
  while((number-starter)%3!=0){
    starter++
    console.log(starter)
  }
  let newNumber = number-starter
  let occurences=newNumber/3
  console.log(occurences)
  let amount =(occurences * (2*3+3*(occurences-1))/2)
  console.log(amount)
  array.push(amount)


  starter=1
  while((number-starter)%5!=0){
    starter++
  }
  newNumber = number-starter
  occurences=newNumber/5
  amount=(occurences * (2*5+5*(occurences-1))/2)
  console.log(amount)
  array.push(amount)

  starter=1

  while((number-starter)%15!=0){
    starter++
    
  }
  newNumber = number-starter
  occurences=newNumber/15
  console.log(occurences)
  amount=(occurences * (2*15+15*(occurences-1))/2)
  console.log(amount)
  array.push(amount)

  console.log(array)
  array=array[0]+array[1]-array[2]
  return(array)  

  
}
/*In hindsight after looking at the top solution, I realized I could have made the formula into one function and
set the argument to 3/5/15. Overall I'm just happy I solved this one.*/