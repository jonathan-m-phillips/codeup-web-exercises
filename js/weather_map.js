"use strict";

ajaxRequest(29.4241, -98.4936)

mapboxgl.accessToken = mapboxKey;
var coordinates = document.getElementById('coordinates');
var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    center: [-98.4936, 29.4241],
    zoom: 7
});


var marker = new mapboxgl.Marker({
    draggable: true
})
    .setLngLat([-98.4936, 29.4241])
    .addTo(map);

function reverseGeocode (lat, long) {
    $.get(`https://api.mapbox.com/geocoding/v5/mapbox.places/${long},${lat}.json`, {
        access_token: mapboxKey,
        types: "place"
    }).done (function (data) {
        $('#place').html(data.features[0].place_name)
    });
}


function onDragEnd() {
    var lngLat = marker.getLngLat();
    coordinates.style.display = 'block';
    coordinates.innerHTML =
        'Longitude: ' + lngLat.lng + '<br />Latitude: ' + lngLat.lat;
    ajaxRequest(lngLat.lat, lngLat.lng)
}

$('#gbutton').click(function (e){
    e.preventDefault();
    var htmlString = $('#geokode').val();
    geocode(htmlString, mapboxKey).then(function (coordinates){
        console.log(coordinates)
        ajaxRequest(coordinates[1], coordinates[0]);
        map.flyTo({
            center: [coordinates[0], coordinates[1]]
        })
    })
})

marker.on('dragend', onDragEnd);



