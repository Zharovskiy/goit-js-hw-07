document.querySelector(".login-form").addEventListener("submit", (event) => {
  event.preventDefault();
  const login = event.target.elements.email.value;
  const password = event.target.elements.password.value;

  if (login !== "" && password !== "") {
    const userCredentials = {};
    userCredentials.email = login;
    userCredentials.password = password;
    console.log(userCredentials);
    event.target.reset();
    alert("Data saved");
  } else {
    alert("All form fields must be filled in");
  }
});