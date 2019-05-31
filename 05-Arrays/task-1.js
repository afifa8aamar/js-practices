var arr = ['Alex', 'Pitter', 'afifa'];

var f = function(item, i, arr) 
{
  console.log( i + ': ' + item + ' (array: ' + arr + ')' );
}


function forEach (arr, f )
{
  if(!Array.isArray(arr)) 
    throw new Error ('Provide only an Array');
  else if (!typeof fun == 'function')
    throw new Error ('Provide a function');
    else {
      
      var t;
    if (arr.length > 1) {
      t = arr[1];
    }

    var item = 0;

    while (item < arr.length) {

      var value;

      if (item in arr) {

        value = arr[item];

        f.call(t, value, item, arr);
      }
      item++;
    }
}
}


console.log(forEach(arr,f));
