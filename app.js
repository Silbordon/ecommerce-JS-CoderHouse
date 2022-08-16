let seleccion = prompt(
  "Buenos dias, desea realizar alguna compra. Responda SI para continuar o presione CANCEL para salir"
);

while (seleccion.toUpperCase() != "SI") {
  alert("Por favor ingrese SI para continuar");
  seleccion = prompt(
    "Buenos dias, desea realizar alguna compra. Recuerde ingresar SI o NO"
  );
}

let totalCarrito = 0;
let productoElegido;
let cantidadProductoElegido;
let carritoLista = [];

const calculoPorProducto = (cantidad, precio) => {
  let valorProducto = cantidad * precio;
  carritoLista.push(valorProducto)
  alert("Debera abonar " + valorProducto + " por este producto");
};

const totalCarritoFunction = (arr) =>{
  const total = arr.reduce(
    (previousValue, currentValue) => previousValue + currentValue,0);
  return total
}

const agregarCarrito = () => {
  alert(
    "A continuacion tendra oportunidad de agregar productos al carrito, cuando termine escriba ESC"
  );
  productoElegido = prompt(
    "A continuacion tendra oportunidad de agregar productos al carrito, cuando termine escriba ESC, \n 1- jeans $4000 \n 2- sweeter $3600 \n 3- Camisa $1500 \n 4-Cinto $1100"
  );
    
  if (productoElegido.toUpperCase() !== "ESC") {
    cantidadProductoElegido = parseInt(prompt(
      "Le pedimos ingrese la cantidad del producto que desea comprar"
    ));
    chooseProduct(productoElegido,cantidadProductoElegido)
  }
  if(productoElegido == "ESC" || productoElegido == "esc"){
    totalCarrito = totalCarritoFunction(carritoLista)
    console.log(totalCarrito)
    if(totalCarrito>0){
      alert("El total de su compra es " + totalCarrito)
    }
  } 
}
 
const chooseProduct = (productoElegido, cantidadProductoElegido) =>{
  switch (productoElegido) {
    case "1":
      precio = 4000;
      return valueProd = calculoPorProducto(cantidadProductoElegido, precio); 
    case "2":
      precio = 3600;
      return valueProd =calculoPorProducto(cantidadProductoElegido, precio); 
    case "3":
      precio = 1500;
      return valueProd =calculoPorProducto(cantidadProductoElegido, precio);
    case "4":
      precio = 1100;
      return valueProd =calculoPorProducto(cantidadProductoElegido, precio); 
    default:
      break;
  }
};
 
  do {
    agregarCarrito()
  } while (productoElegido.toUpperCase() != "ESC" && seleccion.toUpperCase() == "SI");


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

// add product en shopping cart
addProduct(shoppingCart, {
  categorie : "woman",
  product : "jeans",
  color : "blue",
  price: 6500,
  stock : 4,
  url: ""
})
console.log(shoppingCart)