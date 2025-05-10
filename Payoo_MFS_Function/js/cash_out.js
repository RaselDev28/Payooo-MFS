document.getElementById('btn_Cash_out')
    .addEventListener('click', function (event) {
        event.preventDefault();

        const cashOut = getInputFieldValueById('input-cash-out');
        const cashOutPin = getInputFieldValueById('input-cash-out-pin')
        
        
    if(isNaN(cashOut)){
        alert('Not a Number');
        return;
    }

        if(cashOutPin===1234){

            const balence=getTextFieldValueById('account-balence');

            if(cashOut > balence){
                alert('Insufficient Balence');
                return;
            }

            const updateBalence=balence-cashOut;

            document.getElementById("account-balence").innerText = updateBalence;


            const div = document.createElement('div');
            div.classList.add('bg-yellow-300');
            div.innerHTML=`
                <h4 class='text-2xl' font-bold>Cash Out</h4>
                <p>${cashOut} Withdraw. NewBalence ${updateBalence}</p>
            `

            document.getElementById('Transection-section').appendChild(div);
        }
        else{
            alert('Wrong Credentials');
        }
    })