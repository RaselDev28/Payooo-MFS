document.getElementById('btn_Cash_out')
    .addEventListener('click', function (event) {
        event.preventDefault();

        const cashOut = getInputFieldValueById('input-cash-out');
        const cashOutPin = getInputFieldValueById('input-cash-out-pin')
        console.log(cashOut, cashOutPin);
    })