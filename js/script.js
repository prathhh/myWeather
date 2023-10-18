const apiKey = "53d22112941bff57a52856e745e6f559";
const baseURL = "https://api.openweathermap.org/data/2.5/weather?";

const alertBox = document.getElementById("alert");
const currentLocation = document.getElementById("currentLocation");
const temperature = document.getElementById("temperature");
const description = document.getElementById("description");
alertBox.style.display = "none";

navigator.geolocation.getCurrentPosition(success, error);

async function success(position) {
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;

  const url = `${baseURL}lat=${latitude}&lon=${longitude}&units=metric&appid=${apiKey}`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);

    currentLocation.innerHTML = data.name;
    temperature.innerHTML = data.main.temp;
    description.innerHTML = data.weather[0].description;
  } catch (error) {
    alertBox.style.display = "block";
    alertBox.innerHTML = error;
  }
}

function error() {
  alertBox.style.display = "block";
  alertBox.innerHTML = "unable to retrieve your location";
}
