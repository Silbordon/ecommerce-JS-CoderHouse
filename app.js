// let seleccion = prompt(
//   "Buenos dias, desea realizar alguna compra. Responda SI o NO"
// );

// while (seleccion.toUpperCase() != "SI" && seleccion.toUpperCase() != "NO") {
//   alert("Por favor ingrese SI o NO");
//   seleccion = prompt(
//     "Buenos dias, desea realizar alguna compra. Recuerde ingresar SI o NO"
//   );
// }

// const calculoPorProducto = (cantidad, precio) => {
//   let valorProducto = cantidad * precio;
//   alert("Debera abonar " + valorProducto);
// };

// const agregarCarrito = () => {
//   let productoElegido;
//   let cantidadProductoElegido;
//   let precio;
//   alert(
//     "A continuacion tendra oportunidad de agregar productos al carrito, cuando termine escriba ESC"
//   );
//   productoElegido = prompt(
//     "Le pedimos ingrese el numero del producto que desea comprar o ESC para salir"
//   );
//   if (productoElegido.toUpperCase() !== "ESC") {
//     cantidadProductoElegido = prompt(
//       "Le pedimos ingrese la cantidad del producto que desea comprar"
//     );
//   } else {
//     alert("Esperamos vuelva muy pronto");
//   }

//   switch (productoElegido) {
//     case productoElegido:
//       1;
//       precio = 2500;
//       calculoPorProducto(cantidadProductoElegido, precio);
//       break;
//     case productoElegido:
//       2;
//       precio = 3600;
//       calculoPorProducto(cantidadProductoElegido, precio);
//       break;
//     case productoElegido:
//       3;
//       precio = 6500;
//       calculoPorProducto(cantidadProductoElegido, precio);
//       break;
//     case productoElegido:
//       4;
//       precio = 4999;
//       calculoPorProducto(cantidadProductoElegido, precio);
//       break;
//     default:
//       break;
//   }
// };

// if (seleccion.toUpperCase() === "SI") {
//   agregarCarrito();
// }


//desafio arrays y objetos
const products = [
  {
    categorie : "woman",
    product : "jeans",
    color : "blue",
    price: 4500,
    stock : 20,
    url: ""
  },
  {
    categorie : "man",
    product : "jeans",
    color : "blue",
    price: 6500,
    stock : 5,
    url: ""
  },
  {
    categorie : "woman",
    product : "jeans",
    color : "dark",
    price: 7500,
    stock : 17,
    url: ""
  },
  {
    categorie : "children",
    product : "jeans",
    color : "yellow",
    price: 3400,
    stock : 8,
    url: ""
  },
  {
    categorie : "woman",
    product : "jeans",
    color : "gray",
    price: 3500,
    stock : 9,
    url: ""
  },
  {
    categorie : "woman",
    product : "jeans",
    color : "blue",
    price: 6500,
    stock : 4,
    url: ""
  }
]


//choosing category according to user choice
let chooseCategoriesProduct = (products, categorie) =>{
 const newChoose = products.filter(prod =>prod.categorie === categorie)
 console.log(newChoose)
 if(newChoose.length >0){
   alert("Si hay productos en la categoria de " + categorie)
 } else{
   alert("la categoria " + categorie + " no existe")
 }
 return newChoose
}

chooseCategoriesProduct(products, "woman")
chooseCategoriesProduct(products, "boys")

let shoppingCart = [];
let addProduct = (productsChoose , newProduct ) =>{
 productsChoose.push(newProduct)
 return productsChoose
}

//add product en shopping cart
addProduct(shoppingCart, {
  categorie : "woman",
  product : "jeans",
  color : "blue",
  price: 6500,
  stock : 4,
  url: ""
})
console.log(shoppingCart)