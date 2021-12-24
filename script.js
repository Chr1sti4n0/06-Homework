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
        displayForecast2(weatherData);
        displayForecast3(weatherData);
        displayForecast4(weatherData);
        displayForecast5(weatherData);
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

    currentDate1.textContent = moment().add(1, 'days').format('L');

    var temperature1 = document.createElement("p");

    temperature1.textContent = "Temp: " + data.daily[0].temp.day;

    var windSpeed1 = document.createElement("p");

    windSpeed1.textContent = "Wind Speed: " + data.daily[0].wind_speed;

    var humidity1 = document.createElement("p");

    humidity1.textContent = "Humidity: " + data.daily[0].humidity;

    mainCard1.append(currentDate1, temperature1, windSpeed1, humidity1);

        //Append display-weather to temperature
        $("#display-forecast1").append(mainCard1);
        console.log(data);
}

function displayForecast2(data) {
    $("#display-forecast2").empty();
        
    var mainCard2 = document.createElement("div");

    var currentDate2 = document.createElement("h3");

    currentDate2.textContent = moment().add(2, 'days').format('L');

    var temperature2 = document.createElement("p");

    temperature2.textContent = "Temp: " + data.daily[1].temp.day;

    var windSpeed2 = document.createElement("p");

    windSpeed2.textContent = "Wind Speed: " + data.daily[1].wind_speed;

    var humidity2 = document.createElement("p");

    humidity2.textContent = "Humidity: " + data.daily[1].humidity;

    mainCard2.append(currentDate2, temperature2, windSpeed2, humidity2);

        //Append display-weather to temperature
        $("#display-forecast2").append(mainCard2);
        console.log(data);
}

function displayForecast3(data) {
    $("#display-forecast3").empty();
        
    var mainCard3 = document.createElement("div");

    var currentDate3 = document.createElement("h3");

    currentDate3.textContent = moment().add(3, 'days').format('L');

    var temperature3 = document.createElement("p");

    temperature3.textContent = "Temp: " + data.daily[2].temp.day;

    var windSpeed3 = document.createElement("p");

    windSpeed3.textContent = "Wind Speed: " + data.daily[2].wind_speed;

    var humidity3 = document.createElement("p");

    humidity3.textContent = "Humidity: " + data.daily[2].humidity;

    mainCard3.append(currentDate3, temperature3, windSpeed3, humidity3);

        //Append display-weather to temperature
        $("#display-forecast3").append(mainCard3);
        console.log(data);
}

function displayForecast4(data) {
    $("#display-forecast4").empty();
        
    var mainCard4 = document.createElement("div");

    var currentDate4 = document.createElement("h3");

    currentDate4.textContent = moment().add(4, 'days').format('L');

    var temperature4 = document.createElement("p");

    temperature4.textContent = "Temp: " + data.daily[3].temp.day;

    var windSpeed4 = document.createElement("p");

    windSpeed4.textContent = "Wind Speed: " + data.daily[3].wind_speed;

    var humidity4 = document.createElement("p");

    humidity4.textContent = "Humidity: " + data.daily[3].humidity;

    mainCard4.append(currentDate4, temperature4, windSpeed4, humidity4);

        //Append display-weather to temperature
        $("#display-forecast4").append(mainCard4);
        console.log(data);
}

function displayForecast5(data) {
    $("#display-forecast5").empty();
        
    var mainCard5 = document.createElement("div");

    var currentDate5 = document.createElement("h3");

    currentDate5.textContent = moment().add(5, 'days').format('L');

    var temperature5 = document.createElement("p");

    temperature5.textContent = "Temp: " + data.daily[4].temp.day;

    var windSpeed5 = document.createElement("p");

    windSpeed5.textContent = "Wind Speed: " + data.daily[4].wind_speed;

    var humidity5 = document.createElement("p");

    humidity5.textContent = "Humidity: " + data.daily[4].humidity;

    mainCard5.append(currentDate5, temperature5, windSpeed5, humidity5);

        //Append display-weather to temperature
        $("#display-forecast5").append(mainCard5);
        console.log(data);
}