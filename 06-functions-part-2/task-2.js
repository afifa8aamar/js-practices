const myMix = function (...arr)
{
    if(!Array.isArray(arr))
        throw new TypeError('Not an array');
    if(arr.length < 1)
        throw new TypeError('Empty array');     
    var func, prev;
    if (arr.length == 1)
        {
            func = arr[0];
            console.log(arr[0])
            if ( typeof func !== 'function')
                throw new TypeError(func + ' is not a function' );
            func;
        }
    if (arr.length == 2)
        {
            func = arr[1];
            prev = arr[0];
            func(prev);
        }
    func = arr[1];
    prev = arr[0];
    func(prev);
    arr.shift();
    return myMix(arr);
}

var cb = function ()
{return 0};

var cb2 = function (func)
{return func + 2};

var cb3 = function (func)
{return func * 8}

myMix(cb3(cb2(cb())));

