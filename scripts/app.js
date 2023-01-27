// function getWeather(){
//     fetch('https://api.openweathermap.org/data/2.5/weather?q="+ city +"&appid=92ed4d135688a5dffbc60dc180b672ea').then(response => response.json()).then(data => console.log(data))
// }


// getWeather()




// 92ed4d135688a5dffbc60dc180b672ea


let weather = {
    apiKey: "92ed4d135688a5dffbc60dc180b672ea",
    fetchWeather: function(city){
      fetch(
        "https://api.openweathermap.org/data/2.5/weather?q=" +
          city +
          "&units=metric&appid=" +
          this.apiKey
      )
        .then((response) => response.json())
        .then((data) => this.displayWeather(data));
    },
    displayWeather: function(data){
    const {name} = data;
    const {icon, description} = data.weather[0];
    const {temp, humidity} = data.main;
    const {speed} = data.wind;
    console.log(name, icon, description, temp, humidity, speed)
    document.querySelector(".weatherinformation4").innerText = name;
    document.querySelector(".weatherinformation3").innerText = description;
    document.querySelector(".weatherinformation2").innerText = temp + "°";
    document.querySelector(".icon").src =
    "https://openweathermap.org/img/wn/" + icon + "@2x.png";
  },
  
  search: function () {
    this.fetchWeather(document.querySelector(".inputBox").value);
  },
};

document.querySelector(".search button").addEventListener("click", function () {
  weather.search();
});

document.querySelector(".inputBox").addEventListener("keyup", function (event) {
    if (event.key == "Enter") {
      weather.search();
    }
  });

 

