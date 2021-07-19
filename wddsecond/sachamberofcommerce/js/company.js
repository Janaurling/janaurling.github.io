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
                if (companies[i].companyName == "SevenTwenty Collective" || companies[i].companyName == "South Texas Blood and Tissue Center" || companies[i].companyName == "OCI Solar Power") {

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

                    document.querySelector('div.businesscards').appendChild(card);
                }
            }
            });