
const iconElement = document.querySelector('.weather-icon');
const tempElement = document.querySelector('.temperature-value p');
const descElement = document.querySelector('.temperature-description p');
const locationElement = document.querySelector('.location p');
const notificationElement = document.querySelector('.notification');

// APP DATA
const weather = {};

weather.temperature = {
  unit: 'fahrenheit'
}

// API KEY
const key = '82005d27a116c2880c8f0fcb866998a0';

// CHECK IF BROWSER SUPPORTS GEOLOCATION  
if('geolocation' in navigator) {
  navigator.geolocation.getCurrentPosition(setPosition, showError);
}else {
  notificationElement.style.display = 'block';
  notificationElement.innerHTML = '<p>Browser does not support Geolocation</p>';
}

// SET USER'S POSITION
function setPosition(position) {
  let latitude = position.coords.latitude;
  let longitude = position.coords.longitude;

  getWeather(latitude, longitude); 
}

// DISPLAY ERROR MESSAGE IF THERE IS AN ISSUE WITH GEOLOCATION SERVICE
function showError(error) {
  notificationElement.style.display = 'block';
  notificationElement.innerHTML = `<p> ${error.message} </p>`;
}

// GET WEATHER INFO FROM API
function getWeather(latitude, longitude) {
  let api = `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=imperial&appid=${key}`;

  fetch(api)
  .then(function(response) {
    let data = response.json();
    return data;
  })
  .then(function(data) {
    weather.temperature.value = Math.floor(data.main.temp);
    weather.description = data.weather[0].description;
    weather.iconID = data.weather[0].icon;
    weather.city = data.name;
    weather.country = data.sys.country;
  })
  .then(function() {
    displayWeather();
  });
}
  // DISPLAY WEATHER TO UI 
  function displayWeather() {
    iconElement.innerHTML = `<img src='icons/${weather.iconID}.png'/>`;
    tempElement.innerHTML = `${weather.temperature.value}°<span>F</span>`;
    descElement.innerHTML = weather.description;
    locationElement.innerHTML = `${weather.city}, ${weather.country}`;
  }



