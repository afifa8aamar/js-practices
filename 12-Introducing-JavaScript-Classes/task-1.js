class Worker 
{
    constructor(name, surname, rate, days) 
    {
        this.name = name;
        this.surname = surname;
        this.rate = rate;
        this.days = days;
    }
    
    getSalary() 
    {
        var salary = this.rate * this.days;
        return salary;
    }
}

const worker1 = new Worker('John', 'Smith', 50, 31);
const worker2 = new Worker('Will', 'Doe', 30, 20)

var worker = new Worker('John', 'Smith', 10, 31);

console.log(worker.name); // print 'John'
console.log(worker.surname); // print 'Smith'
console.log(worker.rate); // print 10
console.log(worker.days); // print 31
console.log(worker.getSalary()); // print 310 - because 10*31