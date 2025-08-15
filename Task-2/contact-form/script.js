document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault(); // Stop actual form submission

  // Get values
  let firstName = document.getElementById("firstName").value.trim();
  let lastName = document.getElementById("lastName").value.trim();
  let email = document.getElementById("email").value.trim();
  let message = document.getElementById("message").value.trim();

  // Error spans
  let firstNameError = document.getElementById("firstNameError");
  let lastNameError = document.getElementById("lastNameError");
  let emailError = document.getElementById("emailError");
  let messageError = document.getElementById("messageError");
  let successMessage = document.getElementById("successMessage");

  // Reset previous messages
  firstNameError.textContent = "";
  lastNameError.textContent = "";
  emailError.textContent = "";
  messageError.textContent = "";
  successMessage.textContent = "";

  let valid = true;

  if (firstName === "") {
    firstNameError.textContent = "First name is required";
    valid = false;
  }

  // optional if this field also required.
  // if (lastName === "") {
  //   lastNameError.textContent = "Last name is required";
  //   valid = false;
  // }

  if (email === "") {
    emailError.textContent = "Email is required";
    valid = false;
  } else if (!isValidEmail(email)) {
    emailError.textContent = "Enter a valid email";
    valid = false;
  }

  // optional if this field also required.
  // if (message.length < 10) {
  //   messageError.textContent = "Message must be at least 10 characters";
  //   valid = false;
  // }

  if (valid) {
    successMessage.textContent = "Form submitted successfully!";
    // Optionally reset the form
    // document.getElementById("contactForm").reset();
  }
});

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}
