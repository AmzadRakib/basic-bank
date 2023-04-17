// widhdraw section
document.getElementById('btn-withdraw').addEventListener('click', function () {
    const withdrawField = document.getElementById('withdraw-field');
    const newWithdrawAmountString = withdrawField.value;
    const newWithdrawAmount = parseFloat(newWithdrawAmountString);
    withdrawField.value = '';
    if (isNaN(newWithdrawAmount)) {
        alert('please provide valid number amount');
        return;
    }

    // Total withdraw section
    const mainWithdrawAmount = document.getElementById('main-withdraw');
    const currentWithdrawAmountString = mainWithdrawAmount.innerText;
    const currentWithdrawAmount = parseFloat(currentWithdrawAmountString);

    // calculate balance section
    const mainBalance = document.getElementById('main-balance');
    const totalBlanceString = mainBalance.innerText;
    const totalBlance = parseFloat(totalBlanceString);
    if (newWithdrawAmount > totalBlance) {
        alert('Your current balance is low');
        return;
    }
    const totalWithdrawAmount = currentWithdrawAmount + newWithdrawAmount;
    mainWithdrawAmount.innerText = totalWithdrawAmount;

    mainBalance.innerText = totalBlance - newWithdrawAmount;

})
