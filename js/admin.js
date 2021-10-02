//ALTERNAR MODO OSCURO
const BODY = document.body
const THEME_SWITCH = document.getElementById("theme-switch")
THEME_SWITCH.addEventListener("click", () => {
    BODY.classList.toggle("light-theme")
})

const BTN_HOME = document.getElementById("btn-home")
const BTN_USER = document.getElementById("btn-users")
const BTN_CUSTOMER = document.getElementById("btn-customers")
const BTN_SUPPLIER = document.getElementById("btn-suppliers")
const BTN_PRODUCT = document.getElementById("btn-products")
const BTN_SALE = document.getElementById("btn-sales")
const BTN_REPORT = document.getElementById("btn-reports")
const BUTTONS = document.getElementsByClassName('btn-admin')

const INPUT_1 = document.getElementById("input-data-1")
const INPUT_2 = document.getElementById("input-data-2")
const INPUT_3 = document.getElementById("input-data-3")
const INPUT_4 = document.getElementById("input-data-4")
const INPUT_5 = document.getElementById("input-data-5")

const SPAN_1 = document.getElementById("span-data-1")
const SPAN_2 = document.getElementById("span-data-2")
const SPAN_3 = document.getElementById("span-data-3")
const SPAN_4 = document.getElementById("span-data-4")
const SPAN_5 = document.getElementById("span-data-5")

const INPUT_CONTAINER = document.getElementById("input-group-section")
const FILE_CONTAINER = document.getElementById("file-section")
const FORM_PEOPLE = document.getElementById("form-people")
const MESSAGE_CONTAINER = document.getElementById("message-section")
const CRUD_SECTION = document.getElementById("crud-section")

const WELCOME_MSG = document.getElementById("welcome-message")
const TITLE_SECTION = document.getElementById("title-section")

//Página de bienvenida
const WELCOME_IMG = document.getElementById("welcome-img")
const RANDOM_NUM = (min, max) => {
    let num = Math.random()*(max-min) + min
    return Math.floor(num)
}
WELCOME_IMG.setAttribute('src', `../images/${RANDOM_NUM(1, 8)}.png`)
BTN_HOME.classList.add('white')

const changeColorBtn = (btn) => {
    for (let i = 0; i < BUTTONS.length; i++) {
        BUTTONS[i].classList.remove('white')
    }
    btn.classList.add('white')
}

///CERRAR MENSAJES con Boton
let btnCloseMessage = document.getElementsByClassName('close-message')
let messages = document.getElementsByClassName('message')
for(let i = 0; i < messages.length; i++) {
    btnCloseMessage[i].addEventListener('click', () => {
        messages[i].style.display = 'none'
    })
}

//limpiar mensajes principales
const CLEAR_MSG = () => {
    for(let i = 0; i < messages.length; i++) {
        messages[i].style.display = 'none'
    }
}
//si hace click en buscar mostrar solo input id
//mostrar contenedor principal
//cambiar spans-variables
//mostrar inputs con info si hace click en una fila.
//mostrar inputs sin ifo si agrega uno nuevo
//mostrar siempre crud

function SHOW_HOME() {
    CLEAR_MSG()
    changeColorBtn(BTN_HOME)
    WELCOME_IMG.setAttribute('src', `../images/${RANDOM_NUM(1, 8)}.png`)
    WELCOME_MSG.style.display = 'flex'
}
function HIDE_HOME() {
    WELCOME_MSG.style.display = 'none'
}
function SHOW_FORM() {
    FORM_PEOPLE.style.display ="flex"
}
function HIDE_FORM() {
    FORM_PEOPLE.style.display = 'none'
}
function SHOW_FILE() {
    FILE_CONTAINER.style.display = "flex"
}
function HIDE_FILE() {
    FILE_CONTAINER.style.display = "none"
}
function SHOW_INPUTS() {
    INPUT_CONTAINER.style.display ="flex"
}
function HIDE_INPUTS() {
    INPUT_CONTAINER.style.display ="none"
}

