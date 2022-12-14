//interaccion DOM mostrando todos los productos
const sectionProducts = document.getElementById("section-products"); //section products
const containerProducts = document.getElementById("container-products"); //div de products
const banner = document.getElementById("container-banner"); // banner
const containerProductDetails = document.getElementById(
  "container-product-details"
); // div de details products
const btnCart = document.getElementById("btn-cart"); //btn de carrito en navbar
const sectionCart = document.getElementById("section-cart"); //section de carrito
const totalCart = document.getElementById("total-cart"); // p del total del carrito
const btnEmptyCart = document.getElementById("btn-emptyCart"); // btn vaciar carrito
const spanCartAmount = document.getElementById("span-cartAmount"); //span de cantidad de item en el carrito
const containerItemsLi = document.getElementById("container-items-li"); //ul de container de items en carrito
const deleteIcon = document.getElementById("delete-icon"); //icono delete item del carrito
const confirmPurchase = document.getElementById("btn-confirmPurchase"); // btn confirmar compra

let box = "";
let cartArray = [];
let counter = 1;
let data = [];

//funcion contador
const sumar = () => {
  counter = parseInt(document.getElementById("number").innerHTML) + 1;
  document.getElementById("number").innerHTML = counter;
  return counter;
};

const restar = () => {
  if (counter == 0) return; // validamos que el valor no sea menor a 0
  counter = parseInt(document.getElementById("number").innerHTML) - 1;
  document.getElementById("number").innerHTML = counter;
  return counter;
};

//funcion volver a home desde details
const handlerHome = () => {
  banner.classList.remove("none");
  sectionProducts.classList.remove("none");
  containerProductDetails.classList.add("none");
  sectionCart.classList.add("none");
  fetch("data.json")
    .then((res) => res.json())
    .then((json) => {
      console.log(json);
      renderProduct(json);
    })
    .catch((e) => console.log(e));
};

//funcion agregar productos al array
const handlerAdd = (price, co, id) => {
  swal({
    title: "Great!! We added the product in your cart :)",
    className: "swal-add",
  });
  fetch("data.json")
    .then((res) => res.json())
    .then((json) => {
      let productId = json.filter((prod) => prod.id == id);
      let title = productId[0].product;
      co = parseInt(document.getElementById("number").innerHTML);
      let newProductAdd = {
        id: id,
        price: price,
        co: co,
        title: title,
      };
      data = JSON.parse(localStorage.getItem("cartArray"));
      if (data) {
        cartArray = [...data, newProductAdd];
        data = localStorage.setItem("cartArray", JSON.stringify(cartArray));
        addAmountSpanNavbar();
        banner.classList.remove("none");
        sectionProducts.classList.remove("none");
        containerProductDetails.classList.add("none");
        sectionCart.classList.add("none");
      } else {
        cartArray.push(newProductAdd);
        data = localStorage.setItem("cartArray", JSON.stringify(cartArray));
        addAmountSpanNavbar();
        banner.classList.remove("none");
        sectionProducts.classList.remove("none");
        containerProductDetails.classList.add("none");
        sectionCart.classList.add("none");
      }
    })
    .catch((e) => console.log(e));
};

//Agregar cantidad de items al span del navbar
const addAmountSpanNavbar = () => {
  data = JSON.parse(localStorage.getItem("cartArray"));
  if (data) {
    let amounts = data.map((el) => el.co);
    const total = amounts.reduce(
      (previousValue, currentValue) => previousValue + currentValue,
      0
    );
    spanCartAmount.innerHTML = total;
  } else {
    spanCartAmount.innerHTML = 0;
  }
};

//funcion elegir categoria desde navbar y pintar en el html
const chooseCategoriesProduct = (category) => {
  sectionProducts.classList.remove("none");
  banner.classList.add("none");
  sectionCart.classList.add("none");
  fetch("data.json")
    .then((res) => res.json())
    .then((json) => {
      let productsCopy = [...json];
      let productFilter;
      if (
        category == "woman" ||
        category == "man" ||
        category == "accesories" ||
        category == "children"
      ) {
        productFilter = productsCopy.filter(
          (item) => item.categorie == category
        );
        console.log(productFilter);
        renderProduct(productFilter);
      } else {
        renderProduct(productsCopy);
      }
    })
    .catch((e) => console.log(e));
};

//funcion elegir datos de cada card segun el id
let productId = [];
const chooseProductDetails = (id) => {
  addAmountSpanNavbar();
  counter = 1;
  banner.classList.add("none");
  sectionProducts.classList.add("none");
  sectionCart.classList.add("none");
  containerProductDetails.classList.remove("none");

  fetch("data.json")
    .then((res) => res.json())
    .then((json) => {
      productId = json.filter((prod) => prod.id == id);
      let { price, product, url } = productId[0];
      console.log(product);
      containerProductDetails.innerHTML = `
    <div class="card container-modal" style="width:700px;">
    <div class="row g-0">
      <div class="col-md-6">
        <img src=${url} class="img-fluid img-modal rounded-start" alt="...">
      </div>
      <div class="col-md-5 text-modal">
        <div class="card-body">
          <h5 class="card-title title-modal">${product}</h5>
          <p class="price-modal">$${price}</p>
          <p class="description-modal">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate a at consequatur sapiente molestiae aperiam vel, rem ratione accusamus incidunt temporibus asperiores ab nulla eveniet. Inventore laudantium maiores deleniti eius!</p>
          <div class="container-counter">
            <Button onclick="sumar()" class="btn-counter">+</Button>
            <span id="number" class="counter">${counter}</span>
            <Button onclick="restar()" class="btn-counter">-</Button>
          </div>
          </div>
        </div>
      </div>
      <div class="container-btn">
      <button onclick="handlerAdd(${price}, ${counter}, ${id})" type="button" class="btn-buy">Add to cart</button>
      <button onclick="handlerHome()" type="button" class="btn-buy">Return Home</button>
   </div>
    </div>
  </div>`;
    })
    .catch((e) => console.log(e));
};

