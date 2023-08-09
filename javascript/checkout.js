function generarCarrito() {
  if (!document.getElementById("carrito")) return;
  document.getElementById("carrito").innerHTML = "";
  document.getElementById("carritoTotal").innerHTML = "";
  carrito.forEach((producto) => {
    let html = generarCarritoHtml(producto);
    document.getElementById("carrito").innerHTML += html;
  });
  if (carrito.length > 0) {
    const cata = new Compra(carrito);
    document.getElementById("carritoTotal").innerHTML = `
    <div>Tu experiencia suma un total de: $ ${cata.obtenerSubtotal()}</div>
    <div><button class="boton" onclick="finalizarCompra()">Finalizar compra</button></div>
           `;
  }
}

function generarCarritoHtml(producto) {
  return `
  <div class="lista-item">
    <div class="imagen"><img src="${producto.imagen}" /></div>
    <div><p>${producto.nombre}</p></div>
    <div><p>$ ${producto.precio}</p></div>
    <div><button onclick="eliminarCarrito('${producto.codigo}')">Eliminar del carrito</button></div>
  </div>
         `;
}

generarCarrito();
