// Generar el DOM del catalogo de productos
function generarCatalogo() {
  if (!document.getElementById("catalogo")) return;
  document.getElementById("catalogo").innerHTML = "";
  productos.forEach((producto) => {
    let html = generarProductoHtml(producto);
    document.getElementById("catalogo").innerHTML += html;
  });
}

// Generar el DOM de un producto individual
function generarProductoHtml(producto) {
  return `
  <div class="lista-item">
    <div class="imagen"><img src="${producto.imagen}" /></div>
    <div><p>${producto.nombre}</p></div>
    <div><p>$ ${producto.precio}</p></div>
    <div><button onclick="agregarCarrito('${producto.codigo}', this)">Agregar al carrito</button></div>
  </div>
         `;
}

// Leer el listado de productos a partir del endpoint de mockAPI
function leerProductos() {
  let url = "https://64d4170467b2662bf3dcfac7.mockapi.io/productos";
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      productos.push(...data);
      generarCatalogo();
    })
    .catch((error) => {
      Swal.fire({
        icon: "error",
        text: "Error cargando productos: " + error,
      });
    });
}

// Inicialización
leerProductos();
