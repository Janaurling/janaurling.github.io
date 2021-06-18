const requestURL = 'https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json';

fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        //console.table(jsonObject);  // temporary checking for valid response and data parsing
        const prophets = jsonObject['prophets'];
        for (let i = 0; i < prophets.length; i++) {
            let card = document.createElement('section');
            let h2 = document.createElement('h2');
            let date = document.createElement('p');
            let place = document.createElement('p');
            let img = document.createElement('img');

            h2.textContent = `${prophets[i].name} ${prophets[i].lastname}`;
            date.textContent = `Birth Date: ${prophets[i].birthdate}`;
            place.textContent = `Birth Place: ${prophets[i].birthplace}`;
            img.setAttribute('src', prophets[i].imageurl);
            img.setAttribute('alt', `The Official portrait of ${prophets[i].name} ${prophets[i].lastname}!`)
            card.appendChild(h2);
            card.appendChild(date);
            card.appendChild(place);
            card.appendChild(img);

            document.querySelector('div.cards').appendChild(card);
        }
    });