let seleccion = prompt(
  "Buenos dias, desea realizar alguna compra. Responda SI o NO"
);

while (seleccion.toUpperCase() != "SI" && seleccion.toUpperCase() != "NO") {
  alert("Por favor ingrese SI o NO");
  seleccion = prompt(
    "Buenos dias, desea realizar alguna compra. Recuerde ingresar SI o NO"
  );
}

const calculoPorProducto = (cantidad, precio) => {
  let valorProducto = cantidad * precio;
  alert("Debera abonar " + valorProducto);
};

const agregarCarrito = () => {
  let productoElegido;
  let cantidadProductoElegido;
  let precio;
  alert(
    "A continuacion tendra oportunidad de agregar productos al carrito, cuando termine escriba ESC"
  );
  productoElegido = prompt(
    "Le pedimos ingrese el numero del producto que desea comprar o ESC para salir"
  );
  if (productoElegido.toUpperCase() !== "ESC") {
    cantidadProductoElegido = prompt(
      "Le pedimos ingrese la cantidad del producto que desea comprar"
    );
  } else {
    alert("Esperamos vuelva muy pronto");
  }

  switch (productoElegido) {
    case productoElegido:
      1;
      precio = 2500;
      calculoPorProducto(cantidadProductoElegido, precio);
      break;
    case productoElegido:
      2;
      precio = 3600;
      calculoPorProducto(cantidadProductoElegido, precio);
      break;
    case productoElegido:
      3;
      precio = 6500;
      calculoPorProducto(cantidadProductoElegido, precio);
      break;
    case productoElegido:
      4;
      precio = 4999;
      calculoPorProducto(cantidadProductoElegido, precio);
      break;
    default:
      break;
  }
};

if (seleccion.toUpperCase() === "SI") {
  agregarCarrito();
}
