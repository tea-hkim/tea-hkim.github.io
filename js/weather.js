const API_KEY = "aff9220bc2d27cc1e016a3df02bc0c6b";

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const long = position.coords.longitude;

  const url = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const weather = document.querySelector("#weather span:first-child");
      const city = document.querySelector("#weather span:last-child");
      const name = data.name;

      weather.innerText = `${data.weather[0].main} ${data.main.temp}°C`;
      city.innerText = name;
    });
}

function onGeoError() {
  alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
