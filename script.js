var APIKey = "8ba3c018f452a9c2616cb1d28059dd82"
var searchButton = document.getElementById("search-button")
var input = document.querySelector(".input-box")
var dashboard = document.getElementById("dashboard");


searchButton.addEventListener('click', latlonApi);


function latlonApi() {
    var search = input.value
    var URL = "http://api.openweathermap.org/geo/1.0/direct?q=" + search + "&limit=1&appid=8ba3c018f452a9c2616cb1d28059dd82"
    fetch(URL)
        .then(function (data) {
    return data.json();
    }) .then(function (geoCode) {
        console.log(geoCode)

    var weatherURL = "https://api.openweathermap.org/data/2.5/onecall?lat=" + geoCode[0].lat + "&lon=" + geoCode[0].lon + "&appid=8ba3c018f452a9c2616cb1d28059dd82"
    fetch(weatherURL)
        .then(function (data) {
    return data.json();
    }) .then(function (weatherData) {
        console.log(weatherData);
    } 
    )
}) 
}

function displayWeather(data) {
    
}