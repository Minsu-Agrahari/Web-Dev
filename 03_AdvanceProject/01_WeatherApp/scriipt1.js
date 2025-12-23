console.log("Script loaded ...");

const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const apikey = "4accc2a33f5c01e8369889b30d1154eb";

const weatherIcon = document.querySelector(".weather-icon");

const search_box = document.querySelector(".header input");
const search_btn = document.querySelector(".header button");

async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apikey}`);
    // console.log("data loading ...");
    const data = await response.json();

    // console.log("data loded ...");

    // console.log(data);

  if (response.status == 404) {
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    } else {
        document.querySelector(".temp").innerHTML =
        Math.round(data.main.temp) + "°C";
        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".humidity_data").innerHTML = data.main.humidity;
        document.querySelector(".wind_data").innerHTML = data.wind.speed;

        const weather_icon = data.weather[0].main;

        if (weather_icon == "Clouds") {
        weatherIcon.src = "img/clouds.png";
        } else if (weather_icon == "Clear") {
        weatherIcon.src = "img/clear.png";
        } else if (weather_icon == "Drizzle") {
        weatherIcon.src = "img/drizzle.png";
        } else if (weather_icon == "Mist") {
        weatherIcon.src = "img/mist.png";
        } else if (weather_icon == "Rain") {
        weatherIcon.src = "img/rain.png";
        } else if (weather_icon == "Snow") {
        weatherIcon.src = "img/snow.png";
        }
        
        document.querySelector(".error").style.display = "none";
        document.querySelector(".weather").style.display = "block";
    }
}

search_btn.addEventListener("click", () => {
    checkWeather(search_box.value);
});
