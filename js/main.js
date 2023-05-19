const api = {
  key: "a0d78935c9b1665c2ee3a3faed3dd763",
  bUrl: "https://api.openweathermap.org/data/2.5/",
};
const searchBlock = document.querySelector(".search-block");
searchBlock.addEventListener("keypress", setInit);

function setInit(event) {
  if (event.keyCode == 13) {
    result(searchBlock.value);
    console.log(searchBlock.value);
  }
}

function result(query) {
  fetch(`${api.bUrl}weather?q=${query}&units=metric&APPID=${api.key}`)
    .then((weather) => {
      return weather.json();
    })
    .then(dResult);
}

function dResult(weather) {
  console.log(weather);
  let city = document.querySelector(".location .city");
  city.innerHTML = `${weather.name}, ${weather.sys.country}`;
  let now = new Date();
  let date = document.querySelector(".location .date");
  date.innerHTML = dateBuild(now);
  let temp = document.querySelector('.temp');
  temp.innerHTML = `${Math.round(weather.main.temp)}<span>°C</span>`;
  let weatherAi = document.querySelector('.weather');
  weatherAi.innerHTML = weather.weather[0].main;
  var hilow = document.querySelector('.hitem');
  hilow.innerHTML = `${Math>round(weather.main.temp_min)}°C / ${Math.round(weather.main.temp_max)}°C`
}

function dateBuild(a) {
  let months = [
    "Yanvar",
    "Fevral",
    "Mart",
    "Aprel",
    "May",
    "Iyun",
    "Iyul",
    "Avgust",
    "Sentabr",
    "Oktabr",
    "Noyabr",
    "Dekabr",
  ];
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[a.getDay()];
  let date = a.getDate();
  let month = months[a.getMonth()];
  let year = a.getFullYear();
  return `${day} ${date} ${month}`
}
