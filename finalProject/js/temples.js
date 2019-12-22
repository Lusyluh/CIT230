const requestURL = 'https://raw.githubusercontent.com/Lusyluh/Lusyluh.github.io/master/lesson13/temples.json';

fetch(requestURL)
    .then(function (response){
        return response.json();
    })
    .then(function (jsonObject){
        console.table(jsonObject);

        const temples = jsonObject['temples'];
        
        for (let i = 0; i < temples.length;i++){
                  
            let card = document.createElement('section');
            let h2 = document.createElement('h2')
            let announced = document.createElement('p')
            let groundbreaking = document.createElement('p')
            let dedicated = document.createElement('p')
            let services = document.createElement('p')
            let image = document.createElement('img')
            let closures = document.createElement('section');
            let h3 = document.createElement('h3')
            let thisYear = document.createElement('p')
            let nextYear = document.createElement('p')

            h2.textContent = temples[i].name;
            image.setAttribute('src', temples[i].imageurl);
            announced.textContent = 'Announced: ' + temples[i].announced;
            groundbreaking.textContent = 'Ground Breaking: ' + temples[i].groundbreaking;
            dedicated.textContent = 'Dedicated: ' + temples[i].dedicated;
            services.textContent = 'Services: ' + temples[i].services[i];
            h2.textContent = 'TEMPLE CLOSURES'
            thisYear.textContent = '2019: ' + temples[i].thisYear;
            nextYear.textContent = '2020: ' + temples[i].nextYear[i];
            

            card.appendChild(h2);
            card.appendChild(announced)
            card.appendChild(groundbreaking)
            card.appendChild(dedicated)
            card.appendChild(image)

            closures.appendChild(h3);
            closures.appendChild(thisYear)
            closures.appendChild(nextYear)
            document.querySelector('div.temple_closure').appendChild(closures);
            document.querySelector('div.temples').appendChild(card);
        }
    });
