function divisibleCount(x, y, k) {
    return Math.floor(y/k) - Math.floor((x-1)/k)
}

//It seems I tackled this problem from the wrong angle to begin with. I looked
//at the problem as if I needed to first find all the multiples of k between x
//and y. Instead, I should have realized that if I just divided the floor of
//y/k, I would already know how many times between 1 and y a number would be
//divislbe by k. Then I just needed to subtract it from the floor of x-1/k. 

/*Let this be a lesson in thinking more creatively to solve a problem */
divisibleCount(6,11,2)