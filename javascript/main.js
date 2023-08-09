// Arrays conteniendo el carrito y el listado de productos
let carrito = [];
let productos = [];

// Actualizar la cantidad de items del carrito
function actualizarCarrito() {
  document.getElementById(
    "carritoCantidad"
  ).innerHTML = `Tu carrito (${carrito.length})`;
}

// Leer el array del carrito desde el localStorage
function leerCarrito() {
  let carritoLocal = JSON.parse(localStorage.getItem("carrito"));
  if (carritoLocal) {
    carrito = carritoLocal;
    actualizarCarrito();
  }
}

// Guardar el array del carrito en el localStorage
function guardarCarrito() {
  let carritoJson = JSON.stringify(carrito);
  localStorage.setItem("carrito", carritoJson);
  actualizarCarrito();
}

// Agregar un producto al carrito
function agregarCarrito(codigo, elemento) {
  let producto = buscarProductos(codigo);
  carrito.push(producto);
  guardarCarrito();
  elemento.innerHTML = "Agregado!";
  Swal.fire({
    position: "bottom-end",
    icon: "success",
    title: "Se agregó el ítem al carrito",
    showConfirmButton: false,
    timer: 1500,
  });
}

// Eliminar un producto del carrito
function eliminarCarrito(codigo) {
  let producto = buscarCarrito(codigo);
  let indice = carrito.indexOf(producto);
  carrito.splice(indice, 1);
  guardarCarrito();
  generarCarrito();
  Swal.fire({
    position: "bottom-end",
    icon: "info",
    title: "Se eliminó el ítem del carrito",
    showConfirmButton: false,
    timer: 1500,
  });
}

// Buscar un producto basado en el código
function buscarProductos(codigo) {
  let resultado = productos.find(
    (producto) => producto.codigo === codigo.toLowerCase()
  );
  return resultado;
}

// Buscar un ítem del carrito basado en el código
function buscarCarrito(codigo) {
  let resultado = carrito.find(
    (producto) => producto.codigo === codigo.toLowerCase()
  );
  return resultado;
}

// Finalizar la compra luego de validar la edad del usuario
function finalizarCompra() {
  if (!document.getElementById("confirmacionEdad").checked) {
    Swal.fire({
      icon: "error",
      title: "Debés ser mayor de edad para continuar.",
    });
    return;
  }
  document.getElementById("spinner").style.display = "block";
  setTimeout(() => {
    carrito = [];
    guardarCarrito();
    generarCarrito();
    Swal.fire({
      icon: "success",
      title: "Compra finalizada!",
    });
    document.getElementById("carritoTotal").innerHTML =
      "Gracias por elegirnos!" +
      "<div><a href='index.html'>Volver al inicio</a></div>";
    document.getElementById("spinner").style.display = "none";
  }, 1000);
}

// Inicialización
leerCarrito();
