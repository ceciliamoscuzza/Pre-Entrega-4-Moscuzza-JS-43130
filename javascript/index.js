function generarCatalogo() {
  if (!document.getElementById("catalogo")) return;
  document.getElementById("catalogo").innerHTML = "";
  productos.forEach((producto) => {
    let html = generarProductoHtml(producto);
    document.getElementById("catalogo").innerHTML += html;
  });
}

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

generarCatalogo();
