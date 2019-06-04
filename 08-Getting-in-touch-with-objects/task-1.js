const person = {
    salary : null,

}

Object.defineProperty(person, 'salary', {
    get() {
        var day = new Date();
        day = day.getDay();
        day = 30 - day;
        if (day > 20)
            return 'bad salary';
        return 'good salary';
    },
});


console.log(person.salary);