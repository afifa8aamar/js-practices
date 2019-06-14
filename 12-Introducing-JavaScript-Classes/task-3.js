class Worker 
{
    constructor(_name, _surname, _rate, _days) 
    {
        this._name = _name;
        this._surname = _surname;
        this._rate = _rate;
        this._days = _days;
    }
    getName() 
    {
        return this._name;
    }
    getSurname() 
    {
        return this._surname;
    }
    getRate() 
    {
        return this._rate;
    }
    getDays() 
    {
        return this._days;
    }
    getSalary() 
    {
        var salary = this._rate * this._days;
        return salary;
    }
    setRate(_rate) 
    {
        this._rate = _rate;
    }
    setDays(_days) 
    {
        this._days = _days;
    }
}

var worker = new Worker('John', 'Smith', 10, 31);

console.log(worker.getRate()); // print 10
console.log(worker.getDays()); // print 31
console.log(worker.getSalary()); // print 310 - because 10*31

// Now using setters:
worker.setRate(20); // increase rate
worker.setDays(10); // decrease days
console.log(worker.getSalary()); // print 200 - because 20*10