onst requestURL = 'https://raw.githubusercontent.com/Lusyluh/Lusyluh.github.io/master/lesson13/temples.json';

fetch(requestURL)
    .then(function (response){
        return response.json();
    })
    .then(function (jsonObject){
        console.table(jsonObject);

        const temples = jsonObject['temples'];
        
        for (let i = 0; i < temples.length;i++){
            if ((temples[i].name == "Adelaide Australia Temple") && (temples[i].name == "Adelaide Australia Temple") && temples[i].name == "Adelaide Australia Temple") && (temples[i].name == "Adelaide Australia Temple")){

            
                let card = document.createElement('section');
                let h2 = document.createElement('h2')
                let announced = document.createElement('p')
                let groundbreaking = document.createElement('p')
                let dedicated = document.createElement('p')
                let service1 = document.createElement('p')
                let service2 = document.createElement('p')

                let image = document.createElement('img')
                
                    h2.textContent = temples[i].name;
                    announced.textContent = 'Announced: ' + temples[i].announced;
                    groundbreaking.textContent = 'Ground Breaking: ' + temples[i].groundbreaking;
                    dedicated.textContent = 'Dedicated: ' + temples[i].dedicated;
                    service1.textContent = 'Services: ' + temples[i].services[0];
                    image.setAttribute('src', temples[i].imageurl);

                    card.appendChild(h2);
                    card.appendChild(announced)
                    card.appendChild(groundbreaking)
                    card.appendChild(dedicated)
                    card.appendChild(service1)
                    card.appendChild(image)
                    document.querySelector('div.temples').appendChild(card);

            }

            
            
            
            
            
            
            

            
        }
    });
