let phones = ["iPhone x", "iPhone 11", "iPhone 12"];
let prices = ["450", "500", "600"];
let qtys = ["10", "5", "7"];
// C R U D
let showData = () => {
  console.clear();
  phones.forEach((phone, index) => {
    console.log(
      `${index + 1} - Phone : ${phone} ==> ${prices[index]}$ ==> Qty : ${
        qtys[index]
      }`
    );
  });
};

showData();

let addPhone = () => {
  phones.push(prompt("Enter Phone Name"));
  prices.push(prompt("Enter Phone Price"));
  qtys.push(prompt("Enter Phone Qty"));
  showData();
};
let deletePhone = () => {
  let delIndex = +prompt("Enter Phone No To Delete") - 1;
  phones.splice(delIndex, 1);
  prices.splice(delIndex, 1);
  qtys.splice(delIndex, 1);
  showData();
};

let updatePhone = () => {
  let updateIndex = +prompt("Enter Phone No To Update") - 1;
  phones.splice(updateIndex, 1, prompt("Enter Phone Name"));
  prices.splice(updateIndex, 1, prompt("Enter Phone Price"));
  qtys.splice(updateIndex, 1, prompt("Enter Phone Qty"));
  showData();
};
// const car1 = { name: "Audi", model: "A4" };
// const car2 = { name: "Volvo", model: "XC90" };
// const car3 = { name: "Ford", model: "Fusion" };

// console.table([car1, car2, car3]);
