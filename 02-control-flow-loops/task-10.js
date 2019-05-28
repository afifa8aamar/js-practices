var arr = [5,6,7,3,5,9,1];
var min, temp ;

for (var i = 0; i < arr.length; i++)
{
    min = arr[i];
    for (var j = i; j < arr.length; j++)
    {
        if (min > arr[j])
        {
            min = arr[j];
            temp = arr[i];
            arr[j] = temp;
            arr[i] = min;
        }
    }
}

for (i = 0; i < arr.length ; i++)
{
    console.log(arr[i]);
}