const checkSpam = function (source, example)
{
    if (typeof source !== 'string' || typeof example !== 'string')
        throw new TypeError('Please provide Strings only');
    
    const count = example.length-1;
    for (var i = 0; i < source.length ; i++)
    {
        if (example == source.substring(i,count));
        {
                return true;
        }
    }
    return false;
        
};

console.log(checkSpam('aaa@lsfjgabsdfs', 'ab'));


