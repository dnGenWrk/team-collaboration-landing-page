import validator from "validator";

(function () {
  const cta = document.getElementById("emailcta");
  const emailInput = document.getElementById("subscmail");
  const invalidEmailMessage = document.getElementById("email_invalid_message");
  const emailBlock = document.querySelector(".subscibe-cta-block");

  emailInput.addEventListener("input", updateValue);
  function updateValue(e) {
    emailBlock.classList.remove("border-red-700");
    invalidEmailMessage.style.setProperty("visibility", "hidden");
  }

  cta.addEventListener("click", function () {
    const emailField = document.getElementById("subscmail").value;
    const isValidEmail = validator.isEmail(emailField);

    if (!isValidEmail) {
      emailBlock.classList.add("border-red-700");
      invalidEmailMessage.style.setProperty("visibility", "visible");
      emailInput.focus();
    }
  });
})();
