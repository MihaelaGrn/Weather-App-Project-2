const API_KEY = "7e2339fa46bca7b4a0a3966cdbd896e5";

function getCurrentWeatherEndpoint(city) {
  return `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric&lang=ro`;
}

function getForecastWeatherEndpoint(city) {
  return `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=metric&lang=ro`;
}
