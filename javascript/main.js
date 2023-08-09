let carrito = [];

const productos = [
  {
    codigo: "a",
    imagen: "imagenes/cataNac.png",
    nombre: "Cata Nacional",
    precio: 5000,
  },
  {
    codigo: "b",
    imagen: "imagenes/cataImp.png",
    nombre: "Cata Importado",
    precio: 8000,
  },
  {
    codigo: "c",
    imagen: "imagenes/cataAutor.png",
    nombre: "Cata De autor",
    precio: 12000,
  },
  {
    codigo: "d",
    imagen: "imagenes/cataMix.png",
    nombre: "Cata Mix Premium",
    precio: 16000,
  },
  {
    codigo: "e",
    imagen: "imagenes/w1.png",
    nombre: "Whisky Habermas",
    precio: 16000,
  },
  {
    codigo: "f",
    imagen: "imagenes/w2.png",
    nombre: "Whisky Butler",
    precio: 7990,
  },
  {
    codigo: "g",
    imagen: "imagenes/w3.png",
    nombre: "Whisky Latour",
    precio: 14000,
  },
  {
    codigo: "h",
    imagen: "imagenes/w4.png",
    nombre: "Whisky Zizek",
    precio: 8562,
  },
  {
    codigo: "i",
    imagen: "imagenes/w5.png",
    nombre: "Whisky Nussbaum",
    precio: 18000,
  },
  {
    codigo: "j",
    imagen: "imagenes/w6.png",
    nombre: "Whisky Taylor",
    precio: 32000,
  },
  {
    codigo: "k",
    imagen: "imagenes/w7.png",
    nombre: "Whisky Badiou",
    precio: 45000,
  },
];

function actualizarCarrito() {
  document.getElementById(
    "carritoCantidad"
  ).innerHTML = `Tu carrito (${carrito.length})`;
}

function leerCarrito() {
  let carritoLocal = JSON.parse(localStorage.getItem("carrito"));
  if (carritoLocal) {
    carrito = carritoLocal;
    actualizarCarrito();
  }
}

function guardarCarrito() {
  let carritoJson = JSON.stringify(carrito);
  localStorage.setItem("carrito", carritoJson);
  actualizarCarrito();
}

function agregarCarrito(codigo, elemento) {
  let producto = buscarProductos(codigo);
  carrito.push(producto);
  guardarCarrito();
  elemento.innerHTML = "Agregado!";
}

function eliminarCarrito(codigo) {
  let producto = buscarCarrito(codigo);
  let indice = carrito.indexOf(producto);
  carrito.splice(indice, 1);
  guardarCarrito();
  generarCarrito();
}

function buscarProductos(codigo) {
  let resultado = productos.find(
    (producto) => producto.codigo === codigo.toLowerCase()
  );
  return resultado;
}

function buscarCarrito(codigo) {
  let resultado = carrito.find(
    (producto) => producto.codigo === codigo.toLowerCase()
  );
  return resultado;
}

function finalizarCompra() {
  carrito = [];
  guardarCarrito();
  generarCarrito();
  document.getElementById("carritoTotal").innerHTML =
    "Compra finalizada, gracias por elegirnos!" +
    "<div><a href='index.html'>Volver al inicio</a></div>";
}

leerCarrito();
