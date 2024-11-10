const countries = [
  "United States",
  "India",
  "France",
  "Germany",
  "Italy",
  "Japan",
];

const EMAIL = "sujoy@jain.com";
const PASSWORD = "sujoy-manna";
let index = 0;

setInterval(() => {
  document.querySelector("#countryName span").innerText = countries[index];
  index = (index + 1) % countries.length;
}, 2000);

// ------form---------

// Set minimum date for start date
document.getElementById("start_date").min = new Date()
  .toISOString()
  .split("T")[0];

document
  .getElementById("form_book")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const where_to = document.getElementById("where_to").value;
    const how_many = document.getElementById("how_many").value;
    const start_date = new Date(document.getElementById("start_date").value);
    console.log("🚀 ~ start_date:", start_date);
    const end_date = new Date(document.getElementById("end_date").value);
    console.log("🚀 ~ end_date:", end_date);

    const description = document.getElementById("description").value;

    // Check if all fields are filled
    if (!where_to) {
      alert("Please select a destination.");
      return;
    }
    if (!how_many || how_many <= 0) {
      alert("Please enter a valid number of persons.");
      return;
    }
    if (start_date == "Invalid Date") {
      alert("Please select a start date.");
      return;
    }
    if (end_date == "Invalid Date") {
      alert("Please select an end date.");
      return;
    }
    if (end_date <= start_date) {
      alert("End date must be greater than start date.");
      return;
    }
    if (end_date <= start_date) {
      alert("End date must be greater than start date.");
      return;
    }
    if (description.length < 50 || description.length > 500) {
      alert("Description must be between 50 and 500 characters.");
      return;
    }

    document.getElementById("form_book").reset();
    alert("Booking successful!");
  });

// - Silder
const slider = document.querySelector(".slider");
const images = document.querySelectorAll(".slider img");
let currentIndex = 0;

function changeSlide() {
  currentIndex = (currentIndex + 1) % images.length;
  slider.scrollTo({
    left: currentIndex * slider.clientWidth,
    behavior: "smooth",
  });
}

// Change slide every 3 seconds
setInterval(changeSlide, 3000);

// - registration modal

function reset() {
  document.getElementById("registrationModal").style.display = "none";
  document.getElementById("registrationForm").reset();

  document.getElementById("loginModal").style.display = "none";
  document.getElementById("loginForm").reset();
}

function openRegistrationModal() {
  reset();
  // document.getElementById("registrationModal").style.display = "block";
  document.getElementById("registrationModal").style.display = "flex";
}

function closeModal() {
  reset();
  document
    .querySelectorAll(".error")
    .forEach((error) => (error.textContent = ""));
}

// - login modal
function openLoginModal() {
  reset();
  document.getElementById("loginModal").style.display = "flex";
}

function closeLoginModal() {
  reset();
}

// -Close login modal if clicked outside
window.onclick = function (event) {
  const loginModal = document.getElementById("loginModal");
  const modal = document.getElementById("registrationModal");
  if (event.target == loginModal) {
    console.log("login");

    closeLoginModal();
  }

  if (event.target == modal) {
    console.log("regis");
    closeModal();
  }
};
// // Close modal if clicked outside

// - registration modal

function reset() {
  document.getElementById("registrationModal").style.display = "none";
  document.getElementById("registrationForm").reset();

  document.getElementById("loginModal").style.display = "none";
  document.getElementById("loginForm").reset();
}

function openRegistrationModal() {
  reset();
  document.getElementById("registrationModal").style.display = "flex";
}

function closeModal() {
  reset();
  document
    .querySelectorAll(".error")
    .forEach((error) => (error.textContent = ""));
}

// - login modal
function openLoginModal() {
  reset();
  document.getElementById("loginModal").style.display = "flex";
}

function closeLoginModal() {
  reset();
}

// -Close login modal if clicked outside
window.onclick = function (event) {
  const loginModal = document.getElementById("loginModal");
  const modal = document.getElementById("registrationModal");
  if (event.target == loginModal) {
    console.log("login");

    closeLoginModal();
  }

  if (event.target == modal) {
    console.log("regis");
    closeModal();
  }
};
// // Close modal if clicked outside

// - animation

document
  .getElementById("registrationForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const submitBtn = document.getElementById("submitBtn");
    submitBtn.disabled = true;
    const buttonText = submitBtn.querySelector(".button-text");
    const spinner = submitBtn.querySelector(".spinner");
    const successMessage = submitBtn.querySelector(".success-message");

    buttonText.style.visibility = "hidden";
    spinner.style.display = "block";

    setTimeout(() => {
      buttonText.style.display = "none";
      spinner.style.display = "none";
      successMessage.style.display = "block";
      setTimeout(() => {
        reset();
      }, 2000);
    }, 2000);
  });

document
  .getElementById("loginForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const submitBtn = document.getElementById("submitBtn-login");
    const authMsg = document.getElementById("login-auth-msg");
    const loginPassword = document.getElementById("loginPassword");
    const loginEmail = document.getElementById("loginEmail");
    const buttonText = submitBtn.querySelector(".button-text");
    const spinner = submitBtn.querySelector(".spinner");
    const successMessage = submitBtn.querySelector(".success-message");
    authMsg.style.display = "none";

    submitBtn.disabled = true;
    buttonText.style.visibility = "hidden";
    spinner.style.display = "block";

    setTimeout(() => {
      if (
        loginEmail.value === "sujoy@jain.com" &&
        loginPassword.value === "sujoy-manna"
      ) {
        buttonText.style.display = "none";
        spinner.style.display = "none";
        successMessage.style.display = "block";
        setTimeout(() => {
          reset();
        }, 2000);
      } else {
        submitBtn.disabled = false;
        buttonText.style.visibility = "visible";
        spinner.style.display = "none";
        loginEmail.value = "";
        loginPassword.value = "";
        authMsg.style.display = "block";
      }
    }, 2000);
  });
