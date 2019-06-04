Object.prototype.extend = function(o) 
{
    for (prop in o) 
    {
        o[prop] = Object[prop] ;
    }
}

const data = { a: 'a' };
const source = { a: 'A', b: 'b' };
data.extend(source);
console.log(data);

//Object.defineProperty(source, 'b', { writable: false });
// console.log(Object.getOwnPropertyDescriptor(source));
