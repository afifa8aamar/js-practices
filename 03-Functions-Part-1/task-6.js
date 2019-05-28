function isEven (num)
{
    if (typeof num != 'number')
        throw new Error('parameter type is not a Number');
    if (num %2 == 0)
        return true;
    return false;
}

console.log(isEven(6));
