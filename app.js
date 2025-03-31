const continueButton = document.querySelector(".button");
const submitButton = document.querySelector('button[type="submit"]');
const timeSelect = document.getElementById("time-select");
const firstName = document.querySelector('input[placeholder="First name"]');
const lastName = document.querySelector('input[placeholder="Last name"]');
const email = document.querySelector('input[placeholder="Email"]');
const phone = document.querySelector('input[placeholder="Phone Number"]');

continueButton.addEventListener("click", () => {
  if (!timeSelect.value) {
    alert("Please select a time");
    return;
  }
  const selectedTime = timeSelect.value;

  localStorage.setItem("selectedTime", selectedTime);
  document.querySelector(".first_container").style.display = "none";
  document.querySelector(".second_container").style.display = "block";
});

submitButton.addEventListener("click", (event) => {
  const firstInput = firstName.value;
  const secondInput = lastName.value;
  const emailInput = email.value;
  const phoneInput = phone.value;
  const selectedTime = localStorage.getItem("selectedTime") || "Not selected";
  const agreeCheckbox = document.getElementById("agree");
  if (
    firstInput.trim() === "" ||
    secondInput.trim() === "" ||
    emailInput.trim() === "" ||
    phoneInput.trim() === "" ||
    !agreeCheckbox.checked
  ) {
    alert("All fields are required and the checkbox must be checked");
    return;
  }
  event.preventDefault();

  document.querySelector(".second_container").style.display = "none";
  document.querySelector(".collected_container").style.display = "block";

  document.getElementById("display-time").textContent = selectedTime;
  document.getElementById("display-firstName").textContent = firstInput;
  document.getElementById("display-lastName").textContent = secondInput;
  document.getElementById("display-email").textContent = emailInput;
  document.getElementById("display-phone").textContent = phoneInput;
});
