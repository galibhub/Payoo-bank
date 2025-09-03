
//functions to get input value//

function getInputValueNumber(id) {
    const inputField = document.getElementById(id);
    const inputFieldValue = inputField.value;
    const inputFieldValueNumber = parseInt(inputFieldValue);
    return inputFieldValueNumber;
}

function getInputValue(id) {

    const inputField = document.getElementById(id);
    const inputFieldValue = inputField.value;
    return inputFieldValue;
}

//function to get innertext//
function getInnerText(id) {
    const element = document.getElementById(id);
    const elementValue = element.innerText;
    const elementValueNumber = parseInt(elementValue);
    return elementValueNumber;
}



//function to SET INNERTEXT//
function setInnerText(value) {
    const availableBalanceElement = document.getElementById("avilable-balance");
    availableBalanceElement.innerText = value;
}

//function to toggle//

function handleToggle(id) {

    const forms = document.getElementsByClassName("form");
    for (const form of forms) {
        form.style.display = "none";
    }
    document.getElementById(id).style.display = "block";
}

//function to toggle buttons//
function handleButtonToggle(id)
{

    const formBtns=document.getElementsByClassName("form-btn");

    for(const btn of formBtns)
    {
        btn.classList.remove("border-[#0874f2]","bg-[#0874f20d]");
        btn.classList.add("border-gray-300");
    }
    document.getElementById(id).classList.remove("border-gray-300");
    document.getElementById(id).classList.add("border-[#0874f2]","bg-[#0874f20d]");
}

// Add money feature//
document.getElementById("add-money-btn").addEventListener('click', function (e) {
    e.preventDefault();
    const validPin = 1234;
    const bank = getInputValue("bank");
    const accountNumber = document.getElementById("account-number").value;
    const amount = getInputValueNumber("add-amount");
    const pin = getInputValueNumber("add-pin");
    const avilableBalance = getInnerText("avilable-balance");


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
    setInnerText(totalNewAvilableBalance);

})



//cash out feature//

document.getElementById("withdraw-btn").addEventListener("click", function (e) {
    e.preventDefault();
    const outPin = 1234;
    const agentNumber = document.getElementById("agent-number").value;
    const amount = getInputValueNumber("withdraw-amount");
    const cashOutPin = parseInt(document.getElementById("cashout-pin").value);
    const avilableBalance = getInnerText("avilable-balance");


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
    setInnerText(totalNewAvilableBalance);

})



//toggling feature//

document.getElementById("add-button").addEventListener("click", function () {

    handleToggle("add-money-parent");
    handleButtonToggle("add-button");
})

document.getElementById("cash-out-button").addEventListener("click", function () {

     handleToggle("cash-out-parent");
     
     handleButtonToggle("cash-out-button");
})

document.getElementById("transfer-button").addEventListener("click", function () {

     handleToggle("transfer-money-parent");
     
     handleButtonToggle("transfer-button");
})

document.getElementById("bonus-button").addEventListener("click", function () {
     handleToggle("get-money-parent");
     handleButtonToggle("bonus-button");
})

// Hide all form sections on page load
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById("add-money-parent").style.display = "none";
    document.getElementById("cash-out-parent").style.display = "none";
    document.getElementById("transfer-money-parent").style.display = "none";
    document.getElementById("get-money-parent").style.display = "none";
    document.getElementById("pay-bill-parent").style.display = "none";
    document.getElementById("transaction-parent").style.display = "none";
})