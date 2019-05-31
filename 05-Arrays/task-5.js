function myReduce (arr, f , red)
{
  if(!Array.isArray(arr)) 
      throw new TypeError ('Provide only an Array');
    else if (typeof f !== 'function')
      throw new TypeError ('Provide a function');
    else if(arr.length < 1) 
      throw new TypeError( 'Please provide Array with values ');
    else if(typeof red !== 'number') 
      throw new TypeError( 'Please provide a number ');  
  else {
    
      var len = arr.length;
      var k = 0; 
      var value = red;

        if (arr.length > 0) 
          {
              value =red + arr[0];
          } 
        else 
          {
              while (k < len && !(k in arr)) 
                {
                  k++; 
                }
                value = red + arr[k++];
            }

      while (k < len) {

        if (k in arr) {
          value = f(value, arr[k], k,arr);
        }
     
        k++;
      }
      return value-1;
  }
}


var result = function(sum, current) {
  return sum + current;
};
var arr = [1, 2, 3, 4];
var arr1 = [];
var acc = 10;
console.log(myReduce(arr, result, acc)); 
// console.log(myReduce(arr1, result, acc)); // typeError