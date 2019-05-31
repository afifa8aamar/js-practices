var arr = [1, 2, 3];

function f(arr) {

    if (Array.isArray(arr) == false)
        throw new Error('parameter type should be an array');
    if (arr.length == 0)
        throw new Error('parameter can\'t be an empty');

            console.log(f(arr[arr.length]));
            f(arr.pop());

}

f([1,2,3]);