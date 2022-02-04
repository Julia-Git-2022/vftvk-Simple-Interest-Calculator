function updateRate() 
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval;
}

function compute()
{
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = principal * years * rate /100;
    var year = new Date().getFullYear()+parseInt(years);
    var result="\nIf you deposit "+principal+","+"\nat an interest rate "+ rate+"%.\nYou will receive an amount of "+interest+",\n in the year "+year+"."
    document.getElementById("result").innerText=result
}
    
function validate()
{   
    var principal = document.getElementById("principal").value
    if (principal == null) {alert("Enter a positive number"); principal.focus(); return false;}    
    if (principal <=0 ) {alert("Enter a positive number"); principal.focus(); return false;}
}     
    

        