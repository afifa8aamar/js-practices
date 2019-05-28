var arr = [1, 2, -4, 3, -9, -1, 7];

function isPositive (num)
{
    if (typeof num != 'number')
        throw new Error('parameter type is not a Number');
    if (num > 0)
        return true;
    return false;
}

function keepPositive (arr)
{
    var newArr = [];
    for (var i = 0; i< arr.length; i++)
    {
        if (isPositive(arr[i]) === true)
        {
            newArr.push(arr[i]);
        }
    }

    return newArr;
}

console.log(keepPositive(arr));