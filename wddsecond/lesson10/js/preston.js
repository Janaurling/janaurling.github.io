

const apiURL = "http://api.openweathermap.org/data/2.5/weather?id=5604473&&units=imperial&appid=12a2cb1cde307f6093a59e0c0429a0a5"
fetch(apiURL)
.then((response) => response.json())
.then((jsObject) => {
  //console.log(jsObject);
 document.getElementById('temperature').textContent = jsObject.main.temp;
 document.getElementById('windspeed').textContent = jsObject.wind.speed;
 document.getElementById('humidity').textContent = jsObject.main.humidity;
 document.getElementById('current').textContent = jsObject.weather.description;
});
const forecastURL = "http://api.openweathermap.org/data/2.5/forecast?id=5604473&&units=imperial&appid=12a2cb1cde307f6093a59e0c0429a0a5"
fetch(forecastURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);

    const filteredForecast = jsObject.list.filter(forecast => forecast.dt_txt.includes("18:00:00"));
    console.log(filteredForecast);
    const imagesrc = "https://openweathermap.org/img/w/";
    let now = new Date();
var days = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
    for (let i = 0; i < 5; i++) {
        //document.querySelector("#icon" + (i + 1)).setAttribute("src", imagesrc + filteredForecast[i].weather[0].icon + ".png");
        //document.querySelector("#icon" + (i + 1)).setAttribute("alt", filteredForecast[i].weather[0].description);
        //document.querySelector("#temp" + (i + 1)).textContent = filteredForecast[i].main.temp.toFixed(1);
        //document.querySelector("#day" + (i+1)).innerHTML = days[(now.getDay() + i) % 7];
        let card = document.createElement('section');
        let h2 = document.createElement('h2');
        let img = document.createElement('img');
        let daytemp = document.createElement('p');


        h2.textContent = days[(now.getDay() + i) % 7];
        daytemp.textContent = filteredForecast[i].main.temp.toFixed(1);
        img.setAttribute('src', imagesrc + filteredForecast[i].weather[0].icon + ".png");
        img.setAttribute('alt', filteredForecast[i].weather[0].description)
        card.appendChild(h2);
        card.appendChild(img);
        card.appendChild(daytemp);


        document.querySelector('div.forecastcards').appendChild(card);
    }    
});


