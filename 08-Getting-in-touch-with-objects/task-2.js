const person = {
    rate : null,
    salary : null  
}

Object.defineProperty(person, 'rate', {
    writable: true,
    enumerable: true,
    configurable: false
});

Object.defineProperty(person, 'salary', {
    writable: false,
    enumerable: true,
    configurable: false ,
    get(){ return 0; }
});

person.rate = 10;
//console.log (Object.getOwnPropertyDescriptor(person, 'salary'));
console.log(person.salary);