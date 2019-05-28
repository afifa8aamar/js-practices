var arr = [5,6,7,3,5,9,1];
var max, temp ;

for (var i = 0; i < arr.length; i++)
{
    max = arr[i];
    for (var j = i; j < arr.length; j++)
    {
        if (max < arr[j])
        {
            max = arr[j];
            temp = arr[i];
            arr[j] = temp;
            arr[i] = max;
        }
    }
}

for (i = 0; i < arr.length ; i++)
{
    console.log(arr[i]);
}