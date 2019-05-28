function getDivisors (num)
{
    if (typeof num != 'number')
        throw new Error('parameter type is not a Number');
    if (num == 0)
        throw new Error('parameter can\'t be a 0');

    var arr = [];

    for (var i = 0; i <= num ; i++)
    {
        if (num % i == 0)
            arr.push(i);
    }

    return arr;
}

console.log(getDivisors(12));