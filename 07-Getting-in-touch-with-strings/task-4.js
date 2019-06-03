const extractCurrencyValue = function(source)
{

    if (typeof source !== 'string')
        throw new TypeError('Provide only String');
    num = source.substring(1);
    num = Number.parseInt(num);
    return num;
}


console.log(extractCurrencyValue('$120'));