function getCustomers(customers, countries) {
    return promise = new Promise(function (resolve, reject) {
        for (var i = 0; i < countries.length ; i++)
        {
            if (customers[i].verified)
            {
                resolve((() => {
                    customers[i] = {...customers[i], ...countries[i] }
                    return customers[i];
                })());
            }
            else 
            reject ((() => {
                name = customers[i].name;
                console.log('We don\'t have information about country for this customer: ' + name ) ;
            })());
        }
    });
  }



const customers = [
    {
        id: 'A1',
        name: 'Oliver',
        verified: true
    },
    {
        id: 'A2',
        name: 'alex',
    }
];

const countries = [
    {
        id: 'A1',
        country: 'usa',
    },
    {
        id: 'A2',
        country: 'poland'
    }
];

const out = getCustomers(customers, countries)
    .then((customers) => console.log(customers))
    .catch(error => console.log(error))
