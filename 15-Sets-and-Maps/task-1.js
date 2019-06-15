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
        id = obj.name;
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
        const a = [...this.map.entries()]
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
            console.log(read());
           // getObj = read(id)
           // getObj.name = obj.name;
           // this.map.set(id, getObj);
        }
        
    }

    delete (id)
    {
        if ( this.map.get(id) == void 0)
            throw new TypeError('This id does not exist!');
        return this.map.delete(id);
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
const customer = db.read(id);
const customers = db.readAll(); // array of users
db.update(id, { age: 22 }); // id
db.delete(id); // true