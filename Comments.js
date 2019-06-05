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