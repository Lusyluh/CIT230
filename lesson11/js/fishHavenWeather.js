const apiURL = 'https://api.openweathermap.org/data/2.5/weather?id=5585010&APPID=cbd2cdfdd1f438f29af3417a193151ae&units=imperial';

fetch(apiURL)
    .then((response) => response.json())
    .then((cwObject) => {
        console.log(cwObject); //cw stands for current weather

        document.getElementById('currently').textContent = cwObject.weather[0].description;
        document.getElementById('temp').textContent = cwObject.main.temp.toFixed(0) + "°F";
        document.getElementById('windSpeed').textContent = cwObject.wind.speed + "mph";
        document.getElementById('humidity').textContent = cwObject.main.humidity + "%";
//wind chill calculations
var temp = cwObject.main.temp;
var ws = cwObject.wind.speed; //ws stands for wind speed
if (temp <= 50 && ws >= 3 ){
    var factor = 35.74 + 0.6215*temp - (35.75* Math.pow(ws,0.16)) + 0.4275 *temp*(Math.pow(ws,0.16));
    document.getElementById('windChill').innerHTML = factor.toFixed(0) + "°F";
}
else {
    document.getElementById('windChill').innerHTML = "N/A";
} 

    });
const fivedayURL = 'https://api.openweathermap.org/data/2.5/forecast?id=5585010&APPID=cbd2cdfdd1f438f29af3417a193151ae&units=imperial';

fetch(fivedayURL)
    .then((response) => response.json())
    .then((jsObject) =>{
        console.log(jsObject);

        var dayNum = 1;
        for( let i = 0; i < jsObject.list.length; i++){
        if(jsObject.list[i].dt_txt.includes("18:00:00")){
            let TimeOfData = jsObject.list[i].dt;
            let currentDate = new Date(TimeOfData * 1000);
            let weekday = ['Sun','Mon','Tues','Wed','Thur','Fri','Sat'];
            let dayofWeek = weekday[currentDate.getDay()]
            document.getElementById('day'+ dayNum).textContent = dayofWeek;
            

            const imagesrc = 'https://openweathermap.org/img/w/' + jsObject.list[i].weather[0].icon + '.png';
            const desc = jsObject.list[i].weather[0].description;

            document.getElementById('icon'+ dayNum).setAttribute('src',imagesrc);
            document.getElementById('icon'+ dayNum).setAttribute('alt',desc);
            document.getElementById('temp' + dayNum).textContent = Math.round(jsObject.list[i].main.temp_max) + "°F";
            dayNum++;


        }

        }
    });
    const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';
    fetch(requestURL)
    .then(function (response){
        return response.json();
    })
    .then(function (jsonObject){
        console.table(jsonObject);

        const towns = jsonObject['towns'];
        
        for (let i = 0; i < towns.length;i++){
            if (towns[i].name == "Fish Haven"){
                let events = document.createElement('section'); 
                let h3 = document.createElement('h3')
                let event1 = document.createElement('p')
                let event2 = document.createElement('p')
                let event3 = document.createElement('p')
            

                h3.textContent = 'Exciting Events in ' + towns[i].name + '!';
                event1.textContent = towns[i].events[0];
                event2.textContent = towns[i].events[1];
                event3.textContent = towns[i].events[2];

                events.appendChild(h3);
                events.appendChild(event1);
                events.appendChild(event2);
                events.appendChild(event3);
                
            
                document.querySelector('div.eventsData').appendChild(events);

            }
        }
    });