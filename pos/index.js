let products = {
  pizzas: [
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
  burger: [],
  drinks: [],
  desserts: [],
};

let productsDiv = document.querySelector("#products");
let productsToFetch = products.pizzas;
productsToFetch.forEach((el, index) => {
  productsDiv.innerHTML += `
        <div class="card" style="width: 18rem">
          <img src="./pizza.jpeg" class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">Pizza 1</h5>
            <p class="card-text">120 EGP</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
          </div>
    `;
});