function CHANGE_DATA_USER() {
    SPAN_1.innerHTML = "Cédula"
    SPAN_2.innerHTML = "Nombre Completo"
    SPAN_3.innerHTML = "Correo Electrónico"
    SPAN_4.innerHTML = "Usuario"
    SPAN_5.innerHTML = "Contraseña"
}
function CHANGE_DATA_CUSTOMER() {
    SPAN_1.innerHTML = "Cédula";
    SPAN_2.innerHTML = "Nombre Completo";
    SPAN_3.innerHTML = "Dirección";
    SPAN_4.innerHTML = "Teléfono";
    SPAN_5.innerHTML = "Correo Electrónico";
}
function CHANGE_DATA_SUPPLIER() {
    SPAN_1.innerHTML = "NIT"
    SPAN_2.innerHTML = "Nombre Proveedor"
    SPAN_3.innerHTML = "Dirección"
    SPAN_4.innerHTML = "Teléfono"
    SPAN_5.innerHTML = "Ciudad"
}

//CAMBIO DE SECCIONES
BTN_HOME.addEventListener('click', () => {
    if(BTN_HOME.className.includes('white')) {
        alert('Ya te encuentras en la sección de inicio.')
    } else {
        HIDE_FORM()
        SHOW_HOME()
    }
})

BTN_USER.addEventListener('click', () => {
    if(BTN_USER.className.includes('white')) {
        alert('Ya te encuentras en la sección de usuario.')
    } else {
        HIDE_HOME()
        CLEAR_MSG()
        HIDE_FILE()
        changeColorBtn(BTN_USER)
        CHANGE_DATA_USER()
        TITLE_SECTION.innerHTML = "Usuarios"
        SHOW_INPUTS()
        SHOW_FORM()
    }
})

BTN_CUSTOMER.addEventListener('click', () => {
    if(BTN_CUSTOMER.className.includes('white')) {
        alert('Ya te encuentras en la sección de clientes.')
    } else {
        HIDE_HOME()
        CLEAR_MSG()
        HIDE_FILE()
        changeColorBtn(BTN_CUSTOMER)
        CHANGE_DATA_CUSTOMER()
        TITLE_SECTION.innerHTML = "Clientes"
        SHOW_INPUTS()
        SHOW_FORM()
    }
})
BTN_SUPPLIER.addEventListener('click', () => {
    if(BTN_SUPPLIER.className.includes('white')) {
        alert('Ya te encuentras en la sección de provedores.')
    } else {
        HIDE_HOME()
        CLEAR_MSG()
        HIDE_FILE()
        changeColorBtn(BTN_SUPPLIER)
        CHANGE_DATA_SUPPLIER()
        TITLE_SECTION.innerHTML = "Proveedores"
        SHOW_INPUTS()
        SHOW_FORM()
    }
})
BTN_PRODUCT.addEventListener('click', () => {
    if(BTN_PRODUCT.className.includes('white')) {
        alert('Ya te encuentras en la sección de productos.')
    } else {
        HIDE_HOME()
        CLEAR_MSG()
        HIDE_INPUTS()
        changeColorBtn(BTN_PRODUCT)
        TITLE_SECTION.innerHTML = "Productos"
        SHOW_FILE()
        SHOW_FORM()
    }
})
BTN_SALE.addEventListener('click', () => {
    if(BTN_SALE.className.includes('white')) {
        alert('Ya te encuentras en la sección de ventas.')
    } else {
        HIDE_HOME()
        CLEAR_MSG()
        HIDE_INPUTS()
        changeColorBtn(BTN_SALE)
        TITLE_SECTION.innerHTML = "Ventas"
        HIDE_FILE()
        HIDE_FORM()
        alert('Servicio en construcción')
    }
})
BTN_REPORT.addEventListener('click', () => {
    if(BTN_REPORT.className.includes('white')) {
        alert('Ya te encuentras en la sección de reportes.')
    } else {
        HIDE_HOME()
        CLEAR_MSG()
        HIDE_INPUTS()
        changeColorBtn(BTN_REPORT)
        TITLE_SECTION.innerHTML = "Reportes"
        HIDE_FILE()
        HIDE_FORM()
        alert('Servicio en construcción')
    }
})

