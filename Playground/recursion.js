//We start at number value 1
//We are given a target value of x
//Number can either add 5 or multiple by 3
//We need to find the order of operation to find that target number
//return null if impossible


function findSolution(target){
    function find(current, history){
        if (current == target){
            return history
        } 
        else if (current > target){
            return null;
        } 
        else {
            return find(current + 5, `(${history} + 5)`) 
            || 
            find(current * 3, `(${history} * 3)`);}
        }
        return find(1, "1");
}
        
        
console.log(findSolution(15));
    
