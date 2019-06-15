class Customers 
{
    constructor()
    {
        this.arr = [];
    }

    [Symbol.iterator]() {
        var out = [];        
        let i = 0;
        for (var j =0; j< this.arr.length ; j++)
        {
            if(this.arr[j].verified)
            {
                out.push(this.arr[j])
            }
        }
        var length = out.length;

        return {
            next() {

                var done;
                var val;
                if (i < length)
                    val =  out.pop();
                else
                    val = 'undefined';
                if (i < length)
                    done = false;
                else 
                    done = true;
                i++;
                return { value: val, done }
            }
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