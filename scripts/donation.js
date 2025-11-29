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
        alert('donation failed');
    }
})