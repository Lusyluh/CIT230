const apiURL = 'https://api.openweathermap.org/data/2.5/forecast?id=5604473&APPID=cbd2cdfdd1f438f29af3417a193151ae&units=imperial';

fetch(apiURL)
    .then(function (response){
        return response.json();
    })
    .then(function (jsonObject){
        console.table(jsonObject);
    });

        

