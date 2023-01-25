function getWeather(){
    fetch('https://api.openweathermap.org/data/2.5/weather?q=Stockton&appid=92ed4d135688a5dffbc60dc180b672ea').then(response => response.json()).then(data => console.log(data.coord.lon))
}


getWeather()




// 92ed4d135688a5dffbc60dc180b672ea