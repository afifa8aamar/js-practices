function cube (num)
{

    if (typeof num != 'number')
    throw new Error('Error: parameter type is not a Number');

    num = num*num*num;
    return num;

}

console.log(cube(2));