//funcion para pintar en el html todas las cards de procucts
const renderProduct = (arr) => {
  console.log(arr);
  containerProducts.innerHTML = "";
  sectionCart.classList.add("none");
  addAmountSpanNavbar();
  for (const prod of arr) {
    box = `
    <div class="card text-center col-lg-3 col-md-4 col-12">
    <img src=${prod.url} class="img-fluid mb-3 mt-3" alt=${prod.product} />
    <div class="card-body">
      <h5 class="card-title">${prod.product}</h5>
      <h4 class="card-text">${prod.price}$</h4>
      <button onclick="chooseProductDetails(${prod.id})" type="button" class="btn-buy">
      Buy Now
      </button>`;
    containerProducts.innerHTML += box;
  }
};

//CART
//funcion calcular total carrito de compras segun el array de productos
const totalCarritoFunction = () => {
  data = JSON.parse(localStorage.getItem("cartArray"));
  totalCart.innerHTML = "";
  const items = data.map((el) => el.price * el.co);
  const total = items.reduce(
    (previousValue, currentValue) => previousValue + currentValue,
    0
  );
  totalCart.innerHTML = total;
};

//Funcion delete items del carrito de compra
const deleteItems = (id) => {
  data = JSON.parse(localStorage.getItem("cartArray"));
  if (data.length === 1) {
    const newArrayCart = data.filter((prod) => prod.id != id);
    localStorage.setItem("cartArray", JSON.stringify(newArrayCart));
    addAmountSpanNavbar();
    sectionCart.innerHTML = "";
    swal({
      title: "Your cart is EMPTY :(",
      className: "swal-add",
    });
    handlerHome();
  } else if (data) {
    const newArrayCart = data.filter((prod) => prod.id != id);
    localStorage.setItem("cartArray", JSON.stringify(newArrayCart));
    detailsCart();
    totalCarritoFunction();
    addAmountSpanNavbar();
  }
};

//funcion rellenar detalle de compra
const detailsCart = () => {
  containerItemsLi.innerHTML = "";
  data = JSON.parse(localStorage.getItem("cartArray"));
  const items = data.map((el) => {
    box = `
    <div class="container text-center">
  <div class="row containerLi">
    <div class="li col">
    ${el.title}
    </div>
    <div class="li col">
    ${el.co}
    </div>
    <div class="li col">
    ${el.price}
    </div>
    <div onclick="deleteItems(${el.id})" class="li col">
    <svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Pro 6.1.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M135.2 17.69C140.6 6.848 151.7 0 163.8 0H284.2C296.3 0 307.4 6.848 312.8 17.69L320 32H416C433.7 32 448 46.33 448 64C448 81.67 433.7 96 416 96H32C14.33 96 0 81.67 0 64C0 46.33 14.33 32 32 32H128L135.2 17.69zM394.8 466.1C393.2 492.3 372.3 512 346.9 512H101.1C75.75 512 54.77 492.3 53.19 466.1L31.1 128H416L394.8 466.1z"/></svg>
    </div>
  </div>
</div>
      `;
    containerItemsLi.innerHTML += box;
  });
  return items;
};

//evento onclick del carrito de compras
btnCart.addEventListener("click", () => {
  data = JSON.parse(localStorage.getItem("cartArray"));
  sectionCart.classList.remove("none");
  banner.classList.add("none");
  sectionProducts.classList.add("none");
  containerProductDetails.classList.add("none");
  if (data === null || data.length === 0) {
    sectionCart.innerHTML = "";
    swal({
      title: "Your cart is EMPTY :(",
      className: "swal-add",
    });
    handlerHome();
  } else if (data.length > 0) {
    sectionCart.classList.remove("none");
    totalCarritoFunction();
    detailsCart();
  } else {
    console.log("no pasa nada");
  }
});

//evento btn vaciar carrito
btnEmptyCart.addEventListener("click", () => {
  swal({
    title: "Are you sure?",
    text: "Once deleted, you will not be able to recover your purchase!",
    icon: "warning",
    buttons: true,
    dangerMode: true,
  }).then((willDelete) => {
    if (willDelete) {
      swal("Your Purchase has been deleted!", {
        icon: "success",
      });
      localStorage.clear();
      addAmountSpanNavbar();
    } else {
      swal("Your Purchase is safe!");
    }
  });
  handlerHome();
});

//btn confirm purchase y vacio el localstorage simulando mandamos el pedido
confirmPurchase.addEventListener("click", () => {
  swal({
    title: "Your request was sent successfully. Details were sent by email :)",
    className: "swal-add",
  });
  localStorage.clear();
  addAmountSpanNavbar();
  handlerHome();
});


//comienzo de la aplicacion
fetch("data.json")
  .then((res) => res.json())
  .then((json) => {
    renderProduct(json);
  })
  .catch((e) => console.log(e));
