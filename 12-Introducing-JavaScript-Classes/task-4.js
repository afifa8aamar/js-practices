class MyString 
{
    constructor(_name, _surname, _rate, _days) 
    {
        this._name = _name;
        this._surname = _surname;
        this._rate = _rate;
        this._days = _days;
    }

    reverse(str)
    {
        str = str.split('');
        return (str.reverse()).join('');
    } 
    
    ucFirst(str)
    {
        var temp = str[0];
        temp = str.charCodeAt(0);
        var char = temp - 32;
        temp = String.fromCharCode(char);
        str = temp + str.substring(1);
        return str;
    }

    ucWords(str)
    {
        var words = str.split(' ');
       for (var i = 0; i < words.length ; i++)
       {
            words[i] = this.ucFirst(words[i]);
       }
       return words.join(' ');
    }
}



var str = new MyString();

console.log(str.reverse('abcde')); // print 'edcba'
console.log(str.ucFirst('abcde')); // print 'Abcde'
console.log(str.ucWords('abcde abcde abcde')); // print 'Abcde Abcde Abcde'