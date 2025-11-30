// function getCurrentBalance(id) {
//     const currentBalance = document.getElementById('current-balance').innerText;
//     const currentBalanceNumber = parseFloat(currentBalance);
//     console.log(currentBalanceNumber);
//     return currentBalanceNumber;
// }

function getCurrentBalance(id) {
    const currentBalance = document.getElementById(id).innerText;
    const currentBalanceNumber = parseFloat(currentBalance);
    return currentBalanceNumber;
}

function getInputAmount(id) {
    const inputAmount = document.getElementById(id).value;
    const inputAmountNumber = parseFloat(inputAmount);
    return inputAmountNumber;
}

function getSentence(id) {
    const title = document.getElementById(id).innerText;
    return title;
}


function showSectionById(id) {
    document.getElementById('donation-section').classList.add('hidden');
    document.getElementById('history-section').classList.add('hidden');
    document.getElementById(id).classList.remove('hidden');
    document.getElementById(id).classList.remove('hidden');
}
