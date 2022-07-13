class UI {
  constructor() {
    this.location = document.getElementById("w-location");
    this.desc = document.getElementById("w-desc");
    this.string = document.getElementById("w-string");
    this.details = document.getElementById("w-details");
    this.icon = document.getElementById("w-icon");
    this.humidity = document.getElementById("w-humidity");
    this.feelsLike = document.getElementById("w-feels-like");
    this.wind = document.getElementById("w-wind");
  }

  paint(weather) {
    this.location.textContent = weather.location.name;
    this.desc.textContent = weather.current.condition.text;
    this.string.innerHTML = `${weather.current.temp_c} &#176; C`;
    this.icon.src = weather.current.condition.icon;
    this.humidity.textContent = `Relative hummidity: ${weather.current.humidity}`;
    this.feelsLike.innerHTML = `Feels like: ${weather.current.feelslike_c} &#176; C`;
    this.wind.textContent = `Wind: ${weather.current.wind_kph} km/h`;
  }
}
