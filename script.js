const countries = [
  "United States",
  "India",
  "France",
  "Germany",
  "Italy",
  "Japan",
];
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
  currentIndex = (currentIndex + 1) % images.length; // Move to the next index
  slider.scrollTo({
    left: currentIndex * slider.clientWidth, // Scroll to the new slide
    behavior: "smooth",
  });
}

// Change slide every 3 seconds
setInterval(changeSlide, 3000);
