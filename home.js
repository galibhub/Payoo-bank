document.getElementById("add-money-btn").addEventListener('click', function (e) {
    e.preventDefault();
    const bank = document.getElementById("bank").value;
    const accountNumber = document.getElementById("account-number").value;
    const amount = parseInt(document.getElementById("add-amount").value);
    const pin = document.getElementById("add-pin").value;
    const avilableBalance=parseInt(document.getElementById("avilable-balance").innerText)
    
    const totalNewAvilableBalance= amount+avilableBalance;
    document.getElementById("avilable-balance").innerText=totalNewAvilableBalance;

})