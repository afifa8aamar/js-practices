
Object.prototype.extend = function(o) 
{
    for (var prop of Object.keys(o))
    {
        if (typeof this[prop] === 'undefined')
        {
            this[prop] = o[prop];
        }
        for (var prop in Object.keys(o)) {
            if (Object.keys(o).hasOwnProperty(prop)) {
                Object[prop] = Object.keys(o)[prop];
            }
        }
    }



}




const data = { a: 'a' };
const source = { a: 'A', b: 'b' };

Object.defineProperty(source, 'b', { writable: false });

data.extend(source);

console.log(data); // { a: 'a', b: 'b' }
console.log(Object.getOwnPropertyDescriptor(data, 'b').writable); // false


