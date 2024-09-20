let emailInput = document.querySelector("#email");
let nameInput = document.querySelector("#name");
let passwordInput = document.querySelector("#password");
let confirmInput = document.querySelector("#confirm");

const handleSubmit = (event) => {
  event.preventDefault();
  //   Validation
  let email = emailInput.value;
  let name = nameInput.value;
  let password = passwordInput.value;
  let confirm = confirmInput.value;
  let obj = { name, password, email };

  let hasError = 0;

  if (!emailRegex.test(email)) {
    alert("Invalid Email");
    hasError++;
  }

  if (!passwordRegex.test(password)) {
    alert(`
        Invalid Password
        Password Must Containts Special Charts Like [@ & _ -]
        Password Must Be min 6 chars
        Password Must Be max 20 chars
        Password Must Containts Capital Letter & Smaill Letters
        Password Must Containts Number
    `);
    hasError++;
  }

  if (!nameRegex.test(name)) {
    alert("Please Fill username with min chart 2 and max chart20");
    hasError++;
  }

  if (password != confirm) {
    alert("Password Not Match ");
    hasError++;
  }

  if (hasError > 0) {
    alert("Fix Problems");
  } else {
    alert("Form is Good");
  }

  //   Post Data To Back end
  console.log(obj);
  //   Submit Data to Backend (localStorage)
  //   Key in localStorage is [users]
  let usersString = localStorage.getItem("users");
  let usersarry = [];
  if (usersString) {
    usersarry = JSON.parse(usersString);
    let emailIndex = usersarry.findIndex((el, index) => {
      return el.email.toLowerCase() == email.toLowerCase();
    });

    if (emailIndex == -1) {
      usersarry.push(obj);
    } else {
      alert("This email is alreeady Registered");
    }
  }
  else{
    usersarry.push(obj);
  }
  localStorage.setItem("users", JSON.stringify(usersarry));
};
