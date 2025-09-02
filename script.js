//login Button functionality//

document.getElementById("loginButton").
addEventListener('click',function(e)
{
    e.preventDefault();
    const mobileNumber=1234567891011;
    const pinNumber=1234;

    const mobileNumberValue=document.getElementById("mobile-number").value;
    const mobileNumberValueConverted=parseInt(mobileNumberValue);

    const pinNumberValue=document.getElementById("pin-number").value;
    const pinNumbervalueConverted=parseInt(pinNumberValue);

 

    if(mobileNumberValueConverted === mobileNumber && pinNumbervalueConverted === pinNumber)
        {
            window.location.href="./home.html";
        } 
        else
        {
            alert("Invalid credential");
        }
})