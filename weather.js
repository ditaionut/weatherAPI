class Weather {
  constructor(city) {
    this.apiKey = "b87d554d47msh3e990291539425dp16625ejsnb5bed0313b40";
    this.city = city;
  }

  //Fetch weather from API
  async weatherAPI() {
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": `${this.apiKey}`,
        "X-RapidAPI-Host": "weatherapi-com.p.rapidapi.com",
      },
    };

    const response = await fetch(
      `https://weatherapi-com.p.rapidapi.com/forecast.json?q=${this.city}&days=3`,
      options
    );
    const responseData = await response.json();
    return responseData;
  }

  changeLocation(city) {
    this.city = city;
  }
}
