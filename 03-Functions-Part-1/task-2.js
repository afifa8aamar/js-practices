function f(arr)
{
    var sum =0;
    for (var i = 0; i< arr.length; i++)
    {
        sum = sum + arr[i];
    }

    return sum;
}

var arr = [6,5,2,4,7]
console.log(f(arr));