document.getElementById('btn-deposit').addEventListener('click', function () {
    // deposite section
    const depositField = document.getElementById('deposit-field');
    const newDepositAmountString = depositField.value;
    const newdepositAmount = parseFloat(newDepositAmountString);
    depositField.value = '';
    if (isNaN(newdepositAmount)) {
        alert('please provide valid number amount')
        return;
    }
    // add total deposit section
    const mainDeposit = document.getElementById('main-deposit');
    const currentDepositString = mainDeposit.innerText;
    const currentDeposit = parseFloat(currentDepositString)
    const totalDeposit = newdepositAmount + currentDeposit;
    mainDeposit.innerText = totalDeposit;
    //add balance section
    const mainBalance = document.getElementById('main-balance');
    const totalBlanceString = mainBalance.innerText;
    const totalBlance = parseFloat(totalBlanceString);
    mainBalance.innerText = totalBlance + newdepositAmount;







})