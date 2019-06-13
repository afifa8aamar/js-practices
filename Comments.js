/*const obj = Object.create(null);
obj.age = 1;

const human = Object.create(obj, {
    name: {
        value:'human'
    },
    age: {
        value : 21,
        configurable: false
    }
})

Object.getOwnPropertyDescriptor(human,'name');
console.log(human.age);
console.log(human.name);


*/
/*
const core = {

}

const obj = {
    __proto__: core
}


console.log(obj.prototype);

*/

/*
const core = {
name : 'core'
}

const obj = {
    __proto__: core,
    read ()
    {
        console.log(this.name);
        console.log(Object.getPrototypeOf(this).name);
        console.log(this.__proto__.name);
        console.log(super.name);
    },
    name : 'obj'
}

obj.read();

*/




/* 15 - task-1


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
        this.map.forEach((value, key, ownMap) => {
            console.log(`${key} ${value}`);
        });
    }
}


const db = new DB();

const person = {
    name: 'Pitter', // required field with type string
    age: 21, // required field with type number
    country: 'ge', // required field with type string
    salary: 500 // required field with type number
};
const person1 = {
    name: 'Henry', // required field with type string
    age: 21, // required field with type number
    country: 'ge', // required field with type string
    salary: 500 // required field with type number
};

var id = db.create(person);
console.log(db.id);
const customer = db.read(id);
console.log(customer);


var id1 = db.create(person1);
console.log(db.id1);
const customer1 = db.read(id1);
console.log(customer1);

const customers = db.readAll(); 

/*

const id = db.create(person);
const customers = db.readAll(); // array of users
db.update(id, { age: 22 }); // id
db.delete(id); // true

*/






/*


class DB 
{
    constructor()
    {
        this.map = new Map();
    }

    create(obj)
    {
        if (typeof obj !== 'object') 
            throw new TypeError('provide only object');
        if (typeof obj.name !== 'string')
            throw new TypeError('name is not defined or not a string');
        if (typeof obj.age !== 'number')
            throw new TypeError('age is not defined or not a number');
        if (typeof obj.country !== 'string')
            throw new TypeError('country is not defined or not a string');
        if (typeof obj.salary !== 'number')
            throw new TypeError('salary is not defined or not a number');
        this.map.set(obj.name,obj);
        var id = obj.name;
        return id;
    }

    read (id)
    {
        if (typeof id == 'undefined')
            throw new TypeError('provide a parameter');
        if (typeof id !== 'string')
            throw new TypeError('id is not a string');
        if (this.map.get(id) == 'undefined')
            return null;
        return this.map.get(id);
    }

    readAll()
    {
        if (arguments.length > 0)
            throw new TypeError('This function doesnt require parameters');
        var arr = [];
        for (const v of this.map.values()) 
            {arr.push(v);}
        return arr;
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
console.log(id);
const customer = db.read(id);
console.log(customer);
const customers = db.readAll(); // array of users
console.log(customers);
db.update(id, { age: 22 }); // id
console.log(db);
db.delete(id); // true
console.log(db);



/*