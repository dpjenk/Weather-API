
const icon = document.querySelector('.weather-icon');
const temp = document.querySelector('.temperature-value p');
const desc = document.querySelector('.temperature-description p');
const location = document.querySelector('.location p');
const notification = document.querySelector('.notification');

// APP DATA
const weather = {};

weather.temperature = {
  unit: 'celsius'
}

// APP CONSTS
const KELVIN = 273;

// API KEY
const key = '82005d27a116c2880c8f0fcb866998a0';

// CHECK IF BROWSER SUPPORTS GEOLOCATION  
