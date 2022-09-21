const bucharest = document.querySelector(".bucharest");
const timisoara = document.querySelector(".timisoara");
const oradea = document.querySelector(".oradea");
const constanta = document.querySelector(".constanta");
const brasov = document.querySelector(".brasov");
const currentCity = document.querySelector("#currentCity");

function changeLocation(city) {
  currentCity.innerText = city;
  displayCurrentWeather(city);
  displayWeatherForecast(city);
  localStorage.setItem("city", city);
}
bucharest.addEventListener("click", () => {
  changeLocation("București");
});
timisoara.addEventListener("click", () => {
  changeLocation("Timișoara");
});
oradea.addEventListener("click", () => {
  changeLocation("Oradea");
});
constanta.addEventListener("click", () => {
  changeLocation("Constanța");
});
brasov.addEventListener("click", () => {
  changeLocation("Brașov");
});
