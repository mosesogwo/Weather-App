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

export { getWeatherC, getWeatherF }