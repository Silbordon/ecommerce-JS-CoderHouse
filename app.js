
// let totalCarrito = 0;
// let productoElegido;
// let cantidadProductoElegido;
// let carritoLista = [];

// const calculoPorProducto = (cantidad, precio) => {
//   let valorProducto = cantidad * precio;
//   carritoLista.push(valorProducto)
//   alert("Debera abonar " + valorProducto + " por este producto");
// };

// const totalCarritoFunction = (arr) =>{
//   const total = arr.reduce(
//     (previousValue, currentValue) => previousValue + currentValue,0);
//   return total
// }


//desafio arrays y objetos
let products = [
  {
    id: 1,
    categorie: "woman",
    product: "Sweeter",
    color: "blue",
    price: 3500,
    stock: 20,
    url: "./img/bg-img/bg-2.jpg",
  },
  {
    id: 2,
    categorie: "woman",
    product: "Shoes",
    color: "blue",
    price: 6500,
    stock: 5,
    url: "./img/bg-img/bg-3.jpg",
  },
  {
    id: 3,
    categorie: "accesories",
    product: "Purse",
    color: "brown",
    price: 2500,
    stock: 17,
    url: "./img/bg-img/bg-4.jpg",
  },
  {
    id: 4,
    categorie: "woman",
    product: "Shoes",
    color: "yellow",
    price: 3400,
    stock: 8,
    url: "./img/bg-img/blog4.jpg",
  },
  {
    id: 5,
    categorie: "woman",
    product: "Accesories",
    color: "red",
    price: 3500,
    stock: 9,
    url: "./img/bg-img/blog3.jpg",
  },
  {
    id: 6,
    categorie: "woman",
    product: "Dress shorter",
    color: "multicolor",
    price: 2500,
    stock: 4,
    url: "./img/bg-img/blog6.jpg",
  },
  {
    id: 7,
    categorie: "woman",
    product: "Dress shorter",
    color: "multicolor",
    price: 2500,
    stock: 4,
    url: "./img/bg-img/blog6.jpg",
  },
  {
    id: 8,
    categorie: "accesories",
    product: "Purse and Mix",
    color: "white",
    price: 4600,
    stock: 1,
    url: "./img/bg-img/bg-6.jpg",
  },
  {
    id: 9,
    categorie: "woman",
    product: "T-shirt",
    color: "red",
    price: 1500,
    stock: 6,
    url: "./img/bg-img/bg-2.jpg",
  },
  {
    id: 10,
    categorie: "children",
    product: "T-shirt",
    color: "gray",
    price: 1000,
    stock: 2,
    url: "./img/images/cat-3.jpg",
  },
  {
    id: 11,
    categorie: "man",
    product: "Shoes",
    color: "light brown",
    price: 3900,
    stock: 4,
    url: "./img/images/cat-6.jpg",
  },
  {
    id: 12,
    categorie: "children",
    product: "Jacket",
    color: "blue",
    price: 1900,
    stock: 2,
    url: "./img/images/cat-6.jpg",
  },
  {
    id: 13,
    categorie: "accesories",
    product: "Purse Wolf",
    color: "gray",
    price: 5100,
    stock: 2,
    url: "./img/images/cat-5.jpg",
  },
  {
    id: 15,
    categorie: "woman",
    product: "T-shirt",
    color: "White",
    price: 3200,
    stock: 6,
    url: "./img/images/cat-2.jpg",
  },
];


//interaccion DOM mostrando todos los productos
const containerProducts = document.getElementById("container-products");
const banner = document.getElementById("container-banner");
let box = "";

//funcion elegir categoria desde navbar y pintar en el html
const chooseCategoriesProduct = (category) => {
  banner.classList.add("none");
  let productsCopy = [...products];
  let productFilter;
  console.log(category);

  if (
    category == "woman" ||
    category == "man" ||
    category == "accesories" ||
    category == "children"
  ) {
    productFilter = productsCopy.filter((item) => item.categorie == category);
    renderProduct(productFilter);
  } else {
    renderProduct(productsCopy);
  }
};

//funcion elegir datos de cada card segun el id
let productId = []
const chooseProductDetails = (id) =>{
productId = products.filter(prod => prod.id == id)
return productId
}


// const renderModal = (arr) =>{
// let box = ''
// arr.map(prod => box.innerHTML = `<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
// <div class="modal-dialog">
//   <div class="modal-content">
//     <div class="modal-header">
//       <h3 class="title-modal" id="exampleModalLabel">${prod.product} </h3>
//       <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
//     </div>

//     <div class="modal-body">  
//      <div class="container-modal">
//         <img src="./img/bg-img/bg-4.jpg" class="img-modal" alt="">
//         <div class="container-textModal">
//           <p class="price-modal">$${prod.price}</p>
//           <p class="description-modal">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate a at consequatur sapiente molestiae aperiam vel, rem ratione accusamus incidunt temporibus asperiores ab nulla eveniet. Inventore laudantium maiores deleniti eius!</p>
//           <div class="container-counter">
//           <Button class="btn-counter">+</Button>
//           <span class="counter">1</span>
//           <Button class="btn-counter">-</Button>
//         </div>
//       </div>
//     </div>

//     <div class="modal-footer">
//       <button type="button" class="btn-buy">Add to cart</button>
//     </div>
//   </div>
// </div>
// </div>
// </div>
// </div>` )
// }



const renderProduct = (arr) => {
  containerProducts.innerHTML = "";

  for (const prod of arr) {
    box = `
    <div class="card text-center col-lg-3 col-md-4 col-12">
    <img src=${prod.url} class="img-fluid mb-3 mt-3" alt=${prod.product} />
    <div class="card-body">
      <h5 class="card-title">${prod.product}</h5>
      <h4 class="card-text">${prod.price}$</h4>
      <button onclick="chooseProductDetails(${prod.id})" type="button" class="btn-buy" data-bs-toggle="modal" data-bs-target="#exampleModal">
      Buy Now
      </button>
    

      <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
<div class="modal-dialog">
  <div class="modal-content">
    <div class="modal-header">
      <h3 class="title-modal" id="exampleModalLabel"> </h3>
      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
    </div>

    <div class="modal-body">  
     <div class="container-modal">
        <img src="./img/bg-img/bg-4.jpg" class="img-modal" alt="">
        <div class="container-textModal">
          <p class="price-modal">$</p>
          <p class="description-modal">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate a at consequatur sapiente molestiae aperiam vel, rem ratione accusamus incidunt temporibus asperiores ab nulla eveniet. Inventore laudantium maiores deleniti eius!</p>
          <div class="container-counter">
          <Button class="btn-counter">+</Button>
          <span class="counter">1</span>
          <Button class="btn-counter">-</Button>
        </div>
      </div>
    </div>

    <div class="modal-footer">
      <button type="button" class="btn-buy">Add to cart</button>
    </div>
  </div>
</div>
</div>
</div>
</div> 
    `;
    containerProducts.innerHTML += box;
  }
};

window.addEventListener("onload", renderProduct(products));

