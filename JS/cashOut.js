document.getElementById('btn-cash-out').addEventListener('click', function(event){
    event.preventDefault();

    const cashOutMoney=document.getElementById('input-cash-out-money').value;
    const pinNumber=document.getElementById('cash-out-pin').value; 

    if(pinNumber==='0148'){
        // console.log("Cashout Succesfull"); 

        const currentBalence=document.getElementById('account-balence').innerText;
        const AccountBalence=parseFloat(currentBalence);
        const cashOutBalence=parseFloat(cashOutMoney);

        const updateBalence=AccountBalence-cashOutBalence;
        document.getElementById("account-balence").innerText=updateBalence;
    }
    else{
        alert('Invalid Credintials');
    }
})
