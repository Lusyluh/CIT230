const apiURL = 'https://api.openweathermap.org/data/2.5/weather?id=5604473&APPID=cbd2cdfdd1f438f29af3417a193151ae&units=imperial';

fetch(apiURL)
    .then((response) => response.json())
    .then((cwObject) => {
        console.log(cwObject); //cw stands for current weather

        document.getElementById('currently').textContent = cwObject.weather[0].description;
        document.getElementById('temp').textContent = cwObject.main.temp_max;
        document.getElementById('windSpeed').textContent = cwObject.wind.speed;
        document.getElementById('humidity').textContent = cwObject.main.humidity;

    })
const fivedayURL = 'https://api.openweathermap.org/data/2.5/forecast?id=5604473&APPID=cbd2cdfdd1f438f29af3417a193151ae&units=imperial';

fetch(fivedayURL)
    .then((response) => response.json())
    .then((forecastObject) =>{
        console.log(forecastObject);

        var numDays = 1;
        for( let i = 0; i < forecastObject.list.length; i++){
        if(forecastObject.list[i].dt_txt.includes("18:00:00")){
            let weekday = ['Sun','Mon','Tues','Wed','Thur','Fri','Sat'];
            

        }

        }
    })