const arrayFill = function(item, len, arr = [])
{
    if (len == 1)
    {
        arr.push(item);
        return arr;
    }
    arr.push(item) ;
    return  arrayFill(item, len-1, arr);
}

var test = arrayFill('hi',5);

console.log(test);