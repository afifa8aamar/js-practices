var is_prime;
var divider;

for (var i = 2 ; i < 10 ; i++)
{
    is_prime = false;
    divider = 2;
    while (divider < i )
    {
        if (i % divider == 0)
        is_prime = true;

        divider++;
    }
    if (is_prime == false)
        console.log(i);
}
