const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
            const towns = jsonObject['towns'];

            for (let i = 0; i < towns.length; i++) {
                let card = document.createElement('section');
                let info = document.createElement('div');
                let h2 = document.createElement('h2');
                let mottoP = document.createElement("h4");
                let year = document.createElement('p');
                let population = document.createElement('p');
                let rainfall = document.createElement('p');
                let img = document.createElement('img');
                if (towns[i].name == "Soda Springs" || towns[i].name == "Fish Haven" || towns[i].name == "Preston") {

                    h2.textContent = `${towns[i].name}`;
                    mottoP.textContent = `${towns[i].motto}`;
                    year.textContent = `Year Founded: ${towns[i].yearFounded}`;
                    population.textContent = `Current Population: ${towns[i].currentPopulation}`;
                    rainfall.textContent = `Average Rainfall: ${towns[i].averageRainfall}`;

                    img.setAttribute('src', `images/${towns[i].photo}`);
                    img.setAttribute('alt', `Photo from ${towns[i].name}!`)
                    card.appendChild(info)
                    info.appendChild(h2);
                    info.appendChild(mottoP);
                    info.appendChild(year);
                    info.appendChild(population);
                    info.appendChild(rainfall);
                    card.appendChild(img);

                    document.querySelector('div.towncards').appendChild(card);
                }
            }
            });