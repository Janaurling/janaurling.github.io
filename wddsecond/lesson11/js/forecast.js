const apiURL= "http://api.openweathermap.org/data/2.5/forecast?id=5604473&&units=imperial&appid=12a2cb1cde307f6093a59e0c0429a0a5"
fetch(apiURL)
    .then((response) => response.json())
    .then((jsObject) => {
console.log(jsObject);
        let day = 0;
        const dayofWeek = ['Sun', 'Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat'];

        const fiveDayForecast = jsObject.list.filter(forecast => forecast.dt_txt.includes('18:00:00'));
     console.log(fiveDayForecast);

        fiveDayForecast.forEach( x => {
            let d = new Date(x.dt_txt);
            console.log(d);
            const dayofWeek = ['Sun', 'Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat'];
            
            document.getElementById(`dayofWeek${day+1}`).textContent = dayofWeek[d.getDay()];
            document.getElementById(`forecast${day+1}`).textContent = x.main.temp;
            day++
        });
    
    });