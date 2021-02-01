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
        expected += n;
    }
    return list[list.length-1] + n //expecting the incremented value after this
}

//built in sort
var numbers = [10, 200, 3, 19, 492, 29, 9, 238]
numbers.sort(function(a, b){return a-b;});

var unsorted = [9, 2, 4, 3, 1, 6, 8, 7];
function missingNumberSEQ(l){
    var list = l.sort(function(a, b){return a-b;})
    expected = 1;
    list.array.forEach(element => {
        if(element != expected){
            return expected;
        }
        expected += 1;
    });
    return list[list.length-1] + 1;
}