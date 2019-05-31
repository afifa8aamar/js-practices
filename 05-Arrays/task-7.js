var arr = ['abcd', 'abcde', 'ab', 'abc'];

var arrLength = arr.map(function(n) {
    var str = n;
    return str.length;
  });
  

console.log( arrLength );