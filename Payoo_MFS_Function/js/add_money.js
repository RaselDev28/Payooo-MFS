document.getElementById("btn_add_money").addEventListener("click", function (event) {
    event.preventDefault();


    const addMoney = getInputFieldValueById('input-add-money');
    const pinNumber = getInputFieldValueById('input-pin-number');

    if (pinNumber === 1234) {
        const balence = getTextFieldValueById("account-balence");
        const newBalence = balence + addMoney;

        document.getElementById("account-balence").innerText = newBalence;

        // Add to Transection  History
        const p = document.createElement('p');
        p.innerText = `Added: ${addMoney} Tk. New Balence: ${newBalence}`;
        

        // Add money use common function to Transection history

       document.getElementById("Transection-section").appendChild(p);

    // const node= document.createElement('li');



    }
    else {
        alert("Wrong Credential")
    }
})
