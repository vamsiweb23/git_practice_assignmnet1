function prime(num)
{
    var count=0;
    for(var i=0; i<=num; i++)
    {
        if(num%i==0)
        {
            count++
        }
    }
    return count
}

var chek=prime(23)
if(check==2)
{
    console.log("prime")

}
else 
{
    console.log("not prime")
}
