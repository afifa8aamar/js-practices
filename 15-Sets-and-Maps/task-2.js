class DB 
{
    constructor()
    {
        this.map = new Map();
    }

    create(obj)
    {
        if (typeof obj !== 'object') 
        {
            throw new TypeError('provide only object');
        }
        if (typeof obj.name !== 'string')
        {
            throw new TypeError('name is not defined or not a string');
        }
        if (typeof obj.age !== 'number')
        {
            throw new TypeError('age is not defined or not a number');
        }
        if (typeof obj.country !== 'string')
        {
            throw new TypeError('country is not defined or not a string');
        }
        if (typeof obj.salary !== 'number')
        {
            throw new TypeError('salary is not defined or not a number');
        }
        this.map.set(obj.name,obj);
        var id = obj.name;
        return id;
    }

    read (id)
    {
        if (typeof id !== 'string')
        {
            throw new TypeError('id is not a string');
        }
        if (this.map.get(id) == 'undefined')
            return null;
        return this.map.get(id);
    }

    readAll()
    {
        const a = [...this.map.values()];
        return a;
    }

    update(id, obj)
    {
        if (arguments.length !== 2)
            throw new TypeError('Require id and object');
        if ( this.map.get(id) == void 0)
            throw new TypeError('This id does not exist!');
        if (typeof id !== 'string')
            throw new TypeError('id is not a string');
        if (typeof obj !== 'object') 
            throw new TypeError('provide only object');
        if (typeof obj.name !== 'undefined' && typeof obj.name !== 'string')
            throw new TypeError('name is not defined or not a string');
        if (typeof obj.age !== 'undefined' && typeof obj.age !== 'number')
            throw new TypeError('age is not defined or not a number');
        if (typeof obj.country !== 'undefined' && typeof obj.country !== 'string')
            throw new TypeError('country is not defined or not a string');
        if (typeof obj.salary !== 'undefined' && typeof obj.salary !== 'number')
            throw new TypeError('salary is not defined or not a number');
        if (typeof obj.name !== 'undefined')
        {
            var getObj = this.read(id)
            getObj.name = obj.name;
            this.map.set(id, getObj);
        }
        if (typeof obj.age !== 'undefined')
        {
            var getObj = this.read(id)
            getObj.age = obj.age;
            this.map.set(id, getObj);
        }
        if (typeof obj.country !== 'undefined')
        {
            var getObj = this.read(id)
            getObj.country = obj.country;
            this.map.set(id, getObj);
        }
        if (typeof obj.salary !== 'undefined')
        {
            var getObj = this.read(id)
            getObj.salary = obj.salary;
            this.map.set(id, getObj);
        }
        
    }

    delete (id)
    {
        if ( this.map.get(id) == void 0)
            throw new ReferenceError('Invalid Id');
        console.log(this.map.delete(id)) ;
    }

    find (query)
    {
        var map = [...this.map.values()];
        var out = [];
        if (typeof query !== 'object')
            throw new TypeError('query is invalid');
        for(var i = 0; i < map.length ; i++)
        {
            if (
            (typeof query.name == 'undefined' || query.name == map[i].name) 
            &&
            (typeof query.age  == 'undefined' || (typeof query.age.min == 'undefined' || query.age.min < map[i].age))
            &&
            (typeof query.age  == 'undefined' || (typeof query.age.max == 'undefined' || query.age.max > map[i].age))
            && 
            (typeof query.country == 'undefined' || query.country == map[i].country)
            &&
            (typeof query.salary  == 'undefined' || (typeof query.salary.min == 'undefined' || query.salary.min < map[i].salary))
            && 
            (typeof query.salary  == 'undefined' || (typeof query.salary.max == 'undefined' || query.salary.max > map[i].salary))
            )
                    
            out.push(map[i]);           
        }
        return out;
    }
}


const db = new DB();

const person = {
    name: 'Pitter', // required field with type string
    age: 21, // required field with type number
    country: 'ge', // required field with type string
    salary: 500 // required field with type number
};

const id = db.create(person);

const query = {
    country: 'ge',
    age: {
        min: 18
    },
    salary: {
        min: 300,
        max: 600
    }
};
console.log ( 'task-2');
const customers = db.find(query); // array of users
console.log(customers)