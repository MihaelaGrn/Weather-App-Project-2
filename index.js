const city = localStorage.getItem("city");
const scrollToTopButton = document.querySelector(".scroll-to-top");

if (city === null) {
  localStorage.setItem("city", "București");
  displayCurrentWeather("București");
  displayWeatherForecast("București");
} else {
  displayCurrentWeather(city);
  currentCity.innerText = city;
  displayWeatherForecast(city);
}

scrollToTopButton.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

document.addEventListener("scroll", function () {
  if (window.scrollY > 500) {
    scrollToTopButton.style.visibility = "visible";
  } else {
    scrollToTopButton.style.visibility = "hidden";
  }
});
