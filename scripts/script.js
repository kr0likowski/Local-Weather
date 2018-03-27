var lati;
var long;
var urly;
$(document).ready(function(){

    getCoords();

});
function getCoords(){
    if(navigator.geolocation){   navigator.geolocation.getCurrentPosition(function(position){
        var lati = position.coords.latitude;
        var long = position.coords.longitude;
        getWeather(lati,long);
    });
    }
    else{
        alert("Geolocation is not supported by browser");
    }
}
function getWeather(lati, long) {
    var urly= 'https://fcc-weather-api.glitch.me/api/current?lat='+lati+'&lon='+long;
    $.ajax({
        url: urly, success: function (result) {
            currentTempInCelsius = Math.round(result.main.temp * 10) / 10;
            $("#x").text(currentTempInCelsius + " " + String.fromCharCode(176));
            $("#y").text(result.name);
            $("#z").text(result.weather[0].main);
            $("body").css({"background":"url("+getWeather(result.weather[0].main.toLowerCase())+") no-repeat center fixed","background-size": "cover"});
        }
    });
    function getWeather(weather){
        switch(weather){
            case 'snow':     return "https://bit.ly/29bsQqH";
                break;
            case 'hail':
                return "https://bit.ly/29gktuZ";
                break;
            case 'clear':
                return "https://bit.ly/29m1Toy";
                break;
            case 'cloudy':
                return "https://bit.ly/29nzWgI";
                break;
            case 'thunderstorm': return "https://bit.ly/29DoQjR";
                break;
            case 'rain':
                return "https://bit.ly/29fBHcu";
                break;
            case 'fog': return "https://bit.ly/29b6Wrp";
                break;
            case 'dust':
                return "https://bit.ly/29lNRCb";
                break;
        }
    }
}


