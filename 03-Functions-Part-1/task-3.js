function f(a, b, c)
{
if (typeof a != 'number' || typeof b != 'number' || typeof c != 'number')
    {
        throw new Error ('all parameters type should be a Number');
    }

    a = a - b;
    a = a / c;
    return a;
}

console.log(f('s',9,3));
