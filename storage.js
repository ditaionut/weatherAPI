class Storage {
  constructor() {
    this.city = city;
    this.defaultCity = "Craiova";
  }
  getLocalStorage() {
    if (localStorage.getItem("city") === null) {
      this.city = this.defaultCity;
    } else {
      this.city = localStorage.getItem("city");
    }
    return { city: this.city };
  }

  setLocalStorage(city) {
    localStorage.setItem("city", city);
  }
}
