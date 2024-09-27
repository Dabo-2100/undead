let products = {
  Pizzas: [
    {
      name: "pizza 1",
      price: 120,
      img: "./pizza.jpeg",
    },
    {
      name: "pizza 2",
      price: 190,
      img: "./pizza.jpeg",
    },
    {
      name: "pizza 3",
      price: 120,
      img: "./pizza.jpeg",
    },
    {
      name: "pizza 4",
      price: 150,
      img: "./pizza.jpeg",
    },
    {
      name: "pizza 5",
      price: 110,
      img: "./pizza.jpeg",
    },
  ],
  Burgers: [
    {
      name: "Burger 1",
      price: 120,
      img: "./OIP.jpeg",
    },
    {
      name: "Burger 2",
      price: 190,
      img: "./OIP.jpeg",
    },
    {
      name: "Burger 3",
      price: 120,
      img: "./OIP.jpeg",
    },
    {
      name: "Burger 4",
      price: 150,
      img: "./OIP.jpeg",
    },
    {
      name: "Burger 5",
      price: 110,
      img: "./OIP.jpeg",
    },
  ],
  Drinks: [],
  Desserts: [],
};

let cart = [
  {
    name: "pizza 1",
    price: 120,
    img: "./pizza.jpeg",
    qty: 1,
  },
  {
    name: "Burger 1",
    price: 120,
    img: "./OIP.jpeg",
    qty: 2,
  },
];
let catsDiv = document.querySelector("#productCats");
let cats = Object.keys(products);
cats.forEach((el) => {
  catsDiv.innerHTML += `<button onclick="renderProducts('${el}')" class="btn btn-primary">${el}</button>`;
});

let productsDiv = document.querySelector("#products");
function renderProducts(catName) {
  let productsToFetch = products[catName];
  productsDiv.innerHTML = "";
  productsToFetch.forEach((el, index) => {
    productsDiv.innerHTML += `
          <div class="card" style="width: 18rem">
            <img src="${el.img}" class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">${el.name}</h5>
              <p class="card-text">${el.price} EGP</p>
              <a href="#" class="btn btn-primary" onclick="addToCart('${catName}',${index})">Add To Cart</a>
            </div>
      `;
  });
}

let tbody = document.querySelector("tbody");

renderCart();

function renderCart() {
  tbody.innerHTML = "";
  cart.forEach((el,index) => {
    tbody.innerHTML += `
      <tr>
        <th>1</th>
        <th>${el.name}</th>
        <th>${el.price}</th>
        <th>${el.qty}</th>
        <th>${el.qty * el.price}</th>
        <th><button onclick="delProduct(${index})">Del</button></th>
      </tr>
    `;
  });

  let sum = 0;
  cart.forEach((el) => {
    let x = +el.price * +el.qty;
    sum += x;
  });

  let TotalCell = document.querySelector("#Total");

  TotalCell.innerText = sum;
}

function addToCart(key, index) {
  let obj = products[key][index];
  let isVaild = cart.findIndex((el) => {
    return el.name == obj.name;
  });
  if (isVaild == -1) {
    obj.qty = 1;
    cart.push(obj);
  } else {
    cart[isVaild].qty++;
  }
  renderCart();
}


function delProduct(index){
  cart.splice(index,1);
  renderCart();
}