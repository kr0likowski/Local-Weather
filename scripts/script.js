var lati;
var long;
var urly;
var backgrounds = {
    snow: "https://bit.ly/29bsQqH",
    hail: "https://bit.ly/29gktuZ",
    clear: "https://bit.ly/29m1Toy",
    cloudy: "https://bit.ly/29nzWgI",
    thunderstorm: "https://bit.ly/29DoQjR",
    rain: "https://bit.ly/29fBHcu",
    fog: "https://bit.ly/29b6Wrp",
    dust: "https://bit.ly/29lNRCb",
}
$(document).ready(function(){
    $('.butt').click(function(){
        getCoords();
    });

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
            $("body").css({"background":"url("+backgrounds.clear+") no-repeat center fixed","background-size": "cover"});
        }
    });
}

