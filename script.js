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
