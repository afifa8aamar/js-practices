var arr = [1, -1, 2, -2, 3];
var arr1 = [1, 2, 3];
var arr2 = ['hi',-2, 3];

function myEvery (arr, f )
{
  if(!Array.isArray(arr)) 
    throw new Error ('Provide only an Array');
  else if (!typeof fun == 'function')
    throw new Error ('Provide a function');

    else 
    {
      i = 0;

      while (i < arr.length) 
      {
        var value;
        if (i in arr) 
        {
          if (typeof arr[i] != 'number')
            throw new TypeError('provide only numbers');
              else 
              {
                value = arr[i];
                var testResult = f.call(arr, value, i, arr);
                  if (!testResult) 
                  {
                    return false;
                  }
              }
        }
        i++;
      }
      return true;
  }
}

var status = function(n){
  return n > 0;
};

console.log(myEvery(arr, status));
console.log(myEvery(arr1, status));
console.log(myEvery(arr2, status)); // TypeError