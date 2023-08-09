// Generar el DOM del carrito, incluyendo la acción de finalizar compra
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
    <div class="confirmacion-edad"><input id="confirmacionEdad" type="checkbox"></input>
    <label for="confirmacionEdad">Confirmo que soy mayor de 18 años</label></div>
    <div><button class="boton" onclick="finalizarCompra()">Finalizar compra</button></div>
           `;
  } else {
    document.getElementById("carritoTotal").innerHTML = `
    <div>No hay ítems en tu carrito.</div>
    <div><a href='index.html'>Ir al inicio</a></div>
           `;
  }
}

// Generar el DOM de un producto individual del carrito
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

// Inicialización
generarCarrito();
