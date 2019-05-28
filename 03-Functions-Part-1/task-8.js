var arr = [1, 2, 3];

function f(arr) {

    if (typeof arr != 'object')
        throw new Error('parameter type should be an array');
    if (arr.length == 0)
        throw new Error('parameter can\'t be an empty');

        for (var i = 0; i < arr.length; i++)
        {
            console.log(arr[i]);
        }
}

console.log(f(arr));