// using jquery to get the open weather map api
function ajaxRequest(lat, long) {
    $.get("http://api.openweathermap.org/data/2.5/onecall", {
        APPID: OPEN_WEATHER_KEY,
        lat: lat,
        lon: long,
        units: "imperial",
        part: "daily"
    }).done(function (data) {


            // SECTION 1 - CURRENT DATE

            const currentTime = data.current.dt;
            const currentDay = function () {
                let currentDayNumber = (Math.floor(currentTime / 86400) + 4) % 7;
                let currentWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
                let currentDays = currentWeek[currentDayNumber];
                return (currentDays);
            };

            // converting the times
            const convertingTime = function (currentTime) {
                let newDate = new Date(currentTime * 1000);
                let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
                let year = newDate.getFullYear();
                let month = months[newDate.getMonth()];
                let date = newDate.getDate();
                let time = month + ' ' + date + ' ' + year;
                return (time);
            }

            const asOfFunction = function (value) {
                let newDate = new Date(currentTime * 1000);
                let hour = newDate.getHours();
                let min = newDate.getMinutes() < 10 ? '0' + newDate.getMinutes() : newDate.getMinutes();
                let asOf = 'as of ' + hour + ':' + min;
                return (asOf);
            }

            const currentMax = Math.max(Math.round(data.daily[0].temp.max * 10) / 10, 2.8).toFixed(1);
            const currentMin = Math.max(Math.round(data.daily[0].temp.min * 10) / 10, 2.8).toFixed(1);
            const currentTemp = Math.max(Math.round(data.current.temp * 10) / 10, 2.8).toFixed(1);
            const currentFeel = Math.max(Math.round(data.current.feels_like * 10) / 10, 2.8).toFixed(1);
            const currentHumid = Math.round(data.current.humidity);
            const currentWind = Math.max(Math.round(data.current.wind_speed * 10) / 10, 2.8).toFixed(1);

            // setting currentDescription as variable for description, then setting the first letter to uppercase
            let currentDescription = '';
            const capitalDescription = function () {
                currentDescription = data.current.weather[0].description[0].toUpperCase() + data.current.weather[0].description.slice(1);
            }
            capitalDescription();

            let forecastSunset = function() {
                let date = new Date(forecastDT.sunset * 1000);
                let options = {
                    hour: 'numeric',
                    minute: 'numeric',
                    hour12: true
                };
                let timeString = date.toLocaleString('en-US', options);
                return timeString;
            }


            // adding current weather
            // $('#current-weather').html('');
            $('#current-weather').html('').append(
                '<div class = "container-fluid">'
                + '<div class="row">'
                + '<div class="jumbotron pt-3 pb-3 mt-3 ml-2" style="width: 30rem;">'
                + '<div class="h1" id="place">' + 'San Antonio, TX' + '</div>'
                + '<div id="current_weather" class="h3">' + currentDay() + ' ' + convertingTime(currentTime) + '</div>'
                + '<div class="h4 mb-3">' + asOfFunction() + ' CST</div>'
                + '<div class="float-right position-absolute" style="left: 305px; top: 155px;"> <img src="http://openweathermap.org/img/w/' + data.current.weather[0].icon + '.png" style="height: 100px"> </div>'
                + '<div class="h5 float-right position-absolute" style="left: 312px; top: 230px;">' + currentDescription + '</div>'
                + '<div class="h5 clearfix"><p class="mr-2 d-inline " style="font-weight: bold">Current: </p>' + currentTemp + '&deg;</div>'
                + '<div class="h5 clearfix"><p class="mr-2 d-inline " style="font-weight: bold">Real Feel: </p>' + currentFeel + '<span>&deg;</span></div>'
                + '<div class="hr-class"> <hr class="my-4"> </div>'
                + '<div class="row">'
                + '<div class="col-8 text-center">'
                + '<div class="col">'
                + '<div class="row at-3">'
                + '<div class="d-flex justify-content-start align-items-center h5"><p class="mb-1 mr-2" style="font-weight: bold">High / Low: </p>' + currentMax + '<span>&deg;</span>' + ' / ' + currentMin + '<span>&deg;</span>' + '</div>'
                + '<div class="d-flex justify-content-start align-items-center h5"><p class="mb-1 mr-2" style="font-weight: bold">Humidity: </p>' + currentHumid + '%</div>'
                + '<br><div class="d-flex justify-content-start align-items-center h5"><p class="mb-1 mr-2" style="font-weight: bold">Wind: </p>' + currentWind + ' mph</div>'
                + '</div>' + '</div>' + '</div>' + '</div>' + '</div>' + '</div>'
            )


            // SECTION 2 - FUTURE FORECAST DATES

            var date = new Date(data.dt * 1000);

            $('#future-weather').html('');

            data.daily.forEach(function (hours, index) {
                //forecast date
                let futureTime = data.daily[index].dt;
                let futureData = data.daily[index];
                let futureDayNumber = (Math.floor(futureTime / 86400) + 4) % 7;
                let futureDay = function () {
                    let daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
                    let futureDays = daysOfWeek[futureDayNumber];
                    return (futureDays);
                };

                let futureDate = function () {
                    let dateData = new Date(futureTime * 1000);
                    let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
                    let year = dateData.getFullYear();
                    let month = months[dateData.getMonth()];
                    let date = dateData.getDate();
                    let time = month + ' ' + date;
                    return (time);
                }

                let futureMax = Math.max(Math.round(data.daily[index].temp.max * 10) / 10, 2.8).toFixed(1);
                let futureMin = Math.max(Math.round(data.daily[index].temp.min * 10) / 10, 2.8).toFixed(1);
                let futureHumid = Math.round(data.daily[index].humidity);
                let futureWind = Math.max(Math.round(data.daily[index].wind_speed * 10) / 10, 2.8).toFixed(1);

                // setting currentDescription as variable for description, then setting the first letter to uppercase
                let futureDescription = '';
                let futureCapitalDescription = function () {
                    currentDescription = data.daily[index].weather[0].description[0].toUpperCase() + data.daily[index].weather[0].description.slice(1);
                }
                futureCapitalDescription();

                if (index > 0 && index < 6) {
                    $('#future-weather').append(
                        '<div class="card mx-1 clearfix" style="width: 20rem;">'
                        + '<div class="card-header h5">' + futureDay() + ' ' + futureDate() + '</div>'
                        + '<img class="picture float-right" src="http://openweathermap.org/img/w/' + data.daily[index].weather[0].icon + '.png" style="height: 80px; width: 80px;">'
                        + '<div class="img-container">'
                        + '<div class="high-low"><p class="mb-1 ml-1 mr-2 d-inline" style="font-weight: bold">High / Low: </p>' + futureMax + '<span>&deg;</span>' + ' / ' + futureMin + '<span>&deg;</span>' + '</div>'
                        + '<div class="humidity"><p class="mb-1 ml-1 mr-2 d-inline" style="font-weight: bold">Humidity: </p>' + futureHumid + '% </div>'
                        + '<div class="wind"><p class="mb-1 ml-1 mr-2 d-inline" style="font-weight: bold">Wind: </p>' + futureWind + ' mph </div>'
                        + '</div>' + '</div>'
                    )
                }

            });
        reverseGeocode(lat, long)
        }
    )
}




