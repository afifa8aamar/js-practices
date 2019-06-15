function isCustomerVerified(person) {
    var verified = person.verified;
    console.log(verified);
    const promise = new Promise(function (resolve, reject) {
        if(verified)
        resolve();
        else
        reject('Customer is not verified');
    });
    return promise;
  }



const personFirst = {
    name: 'Oliver',
    verified: true
};

const personSecond = {
    name: 'Alex'
};

isCustomerVerified(personFirst)
    .then(status => console.log(status)) // true
    .catch(error => console.log(error))
    
isCustomerVerified(personSecond)
    .then(status => console.log(status))
    .catch(error => console.log(error)) // Customer is not verified

