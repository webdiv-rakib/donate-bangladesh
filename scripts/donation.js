// Donate for Noakhali
document.getElementById('donate-1').addEventListener('click', function (event) {
    event.preventDefault();
    const accountBalance = getCurrentBalance('current-balance');
    const noakhaliBalance = getCurrentBalance('noakhali');
    const inputAmount = getInputAmount('noakhali-amount');
    const noakhaliTitle = getSentence('title-1');

    // console.log(accountBalance, noakhaliBalance, inputAmount);
    if (isNaN(inputAmount)) {
        alert('Donation Failed');
        return;
    }
    if (inputAmount >= '1') {
        if (inputAmount > accountBalance) {
            alert('You do not have sufficient balance in your account');
            return;
        }
        const newBalance = noakhaliBalance + inputAmount;
        const newAccountBalance = accountBalance - inputAmount;
        document.getElementById('current-balance').innerText = newAccountBalance;
        document.getElementById('noakhali').innerText = newBalance;

        const timeNow = new Date().toLocaleString();
        const p = document.createElement('p');
        p.innerHTML = `
            <div class = "border-2 rounded-xl px-5 py-10">
            <h1>${inputAmount} Taka is ${noakhaliTitle}</h1>
            <p>${timeNow}</p>
            </div>
        `;
        document.getElementById('history-container').appendChild(p);

        document.getElementById('my_modal_1').showModal();
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
    const feniTitle = getSentence('title-2');

    if (isNaN(inputAmount)) {
        alert('Donation Failed');
        return;
    }
    if (inputAmount >= '1') {
        if (inputAmount > accountBalance) {
            alert('You do not have sufficient balance in your account');
            return;
        }
        const newBalance = feniBalance + inputAmount;
        document.getElementById('feni').innerText = newBalance;
        const newAccountBalance = accountBalance - inputAmount;
        document.getElementById('current-balance').innerText = newAccountBalance;
        document.getElementById('my_modal_1').showModal();

        const timeNow = new Date().toLocaleString();
        const p = document.createElement('p');
        p.innerHTML = `
            <div class = "border-2 rounded-xl px-5 py-10 mt-4">
            <h1>${inputAmount} Taka is ${feniTitle}</h1>
            <p>${timeNow}</p>
            </div>
        `
        document.getElementById('history-container').appendChild(p);
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
    const quotaTitle = getSentence('title-3');
    if (isNaN(inputAmount)) {
        alert('Donation Failed');
        return;
    }
    if (inputAmount >= '1') {
        if (inputAmount > accountBalance) {
            alert('You do not have sufficient balance in your account');
            return;
        }
        const newBalance = quotaBalance + inputAmount;
        document.getElementById('quota').innerText = newBalance;
        const newAccountBalance = accountBalance - inputAmount;
        document.getElementById('current-balance').innerText = newAccountBalance;
        document.getElementById('my_modal_1').showModal();
        
        const timeNow = new Date().toLocaleString();
        const p = document.createElement('p');
        p.innerHTML = `
            <div class = "border-2 rounded-xl px-5 py-10 mt-4">
            <h1>${inputAmount} Taka is ${quotaTitle}</h1>
            <p>${timeNow}</p>
            </div>
        `
        document.getElementById('history-container').appendChild(p);
    }
    else {
        alert('Donation Failed');
    }
})