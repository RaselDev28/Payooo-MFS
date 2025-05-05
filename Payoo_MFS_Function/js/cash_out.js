document.getElementById('btn_Cash_out')
    .addEventListener('click', function (event) {
        event.preventDefault();

        const cashOut = getInputFieldValueById('input-cash-out');
        const cashOutPin = getInputFieldValueById('input-cash-out-pin')
        

        if(cashOutPin===1234){
            const balence=getTextFieldValueById('account-balence');
            const updateBalence=balence-cashOut;

            document.getElementById("account-balence").innerText = updateBalence;
        }
        else{
            alert('Wrong Credentials');
        }
    })