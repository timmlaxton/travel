const contactForm = document.querySelector(".contact-form");

let name = document.getElementById("name");
let email = document.getElementById("email");
let subject = document.getElementById("subject");
let nammessagee = document.getElementById("message");

contactForm.addEventListener("submit", (e) => {
  e.preventDefault();
});
