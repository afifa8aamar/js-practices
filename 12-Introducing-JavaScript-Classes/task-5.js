class Validator {


    isEmail(str) {
        str = str.split('');
        for (var i = 0; i < str.length; i++) {
            if (str[i] == '@')
                return true;
        }
        return false;
    }

    isDomain(str) {
        str = str.split('.net');
        if (str.length > 0)
            return true;
        return false;
    }

    isDate(date) {
        var check = date.split('.');
        if (check.length !== 3)
            return false;
        var day = check[0];
        var month = check[1];
        var year = check[2];
        if (typeof Number(day) !== 'number' || day > 31 || day < 1)
            return false;
        if (typeof Number(month) !== 'number' || month > 12 || month < 1)
            return false;
        if (typeof Number(year) !== 'number' ||  year < (new Date).getDay())
            return false;
        return true;
    }

    isPhone(num)
    {
        var check = num.split('');
        if (check.length !== 13)
            return false;
        if ( check[0] + check[1] + check[2] + check[3]!== '+995')
            return false;
        for (var i = 1; i< check.length  ; i++)
        {
            if (typeof Number(check[i]) !== 'number' )
                return false;
        }
        return true;
        
    }


}


var validator = new Validator();

console.log(validator.isEmail('jshtml@mail.ru'));
console.log(validator.isDomain('jshtml.net'));
console.log(validator.isDate('12.05.2020'));
console.log(validator.isPhone('+995568122654')); // it can be format of your country