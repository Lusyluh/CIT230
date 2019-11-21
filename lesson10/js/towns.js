const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
    .then(function (response){
        return response.json();
    })
    .then(function (jsonObject){
        console.table(jsonObject);

        const towns = jsonObject['towns'];
        
        for (let i = 0; i < towns.length;i++){
            if (towns[i].name == "Preston" || towns[i].name == "Fish Haven" || towns[i].name == "Soda Springs"){
                let town = document.createElement('section'); //each town section
                let h2 = document.createElement('h2')
                let motto = document.createElement('h4')
                let yearFounded = document.createElement('p')
                let currentPopulation = document.createElement('p')
                let averageRainfall = document.createElement('p')
                let info = document.createElement('span')
                let photo = document.createElement('img')

                h2.textContent = towns[i].name;
                motto.textContent = towns[i].motto;
                yearFounded.textContent = 'Year Founded: ' + towns[i].yearFounded;
                currentPopulation.textContent = 'Population: ' + towns[i].currentPopulation;
                averageRainfall.textContent = 'Annual Rain: ' + towns[i].averageRainfall;
                photo.src = "images/" + towns[i].photo;
                photo.alt = "Image of " + towns[i].name;

                info.appendChild(h2);
                info.appendChild(motto);
                info.appendChild(yearFounded);
                info.appendChild(currentPopulation);
                info.appendChild(averageRainfall);
                town.appendChild(info);
                town.appendChild(photo);
                document.querySelector('div.townData').appendChild(town);

            }
            
        }
    });
