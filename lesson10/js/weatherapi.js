const apiURL = 'https://api.openweathermap.org/data/2.5/weather?id=5604473&APPID=cbd2cdfdd1f438f29af3417a193151ae&units=imperial';

fetch(apiURL)
    .then((response) => response.json())
    .then((jsonObject) => {
        console.log(jsonObject);

        document.getElementById('current-temp').textContent = jsonObject.main.temp;
        
        const imagesrc = 'https://openweathermap.org/img/w/' + jsonObject.weather[0].icon + '.png';
        const desc = jsonObject.weather[0].description;

        document.getElementById('imagesrc').textContent = imagesrc;
        document.getElementById('icon').setAttribute('src',imagesrc);
        document.getElementById('icon').setAttribute('alt',desc);

    });
    

        

