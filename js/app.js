
const cartText = document.querySelector('#cartText');
const cartPlus = document.querySelectorAll('.agregarProducto');

let contadorProductos = 0;

function AgregarProducto() {
    contadorProductos++;
    cartText.innerHTML = contadorProductos + ' Productos';
}

cartPlus.forEach(carrito => {
    carrito.addEventListener('click', AgregarProducto);
});