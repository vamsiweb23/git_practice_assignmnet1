function prime(number)
{
    var factor=0;
    for(var i=0; i<=number; i++)
    {
        if(number%i==0)
        {
            factor++
        }
    }
    return factor
}


var chek=prime(43)
if(check==2)
{
    console.log("yes it is prime")
}
else 
{
    console.log("it is not a prime")
}

