import validator from "validator";

(function () {
  const cta = document.getElementById("emailcta");
  cta.addEventListener("click", function () {
    const emailInput = document.getElementById("subscmail");
    const emailField = document.getElementById("subscmail").value;
    const isValidEmail = validator.isEmail(emailField);
    emailInput.classList.remove("invalid");

    if (!isValidEmail) {
      console.log(emailField);
      emailInput.classList.add("invalid");
      emailInput.value = "Invalid";
      emailInput.focus();
    }
  });
})();
