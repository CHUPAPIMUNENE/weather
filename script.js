let API = "http://api.openweathermap.org/data/2.5/weather?q=";
let appID = "&appid=b067377a72c98ae6963cdae2e35408d9";

let input = document.getElementById("city");
let infoBox = document.getElementById("info");
let button = document.getElementById("send");
button.addEventListener("click", getWeatherByCity);

async function getWeatherByCity() {
  const response = await fetch(API + input.value + appID);
  const weather = await response.json();

  let name = document.createElement("h2");
  name.textContent = "city" + weather.name;
  infoBox.appendChild(name);

  let temp = document.createElement("h2");
  temp.textContent =
    "temperature:" + Math.round(weather.main.temp - 273.15) + "C°";

  infoBox.appendChild(temp);

  let country = document.createElement("h2");
  country.textContent = "country:" + weather.sys.country;
  infoBox.appendChild(country);

  let feels_like = document.createElement("h2");
  feels_like.textContent =
    "feels like:" + Math.round(weather.main.feels_like - 273.15) + "C°";

  infoBox.appendChild(feels_like);
}
