// Donate for Noakhali
document.getElementById('donate-1').addEventListener('click', function (event) {
    event.preventDefault();
    const accountBalance = getCurrentBalance('current-balance');
    const noakhaliBalance = getCurrentBalance('noakhali');
    const inputAmount = getInputAmount('noakhali-amount');

    // console.log(accountBalance, noakhaliBalance, inputAmount);
    if (inputAmount >= '1') {
        const newBalance = noakhaliBalance + inputAmount;
        const newAccountBalance = accountBalance - inputAmount;
        document.getElementById('current-balance').innerText = newAccountBalance;
        document.getElementById('noakhali').innerText = newBalance;
    }
    else {
        alert('Donation Failed');
    }
})

// Donate for Feni
document.getElementById('donate-2').addEventListener('click', function (event) {
    event.preventDefault();
    const accountBalance = getCurrentBalance('current-balance');
    const feniBalance = getCurrentBalance('feni');
    const inputAmount = getInputAmount('feni-amount');
    if (inputAmount >= '1') {
        const newBalance = feniBalance + inputAmount;
        document.getElementById('feni').innerText = newBalance;
        const newAccountBalance = accountBalance - inputAmount;
        document.getElementById('current-balance').innerText = newAccountBalance;
    }
    else {
        alert('Donation Failed');
    }
})

// Donate for Quota
document.getElementById('donate-3').addEventListener('click', function (event) {
    event.preventDefault();
    const accountBalance = getCurrentBalance('current-balance');
    const quotaBalance = getCurrentBalance('quota');
    const inputAmount = getInputAmount('quota-amount');
    if (inputAmount >= '1') {
        const newBalance = quotaBalance + inputAmount;
        document.getElementById('quota').innerText = newBalance;
        const newAccountBalance = accountBalance - inputAmount;
        document.getElementById('current-balance').innerText = newAccountBalance;
    }
    else {
        alert('Donation Failed');
    }
})