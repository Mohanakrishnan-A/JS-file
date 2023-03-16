function factorial(){
    var a,i,prod;
    a=parseInt(document.getElementById("num").value);
    prod=1;
    for(i=1;i<=a;i++)
    {
        prod=prod*i;
    }
    document.getElementById("Answer").innerHTML="The prod of "+a+" is "+prod; 
}