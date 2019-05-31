function flatten(arr) {
    var flattend = [];
    !(function flat(arr) {
      arr.forEach(function(temp) {
        if (Array.isArray(temp)) 
            flat(temp);
        else 
            flattend.push(temp);
      });
    })(arr);
    return flattend;
  }


const f = function(arr)
{
    if(!Array.isArray(arr))
        throw new TypeError('Undifined array');
    var temp = flatten(arr);
    if (temp.length < 1 )
        return 0;
    if (temp.length==1 ) 
        return temp[0];
    var sum = temp[0];
    temp.shift();
    return sum + f(temp);
}


const arr = [[[1, 2], [1, 2]], [[2, 1], [1, 2]]];
console.log(f(arr)); // 12
const arr2 = [[[[[1,2]]]]];
console.log(f(arr2)); // 3
const arr3 = [[[[[1,2]]],2],1];
console.log(f(arr3)); // 6
const arr4 = [[[[[]]]]];
console.log(f(arr4)); // 0
const arr5 = [[[[[],3]]]];
console.log(f(arr5)); // 3
