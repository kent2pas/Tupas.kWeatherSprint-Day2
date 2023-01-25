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
        .then((data) => console.log(data));
    },
    // displayWeather: function(data){

 }
