class User {
	constructor(name, surname) {
		this.name = name;
		this.surname = surname;
	}

	getFullName() {
		return this.name + ' ' + this.surname;
	}
}

class Student extends User {
    constructor(name, surname, year) 
    {
        super(name, surname);
        this.year = year;
    }
    getCourse() 
    {
        var years = new Date().getFullYear()  - this.year;
        if (years > 5) 
            throw new Error('You cant\'t have more than 5 courses')
        else 
            return years;
    }
}



var student = new Student('John', 'Smith', 2015);

console.log(student.name); // print 'John'
console.log(student.surname); // print 'John'
console.log(student.getFullName()); // print 'John Smith'
console.log(student.year); // print 2015
console.log(student.getCourse()); // print 4 - fourth course, because current year 2019




