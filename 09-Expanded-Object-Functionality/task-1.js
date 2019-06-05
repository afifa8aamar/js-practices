
Object.prototype.extend = function(o) 
{
    for (var prop of Object.keys(o))
    {
        if (typeof this[prop] === 'undefined')
            this[prop] = o[prop];
    }
}




const data = { a: 'a' };
const source = { a: 'A', b: 'b' };
data.extend(source);
console.log(data);

Object.defineProperty(source, 'b', { writable: false });
Object.defineProperty(Object.prototype, extend, {enumerable: false});
console.log(Object.getOwnPropertyDescriptor(data, 'b').writable); 


