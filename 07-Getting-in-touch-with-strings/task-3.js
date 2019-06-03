const truncate = function (string, maxlength)
{
    var final = string;
    if (string.length > maxlength)
    {
        final = string.substring(0,maxlength);
        final = final + '...';
    }
        return final;
        
};

console.log(truncate('I wanna to say next thing about this topic',3));