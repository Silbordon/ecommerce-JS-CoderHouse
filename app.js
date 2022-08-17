
let seleccion = prompt(
  "Buenos dias, desea realizar alguna compra. Responda SI para continuar o presione CANCEL para salir"
);

while (seleccion.toUpperCase() != "SI") {
  alert("Por favor ingrese SI para continuar");
  seleccion = prompt(
    "Buenos dias, desea realizar alguna compra. Recuerde ingresar SI para continuar"
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
    id:1,
    categorie : "woman",
    product : "Sweeter",
    color : "blue",
    price: 3500,
    stock : 20,
    url: './img/bg-img/bg-2.jpg'
  },
  {
    id:2,
    categorie : "woman",
    product : "Shoes",
    color : "blue",
    price: 6500,
    stock : 5,
    url: './img/bg-img/bg-3.jpg'
  },
  {
    id:3,
    categorie : "woman",
    product : "Accesories",
    color : "brown",
    price: 2500,
    stock : 17,
    url: './img/bg-img/bg-4.jpg'
  },
  {
    id:4,
    categorie : "woman",
    product : "Shoes",
    color : "yellow",
    price: 3400,
    stock : 8,
    url: './img/bg-img/blog4.jpg'
  },
  {
    id:5,
    categorie : "woman",
    product : "Accesories",
    color : "red",
    price: 3500,
    stock : 9,
    url: './img/bg-img/blog3.jpg'
  },
  {
    id:6,
    categorie : "woman",
    product : "Dress shorter",
    color : "multicolor",
    price: 2500,
    stock : 4,
    url:'./img/bg-img/blog6.jpg'
  },
  {
    id:7,
    categorie : "woman",
    product : "Dress shorter",
    color : "multicolor",
    price: 2500,
    stock : 4,
    url:'./img/bg-img/blog6.jpg'
  },
  {
    id:8,
    categorie : "woman",
    product : "Dress shorter",
    color : "multicolor",
    price: 2500,
    stock : 4,
    url:'./img/bg-img/blog6.jpg'
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


//interaccion DOM mostrando todos los productos
const  containerProducts = document.getElementById('container-products')
let box;

for (const prod of products) {
  box = `
  <div class="card text-center col-lg-3 col-md-4 col-12">
  <img src=${prod.url} class="img-fluid mb-3 mt-3" alt=${prod.product} />
  <div class="card-body">
    <h5 class="card-title">${prod.product}</h5>
    <h4 class="card-text">${prod.price}$</h4>
    <button class="btn-buy">Buy Now</button>
  </div>
</div>
  `
  containerProducts.innerHTML += box
}
