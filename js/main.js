let btnViewPassword = document.getElementById('btn-view-password');
let inputPassword = document.getElementById('input-password');
let inputUser = document.getElementById('input-user');
let errorContainer = document.getElementById('form-message')


//Ver u ocultar contraseña
btnViewPassword.addEventListener('click', () => {
    if(inputPassword.attributes[2].value === 'password') {
        inputPassword.setAttribute('type', 'text');
        btnViewPassword.style.backgroundImage = 'url("../images/close-eye.png")';
    } else if(inputPassword.attributes[2].value === 'text') {
        inputPassword.setAttribute('type', 'password');
        btnViewPassword.style.backgroundImage = 'url("../images/eye.png")';
    }
})

//Validación administrador

inputUser.addEventListener('keypress', (e) => {
    if(e.keyCode === 13) {
        if(inputUser.value != '' && inputPassword.value != ''){
            validateAdmin()
        } else {
            inputPassword.focus()
        }
    }
})

inputPassword.addEventListener('keypress', (e) => {
    if(e.keyCode === 13) {
        if(inputUser.value != '' && inputPassword.value != ''){
            validateAdmin()
        } else {
            inputUser.focus()
        }
    }
})

btnViewPassword.addEventListener('click', () => validateAdmin())

const validateAdmin = () => {
    if (inputUser.value === 'admininicial' && inputPassword.value === '123456') {
        window.location.href = '../views/app.html'
    } else {
        errorContainer.style.display = 'block';
    }
}
