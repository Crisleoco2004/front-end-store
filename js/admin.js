//Variables alternar modo oscuro
const BODY = document.body;
const THEME_SWITCH = document.getElementById("theme-switch");

//Botones cambiar seccion
const BTN_USER = document.getElementById("btn-users");
const BTN_CUSTOMER = document.getElementById("btn-customers");
const BTN_SUPPLIER = document.getElementById("btn-suppliers");
const BTN_PRODUCT = document.getElementById("btn-products");
const BTN_SALE = document.getElementById("btn-sales");
const BTN_REPORT = document.getElementById("btn-reports");

//Inputs primeras 3 secciones
const INPUT_1 = document.getElementById("input-data-1");
const INPUT_2 = document.getElementById("input-data-2");
const INPUT_3 = document.getElementById("input-data-3");
const INPUT_4 = document.getElementById("input-data-4");
const INPUT_5 = document.getElementById("input-data-5");

//TEXTO DE LOS INPUTS
const SPAN_1 = document.getElementById("span-data-1");
const SPAN_2 = document.getElementById("span-data-2");
const SPAN_3 = document.getElementById("span-data-3");
const SPAN_4 = document.getElementById("span-data-4");
const SPAN_5 = document.getElementById("span-data-5");

//CONTENEDORES
const INPUT_CONTAINER = document.getElementById("input-group-section");
const FILE_CONTAINER = document.getElementById("file-section");
const FORM_PEOPLE = document.getElementById("form-people")


//CAMBIO DE TEXTO EN LOS INPUTS
BTN_USER.addEventListener('click', () => {
    //limpiar mensajes principales
    //si hace click en buscar mostrar solo input id
    //mostrar contenedor principal
    //cambiar spans-variables
    //mostrar inputs con info si hace click en una fila.
    //mostrar inputs sin ifo si agrega uno nuevo
    //mostrar siempre crud
    SPAN_1.innerHTML = "Cédula";
    SPAN_2.innerHTML = "Nombre Completo";
    SPAN_3.innerHTML = "Correo Electrónico";
    SPAN_4.innerHTML = "Usuario";
    SPAN_5.innerHTML = "Contraseña";
    INPUT_CONTAINER.style.display ="flex";
    FORM_PEOPLE.style.display ="flex";
    FILE_CONTAINER.style.display = "none";
})
BTN_CUSTOMER.addEventListener('click', () => {
    SPAN_1.innerHTML = "Cédula";
    SPAN_2.innerHTML = "Nombre Completo";
    SPAN_3.innerHTML = "Dirección";
    SPAN_4.innerHTML = "Teléfono";
    SPAN_5.innerHTML = "Correo Electrónico";
    INPUT_CONTAINER.style.display ="flex";
    FILE_CONTAINER.style.display = "none";
})
BTN_SUPPLIER.addEventListener('click', () => {
    SPAN_1.innerHTML = "NIT";
    SPAN_2.innerHTML = "Nombre Proveedor";
    SPAN_3.innerHTML = "Dirección";
    SPAN_4.innerHTML = "Teléfono";
    SPAN_5.innerHTML = "Ciudad";
    INPUT_CONTAINER.style.display ="flex";
    FILE_CONTAINER.style.display = "none";
})
BTN_PRODUCT.addEventListener('click', () => {
    INPUT_CONTAINER.style.display ="none";
    FILE_CONTAINER.style.display = "flex";

})
BTN_SALE.addEventListener('click', () => {
    INPUT_CONTAINER.style.display ="none";
    FILE_CONTAINER.style.display = "flex";
})
BTN_REPORT.addEventListener('click', () => {
    INPUT_CONTAINER.style.display ="none";
    FILE_CONTAINER.style.display = "flex";
})

//ALTERNAR MODO OSCURO
THEME_SWITCH.addEventListener("click", () => {
    BODY.classList.toggle("light-theme");
})
