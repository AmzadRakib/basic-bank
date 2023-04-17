const submitButton = document.getElementById('btn-submit').addEventListener('click', function () {
    const emailField = document.getElementById('user-email');
    const email = emailField.value;
    const passwordField = document.getElementById('user-password');
    const password = passwordField.value;
    if (email === 'amzadhrakib@gmail.com' && password === 'amzadhossain') {
        window.location.href = 'bank.html';
    }
    else {
        alert('please enter your correct information');
    }
})