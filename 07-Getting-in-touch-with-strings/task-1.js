var str = 'afifa';


const upperCaseFirst = function (str)
{
    if (typeof str !== 'string')
        throw new TypeError('Please provide only string');
    temp = str[0];
    temp = str.charCodeAt(0);
    char = temp - 32;
    temp = String.fromCharCode(char);
    str = temp + str.substring(1);

    return str;
}

console.log(upperCaseFirst(str));