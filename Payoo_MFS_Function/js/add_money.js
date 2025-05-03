document.getElementById("btn_add_money").addEventListener("click", function (event) {
    event.preventDefault();


    const addMoney = getInputFieldValueById('input-add-money');
    const pinNumber = getInputFieldValueById('input-pin-number');

    if (pinNumber === 1234) {
        const balence = getTextFieldValueById("account-balence");
        const newBalence = balence + addMoney;

        document.getElementById("account-balence").innerText = newBalence;

    }
    else {
        alert("Wrong Credential")
    }
})
