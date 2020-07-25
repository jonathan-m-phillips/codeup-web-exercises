"use strict";

// using jquery to get the open weather map api
$.get("http://api.openweathermap.org/data/2.5/onecall", {

    // using open weather api key from my js/keys.js
    APPID: OPEN_WEATHER_KEY,

    // setting lat and long for san antonio
    lat: '29.4241',
    lon: '-98.4936',

    // converting kelvin to fahrenheit
    units: "imperial",

    // setting each day instead of one day
    part: "daily"


}).done(function (data) {

    // logging data to read from
    console.log('weather: ', data)


    let results = data.daily
    console.log(results)
    for (let i = 0; i < 5; i++) {
        var date = new Date(data.daily[i].dt * 1000);
        let highTemp = data.daily[i].temp.max;
        let lowTemp = data.daily[i].temp.min;
        $('.weather').each(function () {
            $('#weather-date').html(date.toDateString());
            $('#high-low-temp').html(Math.round(lowTemp) + "°F / " + Math.round(highTemp) + "°F");
            $('#description').html("Description: " + "<p style='font-weight: bold; display: inline;'>" + data.daily[i].weather[0].description + "</p>")
            $('#humidity').html("Humidity: " + "<p style='font-weight: bold; display: inline;'>" + data.daily[i].humidity + '%</p>');
            $('#wind').html("Wind: " + "<p style='font-weight: bold; display: inline;'>" + data.daily[i].wind_speed + " mph</p>")
            $('#pressure').html("Pressure: " + "<p style='font-weight: bold; display: inline;'>" + data.daily[i].pressure + "</p>")
            console.log(data)
        });
    }
    var date = new Date(data.dt * 1000);


    // let icon = data.weather[0].icon;
    // let iconUrl = "http://openweathermap.org/img/w/" + icon + ".png";-
    //
    // $("#icon").html("<img src='https://openweathermap.org/img/w/" + data.weather[0].icon + ".png'>");

});


