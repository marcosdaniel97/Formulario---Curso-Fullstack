let inputemail = document.getElementById('email');
let button = document.getElementById('enviar');

button.addEventListener('click', (event) => {
    event.preventDefault();
    validateEmail(inputemail.value);
})

function validateEmail(email) {
    let expReg = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g;
    if (expReg.test(email) == true) {
        inputemail.style.border = '1px solid hsl(223, 87%, 63%)';
        error.style.visibility = 'hidden';
    } else {
        inputemail.style.border = '1px solid red';
        error.style.visibility = 'visible';
    }
}



