var arr = [1, -1, 2, -2, 3];

function myFilter (arr, f )
{
  if(!Array.isArray(arr)) 
    throw new Error ('Provide only an Array');
  else if (!typeof fun == 'function')
    throw new Error ('Provide a function');

    else {
        var len = arr.length ;
        var res = new Array(len);
        var temp = arr, c = 0, i = -1;
        while (++i !== len){
        if (i in arr){
          if (f.call(arr, temp[i], i, temp)){
            res[c++] = temp[i];
          }
        }
      }
    res.length = c;
    return res;
  }
}


var positiveArr = function(number) {
  return number < 0;
};

console.log(myFilter(arr, positiveArr));
console.log ( 'Dont trust the programmer :P ');

