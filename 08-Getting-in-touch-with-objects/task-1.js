const person = {
    salary : null,

}

Object.defineProperty(person, 'salary', {
    get() {
        var day = new Date();
        day = day.getDay();
        if (day < 10)
            return 'bad salary';
        return 'good salary';
    },
});


console.log(person.salary);