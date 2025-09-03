document.getElementById("add-money-btn").addEventListener('click', function (e) {
    e.preventDefault();
     const validPin=1234;
    const bank = document.getElementById("bank").value;
    const accountNumber = document.getElementById("account-number").value;
    const amount = parseInt(document.getElementById("add-amount").value);
    const pin = parseInt(document.getElementById("add-pin").value);
    const avilableBalance=parseInt(document.getElementById("avilable-balance").innerText);
   
    
    if(accountNumber.length<11)
    {
        alert("please provide valid account number");
        return;
    }
    if(pin!=validPin)
    {
        alert("Please provide valid pin number");
        return;
    }
    if(amount<=0 )
    {
        alert("Please provide valid amount");
        return;
    }


    const totalNewAvilableBalance= amount+avilableBalance;
    document.getElementById("avilable-balance").innerText=totalNewAvilableBalance;

})