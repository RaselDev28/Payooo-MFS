/*
// Common shared functions here

*/

// function getInputFieldValueById(){
// //  const addMoney=document.getElementById("input-add-money").value;
// //  return addMoney;   
// }
function getInputFieldValueById(id) {
    const inputValue = document.getElementById(id).value;
    const inputNumber = parseFloat(inputValue);
    return inputNumber;
}


function getTextFieldValueById(id) {
    const textValue = document.getElementById(id).innerText;
    const textNumber = parseFloat(textValue);
    return textNumber;
}

function showSectionbyId(id){
    document.getElementById('add-money-form').classList.add('hidden');
    document.getElementById('cash-out-form').classList.add('hidden');
    document.getElementById('Transection-section').classList.add('hidden');

    // Show the section 
    document.getElementById(id).classList.remove('hidden');
}