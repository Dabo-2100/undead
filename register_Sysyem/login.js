let emailInput = document.querySelector("#email");
let passwordInput = document.querySelector("#password");
const handleSubmit = (event) => {
  event.preventDefault();
  //   Validation
  let email = emailInput.value;
  let password = passwordInput.value;

  let hasError = 0;
  if (!emailRegex.test(email)) {
    alert("Invalid Email");
    hasError++;
  }
  if (hasError > 0) {
    alert("Fix Problems");
  } else {
    alert("Form is Good");
  }

  let usersString = localStorage.getItem("users");
  if (usersString) {
    usersarry = JSON.parse(usersString);
    let emailIndex = usersarry.findIndex((el, index) => {
      return (
        el.email.toLowerCase() == email.toLowerCase() && el.password == password
      );
    });

    if (emailIndex == -1) {
      alert("Wrong Email or Password");
    } else {
      window.location.href = "./home.html";
      alert("Go To Home");
    }
  } else {
    alert("Wrong Email or Password");
  }
};
