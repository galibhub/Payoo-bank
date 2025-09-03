// Add money feature//
document.getElementById("add-money-btn").addEventListener('click', function (e) {
    e.preventDefault();
    const validPin = 1234;
    const bank = document.getElementById("bank").value;
    const accountNumber = document.getElementById("account-number").value;
    const amount = parseInt(document.getElementById("add-amount").value);
    const pin = parseInt(document.getElementById("add-pin").value);
    const avilableBalance = parseInt(document.getElementById("avilable-balance").innerText);


    if (accountNumber.length < 11) {
        alert("please provide valid account number");
        return;
    }
    if (pin != validPin) {
        alert("Please provide valid pin number");
        return;
    }
    if (amount <= 0) {
        alert("Please provide valid amount");
        return;
    }


    const totalNewAvilableBalance = amount + avilableBalance;
    document.getElementById("avilable-balance").innerText = totalNewAvilableBalance;

})

//cash out feature//

document.getElementById("withdraw-btn").addEventListener("click", function (e) {
    e.preventDefault();
    const outPin=1234;
    const agentNumber = document.getElementById("agent-number").value;
    const amount = parseInt(document.getElementById("withdraw-amount").value);
    const cashOutPin= parseInt(document.getElementById("cashout-pin").value);
    const avilableBalance = parseInt(document.getElementById("avilable-balance").innerText);

  
    if (agentNumber.length < 11) {
        alert("please provide valid Agent number");
        return;
    }
    
    if (amount <= 0) {
        alert("Please provide valid amount");
        return;
    }

     if (cashOutPin != outPin) {
        alert("Please provide valid pin number");
        return;
    }
    const totalNewAvilableBalance = avilableBalance - amount;
    document.getElementById("avilable-balance").innerText = totalNewAvilableBalance;

})




//toggling feature//

document.getElementById("add-button").addEventListener("click", function () {
    document.getElementById("cash-out-parent").style.display = "none";

    document.getElementById("add-money-parent").style.display = "block";

})

document.getElementById("cash-out-button").addEventListener("click", function () {
    document.getElementById("add-money-parent").style.display = "none";

    document.getElementById("cash-out-parent").style.display = "block";

})

