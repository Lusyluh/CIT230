function getWindChill(){
	var temp = parseFloat(document.getElementById('temp').innerHTML);
    var ws = parseFloat(document.getElementById('windSpeed').innerHTML);
    var result = windChillFactor(temp,ws);
    if (temp <= 50 && ws >= 3 ){
        document.getElementById('windChill').innerHTML = result.toFixed(2) + "°F"  ;
    }
    else {
        document.getElementById('windChill').innerHTML = "N/A";
    }   
 }
    
function windChillFactor(tempF, speed){
	var factor = 35.74 + 0.6215*tempF - (35.75* Math.pow(speed,0.16)) + 0.4275 *tempF*(Math.pow(speed,0.16));
    return factor;
    
 }
 window.onload = getWindChill();