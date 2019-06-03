const person = {
    rate : null,
    set setRate (value) {
        this.rate = value;
        
    },
    get getRate() {
        return this.rate;
        
    },

    salary : null ,
  
    get getSalary() {
        var day = new Date();
        day = day.getDay();
        return person.rate * day;
    },
}


person.rate = 10;
console.log(person.salary);