const person = {
    rate : null,
    salary : null  
}

Object.defineProperty(person, 'rate', {
    writable: true,
    enumerable: false,
    configurable: false
});

Object.defineProperty(person, 'salary', {

    get()
    { 
        var today = new Date();
        today = today.getDay();
        if (typeof this.rate != undefined )
            return this.rate*today;
        return 0;
    }
});



person.rate = 10;
console.log (Object.getOwnPropertyDescriptor(person, 'salary'));
console.log(person.salary);