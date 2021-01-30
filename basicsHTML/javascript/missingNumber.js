function merge(left, right){
    let arr = [] //the array to return
    while (left.length && right.length) { 
        if (left[0] < right[0]) {
            arr.push(left.shift())  
        } else {
            arr.push(right.shift()) 
        }
    }

    return [ ...arr, ...left, ...right ] //appends remaining array items from lr
}

function mergesort(list){
    let mid = (list.length)/2;
    if (mid < 2){
        return list
    }
    const left = list.splice(0, mid)
    return merge(mergesort(left), mergesort(list))
}

/**
 * finds the first number not in the sequence, incr by 1
 * @param {array of numbers} list 
 */
function findMissing(list, n){
    const sorted = mergesort(list)
    expected = sorted[0]
    for(var i = 0; i < list.length; i+=n){
        if(list[i] != expected){
            return expected
        }
    }
    return list[list.length-1] + n //expecting the incremented value after this
}

