// Step-1: Get add monet btn for form

document.getElementById('btn-add-money').addEventListener("click", function(event){
    event.preventDefault();

    // step-2: Get new amount from form.
    const addMoneyInput=document.getElementById("input-add-money").value;

    // Step-3: Get Pin Number for Check
    const pinNumber=document.getElementById('pin-number').value;


    // Step-4: Check the Pin Number

    if(pinNumber==='0148'){
        // console.log('Add your money');

        // Step-5: Get the Current Balence
        const currentBalence=document.getElementById("account-balence").innerText;
        // console.log(currentBalence);

        // Sum of total Amount
        const accountBalence= parseFloat(currentBalence);
        const addMoneyBalence=parseFloat(addMoneyInput);

        const totalAmount=accountBalence+addMoneyBalence;
        // console.log(totalAmount);

        // Display the balence in UI
        document.getElementById('account-balence').innerText=totalAmount;


    }
    else{
        alert("Invalid Crediantials");
    }
})
