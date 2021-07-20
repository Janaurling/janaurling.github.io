const requestfile = 'JSON/index.json';

fetch(requestfile)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
            const companies = jsonObject['companies'];

            for (let i = 0; i < companies.length; i++) {
                let card = document.createElement('section');
                let info = document.createElement('div');
                let name = document.createElement('h2');
                let phone = document.createElement("h4");
                let address = document.createElement('p');
                let link = document.createElement('a');
                let img = document.createElement('img');

                    name.textContent = `${companies[i].companyName}`;
                    phone.textContent = `${companies[i].phoneNumber}`;
                    address.textContent = `Address: ${companies[i].address}`;
                    link.textContent = `Company Website`;

                    img.setAttribute('src', `images/${companies[i].logoName}`);
                    img.setAttribute('alt', `${companies[i].companyName} Logo!`)
                    link.setAttribute('href', `${companies[i].link}`)
                    link.setAttribute('target', `_blank`)
                    card.appendChild(info)
                    info.appendChild(name);
                    info.appendChild(phone);
                    info.appendChild(address);
                    info.appendChild(link);
                    card.appendChild(img);

                    document.querySelector('div.directorybusinesscards').appendChild(card);
                }
                for (let i = 0; i < companies.length; i++) {
                    let card = document.createElement('section');
                    let info = document.createElement('div');
                    let name = document.createElement('h2');
                    let phone = document.createElement("h4");
                    let address = document.createElement('p');
                    let link = document.createElement('a');
    
                        name.textContent = `${companies[i].companyName}`;
                        phone.textContent = `${companies[i].phoneNumber}`;
                        address.textContent = `Address: ${companies[i].address}`;
                        link.textContent = `Company Website`;
    
                        link.setAttribute('href', `${companies[i].link}`)
                        link.setAttribute('target', `_blank`)
                        card.appendChild(info)
                        info.appendChild(name);
                        info.appendChild(phone);
                        info.appendChild(address);
                        info.appendChild(link);
    
                        document.querySelector('div.listview').appendChild(card);
                    }
            }
            );

            function toggleGrid() {
                var x = document.getElementById("directorysection2");
                if (x.style.display === "none") {
                  x.style.display = "block";
                } else {
                  x.style.display = "none";
                }
                var a = document.getElementById("lb");
                if (a.style.display === "none") {
                  a.style.display = "block";
                } else {
                  a.style.display = "none";
                }
                var b = document.getElementById("gb");
                if (b.style.display === "block") {
                  b.style.display = "none";
                } else {
                  b.style.display = "block";
                }
                var y = document.getElementById("directorysection3");
                if (y.style.display === "block") {
                  y.style.display = "none";
                } else {
                  y.style.display = "block";
                }
              }