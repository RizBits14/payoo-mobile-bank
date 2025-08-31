const validPin = 1234;
const transactionData = []

function getInputValueNumber(id) {
    const inputField = document.getElementById(id);
    return parseInt(inputField.value) || 0;
}

function getInputValue(id) {
    return document.getElementById(id).value;
}

function getInnerText(id) {
    return parseInt(document.getElementById(id).innerText) || 0;
}

function setInnerText(value) {
    document.getElementById('available-balance').innerText = value;
}

function handleToggle(id) {
    const forms = document.getElementsByClassName('form');
    for (const form of forms) {
        form.style.display = 'none';
    }
    document.getElementById(id).style.display = 'block';
}

function handleButtonToggle(id) {
    const formBtns = document.getElementsByClassName('form-btn');
    for (const btn of formBtns) {
        btn.classList.remove('border-[#0874f2]', 'bg-[#0874f20d]');
        btn.classList.add('border-gray-300');
    }
    document.getElementById(id).classList.remove('border-gray-300');
    document.getElementById(id).classList.add('border-[#0874f2]', 'bg-[#0874f20d]');
}

// Add Money
document.getElementById('add-money-btn').addEventListener('click', function (e) {
    e.preventDefault();
    const accountNumber = getInputValue('add-account-number');
    const amount = getInputValueNumber('add-amount');
    const pin = getInputValueNumber('add-pin');
    const availableBalance = getInnerText('available-balance');

    if (accountNumber.length < 11) {
        alert('Please provide valid account number');
        return;
    }
    if (pin !== validPin) {
        alert('Please provide a valid pin number');
        return;
    }

    setInnerText(availableBalance + amount);
    const data = {
        name: 'Add Money',
        date: new Date().toLocaleTimeString()
    }
    transactionData.push(data)
});

// Cash Out
document.getElementById('cashout-btn').addEventListener('click', function (e) {
    e.preventDefault();
    const agentNumber = getInputValue('cashout-agent-number');
    const amount = getInputValueNumber('cashout-amount');
    const pin = getInputValueNumber('cashout-pin');
    const availableBalance = getInnerText('available-balance');

    if (agentNumber.length < 11) {
        alert('Please provide valid agent number');
        return;
    }
    if (pin !== validPin) {
        alert('Please provide a valid pin number');
        return;
    }

    setInnerText(availableBalance - amount);
    const data = {
        name: 'Cash Out',
        date: new Date().toLocaleTimeString()
    }
    transactionData.push(data)
});

// Transfer Money
document.getElementById('transfer-btn').addEventListener('click', function (e) {
    e.preventDefault();
    const accountNumber = getInputValue('transfer-account-number');
    const amount = getInputValueNumber('transfer-amount');
    const pin = getInputValueNumber('transfer-pin');
    const availableBalance = getInnerText('available-balance');

    if (accountNumber.length < 11) {
        alert('Please provide valid account number');
        return;
    }
    if (pin !== validPin) {
        alert('Please provide a valid pin number');
        return;
    }

    setInnerText(availableBalance - amount);
});

// Pay Bill
document.getElementById('bill-btn').addEventListener('click', function (e) {
    e.preventDefault();
    const accountNumber = getInputValue('bill-account-number');
    const amount = getInputValueNumber('bill-amount');
    const pin = getInputValueNumber('bill-pin');
    const availableBalance = getInnerText('available-balance');

    if (accountNumber.length < 11) {
        alert('Please provide valid account number');
        return;
    }
    if (pin !== validPin) {
        alert('Please provide a valid pin number');
        return;
    }

    setInnerText(availableBalance - amount);
});

// Get Bonus
document.getElementById('bonus-btn').addEventListener('click', function (e) {
    e.preventDefault();
    const code = getInputValue('bonus-code');
    if (code.length < 4) {
        alert('Please enter a valid bonus code');
        return;
    }
    const availableBalance = getInnerText('available-balance');
    setInnerText(availableBalance + 500);
    alert('Bonus added successfully!');
});

document.getElementById('transactions-button').addEventListener('click', function () {
    const transactionContainer = document.getElementById('transaction-container')
    transactionContainer.innerHTML = "" 
    for (const data of transactionData) {
        const div = document.createElement('div')
        div.innerHTML = `
            <div class="bg-white rounded-xl p-3 flex justify-between items-center">
                <div class="flex items-center">
                    <div class="p-3 rounded-full bg-[#f4f5f7]">
                        <img src="assets/wallet1.png" alt="">
                    </div>
                    <div class="ml-3">
                        <h1>${data.name}</h1>
                        <p>${data.date}</p>
                    </div>
                </div>
                <i class="fa-solid fa-ellipsis-vertical"></i>
            </div>
        `
        transactionContainer.appendChild(div)
    }
})


// Toggling Features
document.getElementById('add-button').addEventListener('click', function () {
    handleToggle('add-money-parent');
    handleButtonToggle('add-button');
});
document.getElementById('cash-out-button').addEventListener('click', function () {
    handleToggle('cash-out-parent');
    handleButtonToggle('cash-out-button');
});
document.getElementById('transfer-button').addEventListener('click', function () {
    handleToggle('transfer-money-parent');
    handleButtonToggle('transfer-button');
});
document.getElementById('get-bonus-button').addEventListener('click', function () {
    handleToggle('get-bonus-parent');
    handleButtonToggle('get-bonus-button');
});
document.getElementById('bill-button').addEventListener('click', function () {
    handleToggle('pay-bill-parent');
    handleButtonToggle('bill-button');
});
document.getElementById('transactions-button').addEventListener('click', function () {
    handleToggle('transactions-parent');
    handleButtonToggle('transactions-button');
});
