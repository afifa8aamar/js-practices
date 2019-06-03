var myReduceRight = function(arr,f , init) {

    if(!Array.isArray(arr)) 
      throw new TypeError ('Provide only an Array');
    else if (typeof f !== 'function')
      throw new TypeError ('Provide a function');
    else if(arr.length < 1) 
      throw new TypeError( 'Please provide Array with values ');
    else if(typeof init !== 'string' && typeof init !== 'number') 
      throw new TypeError( 'Please provide a string or number');  

    var i = arr.length - 1;
    var value;

    if (arr.length > 1) 
    {
    if(typeof init == 'string')
      value = '' + init;
      else 
      value = 0 + init;
    }
    else 
    {
      while (i >= 0 && !(i in arr)) 
      {
        i--;
      }
      value = arr[i--];
    }
    for (; i >= 0; i--) 
    {
      if (i in arr) 
        value = f(value, arr[i], i, arr);
    }
    return value;
  }



var arr = ['a', 'b', 'c'];
var arr1 = [1,2,3,4];
var result = myReduceRight(arr1,function(sum, current) {
  return sum + current;
}, '2');

console.log(result);