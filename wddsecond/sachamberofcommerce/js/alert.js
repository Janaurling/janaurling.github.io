let appid3 = '12a2cb1cde307f6093a59e0c0429a0a5'
let lat3 = '30.15'
let lon3 = '-94.74' 

const forecastURL3 = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat3}&lon=${lon3}&appid=${appid3}&units=imperial`;
fetch(forecastURL3)
  .then((response) => response.json())
  .then((jsObject) => {
   console.log(jsObject);
   for (let i = 1; i < 2; i++) {
      let card = document.createElement('section');
      let advs = document.createElement('p');

      advs.textContent = jsObject.alerts[i].description;
      card.appendChild(advs);


      document.querySelector('div.advisory').appendChild(card);
  }    
  });