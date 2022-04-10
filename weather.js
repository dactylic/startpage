$(document).ready(function(){
    function getLocation() {
        if(navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(getWeather);
        } else {
            alert('Unable to retrieve location.');
        }
    }
    function getWeather(position){
        let lat = position.coords.latitude;
        let long = position.coords.longitude;
        let API_KEY = "";
        let baseurl = `http://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&appid=${API_KEY}`;

        $.get(baseurl,function(res){
            let data = res.current;
            let temp = Math.floor(1.8*(data.temp -273))+32
            let swind = data.wind_speed;
            let condition = data.weather[0].description;
            
            $('#temp-main').html(`${temp}°`);
            $('#condition').html(condition);
            $('#wind').html(swind);
        })
    
    }

    getLocation();
})