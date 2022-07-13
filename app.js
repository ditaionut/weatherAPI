const storage = new Storage();
const getWeatherLocation = storage.getLocalStorage();
const weather = new Weather(getWeatherLocation.city);
const ui = new UI();

document.addEventListener("DOMContentLoaded", getWeather);
document.getElementById("w-change-btn").addEventListener("click", (e) => {
  const city = document.getElementById("city").value;
  weather.changeLocation(city);
  
// Set local Storage
  storage.setLocalStorage(city);

  getWeather();

  document.getElementById("city").value = "";
  $("#locModal").modal("hide");
  $("body").removeClass("modal-open");
  $(".modal-backdrop").remove();
});

function getWeather() {
  weather
    .weatherAPI()
    .then((results) => {
      console.log(results);
      ui.paint(results);
    })
    .catch((err) => console.log(err));
}
