document.getElementById("btn_add_money").addEventListener("click", function (event) {
    event.preventDefault();

    
const addMoney=getInputFieldValueById('input-add-money');
const pinNumber=getInputFieldValueById('input-pin-number');
console.log("Add Money is :", addMoney, pinNumber);
})
