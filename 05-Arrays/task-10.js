const myReverse = function(arr, rev = [])
{
    if (!Array.isArray(arr))
        throw new TypeError('Please provide an array');
    if (arr.length == 0)
        throw new Error('Please provide an array with values')
    if (arr.length == 1)
    {
        value = arr.pop();
        rev.push(value);
        return rev;
    }
        value = arr.pop();
        rev.push(value);
        return myReverse(arr, rev);
}

var arr = [2,3,8,9];

console.log(myReverse(arr));

