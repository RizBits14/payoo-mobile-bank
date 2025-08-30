const validPin = 1234

function getInputValueNumber (id){
    const inputField = document.getElementById(id)
    const inputFieldValue = inputField.value
    const inputFieldValueNumber = parseInt(inputFieldValue)
    return inputFieldValueNumber
}

function getInputValue(id){
    const inputField = document.getElementById(id)
    const inputFieldValue = inputField.value
    return inputFieldValue
}

function getInnerText(id){
    const element = document.getElementById(id)
    const elementValue = element.innerText
    const elementValueNumber = parseInt(elementValue)
    return elementValueNumber
}

function setInnerText(value){
    const availableBalanceElement = document.getElementById('available-balance')
    availableBalanceElement.innerText = value
}

function handleToggle(id){
    const forms = document.getElementsByClassName('form')
   for (const form of forms){
    form.style.display='none'
   }
   document.getElementById(id).style.display = 'block'
}

// Add Money Feature
document.getElementById('add-money-btn').addEventListener('click', function(e){ 
    e.preventDefault()
    const bank = getInputValue('bank')
    
    const accountNumber = document.getElementById('account-number').value
    
    const amount = getInputValueNumber('add-amount')
    
    const pin = getInputValueNumber('add-pin')

    const availableBalance = getInnerText('available-balance')

    if(accountNumber.length < 11){
        alert('Please provide valid account number')
        return
    }

    if (pin !== validPin){
        alert('Please provide a valid pin number')
        return
    }

    const totalNewAvailableBalance = amount + availableBalance

    setInnerText(totalNewAvailableBalance)
})

// Cash Out Money Feature
document.getElementById('withdraw-btn').addEventListener('click', function(e){ 
    e.preventDefault()

    const agentNumber = document.getElementById('agent-number').value

    const amount = getInputValueNumber('withdraw-amount')

    const cashOutPin = parseInt(document.getElementById('cash-out-pin').value)

    const availableBalance = getInnerText('available-balance')

    if(agentNumber.length < 11){
        alert('Please proivde a valid agent number')
        return
    }

    if(cashOutPin != validPin){
        alert('Please provide a valid pin number')
        return
    }

    const totalNewAvailableBalance = availableBalance - amount

    setInnerText(totalNewAvailableBalance)
    
})

// Toggling Features
document.getElementById('add-button').addEventListener('click', function(e){ 
   handleToggle('add-money-parent')
})
document.getElementById('cash-out-button').addEventListener('click', function(){ 
    handleToggle('cash-out-parent')
})
document.getElementById('transfer-button').addEventListener('click', function(){ 
   handleToggle('transfer-money-parent')
})
document.getElementById('get-bonus-button').addEventListener('click', function(){ 
   handleToggle('get-bonus-parent')
})