
function sum (arr, callback)
{
    callback(arr,sum + arr.shift());
    console.log(sum);
}


var arr = [1,2,3];

sum(arr,0);

