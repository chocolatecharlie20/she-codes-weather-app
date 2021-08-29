let now = new Date();

let date = document.querySelector(".date");

let dates = now.getDate();
let year = now.getFullYear();

let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
let day = days[now.getDay()];

let months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
let month = months[now.getMonth()];

date.innerHTML = `${day} ${dates} ${month} ${year}`;

let time = document.querySelector(".time");
let hour = now.getHours();
let minutes = now.getMinutes();
if (minutes < 10) {
  minutes = `0${minutes}`;
}

time.innerHTML = `${hour}:${minutes}`;

function search(event) {
  event.preventDefault();
  let cityElement = document.querySelector("#return-city");
  let cityInput = document.querySelector("#city-input");
  cityElement.innerHTML = cityInput.value;
}
let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", search);

//week 5 homework

function showTemp(response) {
  console.log("Hello");
  let temperature = Math.round(response.data.main.temp);
  console.log(temperature);
  let currentTemperature = document.querySelector("#return-temperature");
  currentTemperature.innerHTML = `${temperature}`;
}

function searchCity(city) {
  console.log("Hello1");
  let apiKey = "236daf43cfa87f4a3d255a019e6a6877";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  axios.get(apiUrl).then(showTemp);
}

function handleSubmit(event) {
  console.log("Hell2");
  event.preventDefault();
  let city = document.querySelector("#city-input");
  let h1 = document.querySelector("#return-city");
  h1.innerHTML = city.value;

  searchCity(city.value);
}

let form = document.querySelector("#search-form");
form.addEventListener("submit", handleSubmit);

function convertToCelsius(event) {
  event.preventDefault();
  let temperature = currentTemperture;
  document.querySelector("#return-temperature").innerHTML = temperature;
  celsius.classList.add("#return-temperature");
  fahrenheit.classList.remove("#return-temperature");
}

function convertToFahrenheit() {
  let temperature = currentTemperture;
  temperature = Math.round((temperature * 9) / 5 + 32);
  document.querySelector("#return-temperature").innerHTML = temperature;
  celsius.classList.remove("#return-temperature");
  fahrenheit.classList.add("#return-temperature");
}
let celsius = document.querySelector("a#celsius-link");
let fahrenheit = document.querySelector("a#fahrenheit-link");
celsius.addEventListener("click", convertToCelsius);
fahrenheit.addEventListener("click", convertToFahrenheit);
let humidityElement = document.querySelector("#humidity");
let windElement = document.querySelector("#wind");
humidityElement.innerHTML = response.data.main.humidity;
windElement.innerHTML = Math.round(response.data.wind.speed);
