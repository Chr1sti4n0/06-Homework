var APIKey = "8ba3c018f452a9c2616cb1d28059dd82"
var searchButton = document.getElementById("search-button")
var input = document.querySelector(".input-box")
var dashboard = document.getElementById("dashboard");

var weatherArray = JSON.parse(localStorage.getItem("state")) || [];


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
        displayData(weatherData);
        displayForecast1(weatherData);
    } 
    )
    //Set new weather array into local storage
    weatherArray.push(search);
    localStorage.setItem("state", JSON.stringify(weatherArray));
}) 
}

// var information = document.createElement('p');
// information.textContent = data.title;

function displayData(data) {
    $("#display-weather").empty();
        //clear previous row
        console.log(data.current);
        var mainCard = document.createElement("div");

        var cityName = document.createElement("h2");

        cityName.textContent = input.value.toUpperCase();

        var currentDate = document.createElement("h2");

        currentDate.textContent = moment().format('L');

        var temperature = document.createElement("p");

        temperature.textContent = "Temp: " + data.current.temp;

        var windSpeed = document.createElement("p");

        windSpeed.textContent = "Wind Speed: " + data.current.wind_speed;

        var humidity = document.createElement("p");

        humidity.textContent = "Humidity: " + data.current.humidity;

        var uvIndex = document.createElement("p");

        uvIndex.textContent = "UV Index: " + data.current.uvi;

        mainCard.append(currentDate, cityName, temperature, windSpeed, humidity, uvIndex);

        //Append display-weather to temperature
        $("#display-weather").append(mainCard);
        console.log(data);
    }

function displayForecast1(data) {
    $("#display-forecast1").empty();
        
    var mainCard1 = document.createElement("div");

    var currentDate1 = document.createElement("h3");

    currentDate1.textContent = moment().format('L');

    var temperature1 = document.createElement("p");

    temperature1.textContent = "Temp: " + data.daily[0].temp;

    var windSpeed1 = document.createElement("p");

    windSpeed1.textContent = "Wind Speed: " + data.daily[0].wind_speed;

    var humidity1 = document.createElement("p");

    humidity1.textContent = "Humidity: " + data.daily[0].humidity;

    mainCard1.append(currentDate1, temperature1, windSpeed1, humidity1);

        //Append display-weather to temperature
        $("#display-forecast1").append(mainCard1);
        console.log(data);
}