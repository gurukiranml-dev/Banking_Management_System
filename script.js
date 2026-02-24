let accounts = [];

function createAccount() {
    let type = document.getElementById("accountType").value;
    let accNo = parseInt(document.getElementById("accountNumber").value);
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let balance = parseFloat(document.getElementById("balance").value);

    if (!accNo || !name || !email || balance < 0) {
        alert("Invalid input!");
        return;
    }

    accounts.push({ type, accNo, name, email, balance });

    alert("Account created successfully!");
}

function findAccount(accNo) {
    return accounts.find(acc => acc.accNo === accNo);
}

function deposit() {
    let accNo = parseInt(document.getElementById("transAccNo").value);
    let amount = parseFloat(document.getElementById("amount").value);

    let acc = findAccount(accNo);

    if (!acc || amount <= 0) {
        alert("Invalid transaction!");
        return;
    }

    acc.balance += amount;
    alert("Amount deposited!");
}

function withdraw() {
    let accNo = parseInt(document.getElementById("transAccNo").value);
    let amount = parseFloat(document.getElementById("amount").value);

    let acc = findAccount(accNo);

    if (!acc || amount <= 0 || amount > acc.balance) {
        alert("Invalid transaction!");
        return;
    }

    acc.balance -= amount;
    alert("Amount withdrawn!");
}

function showDetails() {
    let accNo = parseInt(document.getElementById("detailAccNo").value);
    let acc = findAccount(accNo);

    let output = document.getElementById("output");

    if (!acc) {
        output.innerHTML = "Account not found!";
        return;
    }

    output.innerHTML = `
        <p><strong>Account Number:</strong> ${acc.accNo}</p>
        <p><strong>Name:</strong> ${acc.name}</p>
        <p><strong>Email:</strong> ${acc.email}</p>
        <p><strong>Balance:</strong> ₹${acc.balance}</p>
    `;
}