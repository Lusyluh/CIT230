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
    .then((jsObject) =>{
        console.log(jsObject);

        var dayNum = 1;
        for( let i = 0; i < jsObject.list.length; i++){
        if(jsObject.list[i].dt_txt.includes("18:00:00")){
            let uniTime = jsObject.list[i].dt;
            let currentDate = new Date(uniTime * 1000);
            let weekday = ['Sun','Mon','Tues','Wed','Thur','Fri','Sat'];
            let dayofWeek = weekday[currentDate.getDay()]
            document.getElementById('day'+ dayNum).textContent = dayofWeek;
            

            const imagesrc = 'https://openweathermap.org/img/w/' + jsObject.list[i].weather[0].icon + '.png';
            const desc = jsObject.list[i].weather[0].description;

            //document.getElementById('imagesrc').textContent = imagesrc;
            document.getElementById('icon'+ dayNum).setAttribute('src',imagesrc);
            document.getElementById('icon'+ dayNum).setAttribute('alt',desc);
            document.getElementById('temp' + dayNum).textContent = Math.round(jsObject.list[i].main.temp_max) + "°F";
            dayNum++;


        }

        }
    })