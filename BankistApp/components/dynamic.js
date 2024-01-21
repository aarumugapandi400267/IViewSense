let loggedIn = false;
let username;
let balance = 1000;

function login() {
    const enteredUsername = document.getElementById('username').value;
    const enteredPassword = document.getElementById('password').value;
    if (enteredUsername === "user" && enteredPassword === "pass") {
        loggedIn = true;
        username = enteredUsername;

        document.getElementById('login-section').style.display = 'none';
        document.getElementById('account-section').style.display = 'block';
        document.getElementById('username-display').innerText = username;
        updateBalance();
    } else {
        alert("Invalid username or password");
    }
}

function deposit() {
    balance += parseFloat(prompt("Enter amount to deposit:"));
    updateBalance();
}

function withdraw() {
    const amount = parseFloat(prompt("Enter amount to withdraw:"));
    if (balance >= amount) {
        balance -= amount;
        updateBalance();
        hideErrorMessage();
    } else {
        showErrorMessage();
    }
}

function updateBalance() {
    document.getElementById('balance').innerText = balance;
}

function logout() {
    loggedIn = false;
    document.getElementById('login-section').style.display = 'block';
    document.getElementById('account-section').style.display = 'none';
}

function showErrorMessage() {
    document.getElementById('error-message').style.display = 'block';
}

function hideErrorMessage() {
    document.getElementById('error-message').style.display = 'none';
}