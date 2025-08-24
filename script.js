document.getElementById('loginButton').addEventListener('click', function(e){ 
    e.preventDefault()
    const mobileNUmber = 12345678910
    const pinNumber = 1234
    
    const mobileNUmberValue = document.getElementById('mobile-number').value
    const mobileNUmberValueConverted = parseInt(mobileNUmberValue)

    const pinNumberValue = document.getElementById('pin-number').value
    const pinNumberConverted = parseInt(pinNumberValue)

    console.log(mobileNUmberValueConverted, pinNumberConverted)

    if(mobileNUmberValueConverted === mobileNUmber && pinNumberConverted === pinNumber){
        window.location.href="./home.html"
    }
    else{
        alert('Invalid Credentials')
    }
})