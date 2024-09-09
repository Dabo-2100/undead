let products = [
  { name: "iPhone x", price: 300, isClicked: false },
  { name: "iPhone 11", price: 350, isClicked: false },
  { name: "iPhone 12", price: 400, isClicked: false },
  { name: "iPhone 13", price: 450, isClicked: false },
];

let fatora = [];

let productContainer = document.querySelector(".products-container");
let table = document.querySelector("table tbody");
let totalSpan = document.querySelector("#total");

renderProducts();
renderFatora();

function renderProducts() {
  productContainer.innerHTML = "";
  products.forEach((el, index) => {
    productContainer.innerHTML += `<button onclick="addProductToFatora(${index})" class="btn btn-primary"  ${
      el.isClicked ? "disabled" : null
    }  >${el.name} [ ${el.price} $ ]</button>`;
  });
}

function renderFatora() {
  table.innerHTML = "";
  fatora.forEach((el, index) => {
    table.innerHTML += `
            <tr>
                <td>${index + 1}</td>
                <td>${el.name}</td>
                <td>${el.price} $</td>
                <td>
                    <div class="d-flex justify-content-center align-items-center gap-2">
                        <buuton class="btn btn-danger" onclick="decrement(${index})">-</buuton>
                        <p class="mb-0">${el.qty}</p>
                        <button class="btn btn-success" onclick="incement(${index})">+</button>
                    </div>
                </td>
                <td>${el.price * el.qty} $</td>
            </tr>
        `;
  });
  totalSpan.innerText = getTotal();
}

function getTotal() {
  let total = 0;
  fatora.forEach((el, index) => {
    total += el.price * el.qty;
  });
  return total;
}

function addProductToFatora(index) {
  let product = products[index];
  product.qty = 1;
  products[index].isClicked = true;
  fatora.push(product);
  renderFatora();
  renderProducts();
}

function incement(index) {
  fatora[index].qty++;
  renderFatora();
}
function decrement(index) {
  if (fatora[index].qty > 1) {
    fatora[index].qty--;
  }
  else{
    fatora.splice(index,1);
  }
  renderFatora();
}
