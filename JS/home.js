document.getElementById("btn-add-money")
    .addEventListener('click', function(event){
        event.preventDefault();

        const addMoneyInput=document.getElementById('input-add-money').value;

        const pinNumber=document.getElementById('pin-number').value;

        // Check Pin Number....But this is not a valid way

        if(pinNumber === "0148"){
            // console.log("Add Your money");

            // Get the current Balence

            const balence=document.getElementById('account-balence').innerText;
            // console.log(balence);

            // Add total Balence
            const accountBalence=parseFloat(balence);
            const newAmount=parseFloat(addMoneyInput);

            const updatedBalence=accountBalence+newAmount;
            console.log(updatedBalence);

            // Updated UI/DOM

            document.getElementById('account-balence').innerText=updatedBalence;
        }
        else{
            alert("Pin Number is invalid");
        }
    })