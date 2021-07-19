let appid = '12a2cb1cde307f6093a59e0c0429a0a5'
let lat = '29.42'
let lon = '-98.49' 

const forecastURL = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${appid}&units=imperial&exclude=hourly,minutely`;
fetch(forecastURL)
  .then((response) => response.json())
  .then((jsObject) => {
   console.log(jsObject);


    const imagesrc = "https://openweathermap.org/img/wn/";
    let now = new Date();
var days = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
    for (let i = 1; i < 4; i++) {
        
        let card = document.createElement('section');
        let h2 = document.createElement('h2');
        let img = document.createElement('img');
        let daytemp = document.createElement('p');


        h2.textContent = days[(now.getDay() + i) % 7];
        daytemp.textContent = jsObject.daily[i].temp.day.toFixed(1);
        img.setAttribute('src', imagesrc + jsObject.daily[i].weather[0].icon + "@4x.png");
        img.setAttribute('alt', jsObject.daily[i].weather[0].description)
        card.appendChild(h2);
        card.appendChild(img);
        card.appendChild(daytemp);


        document.querySelector('div.forecastcards').appendChild(card);
    }    
});
