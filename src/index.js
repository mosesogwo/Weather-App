/* eslint-env browser */

import './style.css';

const appID = '1224c6d99243f71ed4cd542b792bd3fd';
const submitBtn = document.querySelector('.submit-btn');
const responseArea = document.querySelector('.response-container');
const cityName = responseArea.querySelector('.city-content');
const cityDesc = responseArea.querySelector('.desc-content');
const cityTemp = responseArea.querySelector('.temp-content');
const cityWind = responseArea.querySelector('.wind-content');
const cityCloud = responseArea.querySelector('.cloud-content');
const farenBtn = document.querySelector('.faren-btn');
const celciusBtn = document.querySelector('.celcius-btn');
const tempBtns = document.querySelector('.temp-btns');

const alertMessage = (msg, className) => {
  const alertDiv = document.createElement('div');
  alertDiv.className = `alert alert-${className}`;
  alertDiv.appendChild(document.createTextNode(msg));
  const main = document.querySelector('main');
  const mainRow = document.querySelector('.main-row');
  main.insertBefore(alertDiv, mainRow);
  setTimeout(() => document.querySelector('.alert').remove(), 3000);
};

const getWeatherC = (city) => {
  fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${appID}&units=metric`)
    .then(response => response.json())
    .then((response) => {
      cityName.innerHTML = `${response.name}, ${response.sys.country} <img src="http://openweathermap.org/img/wn/${response.weather[0].icon}.png" alt="weather-icon">`;
      cityDesc.textContent = `${response.weather[0].description}`;
      cityTemp.textContent = `${response.main.temp} C`;
      cityWind.textContent = `${response.wind.speed} meter/sec`;
      cityCloud.textContent = `${response.clouds.all}`;
    })
    .catch(() => {
      alertMessage('Please check the city and try again', 'danger');
      document.querySelector('#city').value = "";
    });
};

const getWeatherF = (city) => {
  fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${appID}&units=imperial`)
    .then(response => response.json())
    .then((response) => {
      cityName.innerHTML = `${response.name}, ${response.sys.country} <img src="http://openweathermap.org/img/wn/${response.weather[0].icon}.png" alt="weather-icon">`;
      cityDesc.textContent = `${response.weather[0].description}`;
      cityTemp.textContent = `${response.main.temp} F`;
      cityWind.textContent = `${response.wind.speed} miles/hr`;
      cityCloud.textContent = `${response.clouds.all}`;
    })
    .catch(() => {
      alertMessage('Please check the city and try again', 'danger');
      document.querySelector('#city').value = "";
    });
};

submitBtn.addEventListener('click', (event) => {
  event.preventDefault();
  const cityValue = document.querySelector('#city').value;
  if (cityValue !== '') {
    getWeatherC(cityValue);
    tempBtns.classList.remove('hidden');
    responseArea.classList.remove('hidden');
  }
});

farenBtn.addEventListener('click', () => {
  const cityValue = document.querySelector('#city').value;
  if (cityValue !== '') {
    getWeatherF(cityValue);
    responseArea.classList.remove('hidden');
  }
});

celciusBtn.addEventListener('click', () => {
  const cityValue = document.querySelector('#city').value;
  if (cityValue !== '') {
    getWeatherC(cityValue);
    responseArea.classList.remove('hidden');
  }
});
