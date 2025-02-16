document.getElementById('button-login').addEventListener('click',function(event){
    event.preventDefault();
    


    // get Phone-number

const PhoneNumber=document.getElementById('Phone-number').value;
// Get Pin Number
const pinNumber=document.getElementById('pin-number').value;

// console.log(PhoneNumber, pinNumber);

if(PhoneNumber=== '01789853943' && pinNumber==='0148'){
    console.log("You are loged in");
    window.location.href="home.html";
}
else{
    alert('Invalid Credentials');
}
})

