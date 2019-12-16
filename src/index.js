import './style.css';

const appID = '1224c6d99243f71ed4cd542b792bd3fd'
const submitBtn = document.querySelector('.submit-btn');
const responseArea = document.querySelector('.response-container');
const cityName = responseArea.querySelector('.city-content')
const cityDesc = responseArea.querySelector('.desc-content')
const cityTemp = responseArea.querySelector('.temp-content')
const cityWind = responseArea.querySelector('.wind-content')
const cityCloud = responseArea.querySelector('.cloud-content')

submitBtn.addEventListener('click', (event) => {
  event.preventDefault();
  const cityValue = document.querySelector('#city').value;
  if (cityValue != '') {
    getWeatherC(cityValue);
    responseArea.classList.remove("hidden");
    document.querySelector('#city').value = "";
  }
})

const getWeatherC = (city) => {
  fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${appID}&units=metric`)
  .then((response) => {
    return response.json()
  })
  .then((response) => {
    console.log(response)
    cityName.innerHTML = `${response.name}, ${response.sys.country} <img src="http://openweathermap.org/img/wn/${response.weather[0].icon}.png" alt="weather-icon">`;
    cityDesc.textContent = `${response.weather[0].description}`;
    cityTemp.textContent = `${response.main.temp} C`;
    cityWind.textContent = `${response.wind.speed}`;
    cityCloud.textContent = `${response.clouds.all}`;
  })
}

const getWeatherF = (city) => {
  fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${appID}&units=imperial`)
  .then((response) => {
    return response.json()
  })
  .then((response) => {
    console.log(response)
    cityName.innerHTML = `${response.name}, ${response.sys.country} <img src="http://openweathermap.org/img/wn/${response.weather[0].icon}.png" alt="weather-icon">`;
    cityDesc.textContent = `${response.weather[0].description}`;
    cityTemp.textContent = `${response.main.temp} F`;
    cityWind.textContent = `${response.wind.speed}`;
    cityCloud.textContent = `${response.clouds.all}`;
  })
}
