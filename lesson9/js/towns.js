const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
    .then(function (response){
        return response.json();
    })
    .then(function (jsonObject){
        console.table(jsonObject);

        const towns = jsonObject['towns'];
        
        for (let i = 0; i < towns.length;i++){
            if (towns[i].name == "Preston" && towns[i].name == "Fish Haven" && towns[i].name == "Soda Springs"){
                let card = document.createElement('section'); //each town section
                let h2 = document.createElement('h2')
                let motto = document.createElement('h3')
                let yearFounded = document.createElement('p')
                let currentPopulation = document.createElement('p')
                let averageRainfall = document.createElement('p')
                let photo = document.createElement('img')

                h2.textContent = towns[i].name;
                motto.textContent = towns[i].motto;
                yearFounded.textContent = 'Year Founded: ' + towns[i].yearFounded;
                currentPopulation.textContent = 'Population: ' + towns[i].currentPopulation;
                averageRainfall.textContent = 'Annual Rain: ' + towns[i].averageRainfall;
                photo.setAttribute('src', towns[i].photo);

                card.appendChild(h2);
                card.appendChild(motto)
                card.appendChild(yearFounded)
                card.appendChild(currentPopulation)
                card.appendChild(averageRainfall)
                card.appendChild(photo)
                document.querySelector('div.townData').appendChild(card);

            }
            
        }
    });
