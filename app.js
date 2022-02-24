document.addEventListener('DOMContentLoaded', () => {

    x = fetch('https://ipapi.co/country_calling_code')
    .then(response => response.text())
    .then(data => document.querySelector("#countryCode").value = data.substring(1))


    document.querySelector("#sendButton").addEventListener('click', () => {
        countryCode = document.querySelector('#countryCode').value
        telNum = document.querySelector('#telNum').value
        message = document.querySelector('#message').value
        
        window.location.href = "http://wa.me/" + countryCode + telNum + "?text=" +encodeURI(message)
    })
})
