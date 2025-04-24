// Show cash Out button
document.getElementById("show-cash-out-btn").addEventListener('click', function(){

    document.getElementById("cash-out-form").classList.remove('hidden');

    document.getElementById("add-money-form").classList.add('hidden');
})

// Show Add Money Form

document.getElementById('show-add-money-form').addEventListener('click', function(){

    document.getElementById("add-money-form").classList.remove('hidden');
    document.getElementById("cash-out-form").classList.add('hidden');
})