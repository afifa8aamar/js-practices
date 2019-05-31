const bind = function(func, link, ...parameters)
{
        return parameters[0] + ': ' + func(link.name) ;

} 


const obj = {
    getName: function(message) {
        return `${message}: ${this.name}`;
    }
};


const getName = obj.getName;
const f = bind(getName, {name: 'Pitter'}, 'My name');



console.log (f);