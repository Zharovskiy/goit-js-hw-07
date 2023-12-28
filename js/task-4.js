const registerForm = document.querySelector(".login-form");
registerForm.addEventListener("submit", handleSubmit);
  
function handleSubmit(event) {
  event.preventDefault();
  const form = event.target;
  const login = form.elements.email.value;
  const password = form.elements.password.value;

  if (login !== "" && password !== "") {
    const userCredentials = {};
    userCredentials.email = login;
    userCredentials.password = password;
    console.log(userCredentials);
    form.reset();
    alert("Data saved");
  } else {
    alert("All form fields must be filled in");
  }
};