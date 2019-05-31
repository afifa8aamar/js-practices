
var arr = ['Alex', 'Pitter'];


function forEach (arr, func)
{
  if(!Array.isArray(arr)) 
    throw new Error ('Provide only an Array');
  else if (!typeof fun == 'function')
    throw new Error ('Provide a function');
    else {
      if (arr.length>1)
      {
        arr.shift();        
        return arr[0]  + forEach(arr, func);
      }    
      else
        return arr[0];
    }
}

var print = function (text)
{
  console.log(text);
}

console.log(forEach(arr,print("hello")));