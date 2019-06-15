class Customers 
{
    constructor()
    {
        this.arr = [];
    }

    * [Symbol.iterator]() {
        let i = 0;
        for (var j =0; j< this.arr.length ; j++)
        {
            if(this.arr[j].verified)
               yield this.arr[j];
        }

    }
    
    add(obj)
    {
        if(obj.verified == 'undefined')
            throw new TypeError('Provide verfied for an object')
        this.arr.push(obj);
    }

   
    
}

const customers = new Customers();
customers.add({name: 'Alex'});
customers.add({name: 'Victor'});
customers.add({name: 'Marcus'});
customers.add({name: 'Andrii', verified: true});
customers.add({name: 'Marco', verified: true});
customers.add({name: 'Oliver'});
customers.add({name: 'Lisa', verified: true});
customers.add({name: 'John'});
customers.add({name: 'Ivan', verified: true});

for (const customer of customers) {
    console.log(customer);
}
// console log
/*
{ name: 'Andrii', verified: true }
{ name: 'Marco', verified: true }
{ name: 'Lisa', verified: true }
{ name: 'Ivan', verified: true }
*/