//const API_KEY = 'J963356MBQTJDELDUP74WUQPA';
//var city = 'New York, USA';
//const API_URL = 'https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/' + 'Boston' + '?unitGroup=us&include=fcst&key=' + 'J963356MBQTJDELDUP74WUQPA' + '&contentType=json';
const API_URL = "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/Boston?key=J963356MBQTJDELDUP74WUQPA ";
let weather;
/**
 * API call: GET request to fetch weather data.
 * @returns The response JSON.
 */
/* async function apiFetch() {
    const response = await fetch(API_URL, {
        "method": "GET",
        "headers": {
        }
        })
      .then(response => {
        console.log(response);
      })
      .catch(err => {
        console.error(err);
      });
    
    //console.log(response);
    console.log('API call: Weather Data');
    //var data = await response.json();
    //console.log(data);
    return response;
} */

/* async function apiFetch() {
  var response = fetch (API_URL,{
    "method": "GET",
    "headers": {
    }
    })
  .then(response => {
    console.log(response);
  })
  .catch(err => {
    console.error(err);
  });
} */

function getWeather() {
  //const apiKey = 'J963356MBQTJDELDUP74WUQPA';
  //const location = 'New York, USA'; // Replace with your desired location

  //const apiUrl = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${encodeURIComponent(location)}?key=${apiKey}`;

  fetch(API_URL)
    .then(response => response.json())
    .then(data => {
      // Process the weather data here
      console.log(data); // Replace with your own data handling logic
      processWeatherData_Day(data)
    })
    .catch(error => {
      console.error('Error:', error);
    });

  //processWeatherData(weather)
}
function processWeatherData_Day(weatherData) {
  /*   var location=response[address];
    var days=response[days];
    console.log("Location: "+location);
    for (var i=0;i<days.length;i++) {
      console.log(days[i].datetime+": tempmax="+days[i].tempmax+", tempmin="+days[i].tempmin);
    } */
    // Assuming you have the weatherData object with the retrieved data
    if (weatherData && weatherData.days) {
      weatherData.days.forEach((day) => {
        // Access individual day properties
        const date = day.datetime;
        const maxTemp = day.tempmax;
        const minTemp = day.tempmin;
        const windSpeed = day.windspeed;
        const humidity = day.humidity;
        const uvIndex = day.uvindex;
  
        // Process the day's data or perform any other operations
        console.log(`Date: ${date}`);
        console.log(`Daily Max Temperature: ${maxTemp}`);
        console.log(`Daily Min Temperature: ${minTemp}`);
        console.log(`Daily windSpeed: ${windSpeed}`);
        console.log(`Daily Humidity: ${humidity}`);
        console.log(`Daily UV Index: ${uvIndex}`);
        console.log('------');
      },
      //for the last one, to show how processWeatherData_Hour works
      processWeatherData_Hour(weatherData.days[0]));
    } else {
      console.log('Weather data is not available or incomplete.');
    }
}
function processWeatherData_Hour(weatherData) {
    // Assuming you have the weatherData object with the retrieved data
    if (weatherData && weatherData.hours) {
      weatherData.hours.forEach((hour) => {
        // Access individual hour properties
        const time = hour.datetime;
        const temperature = hour.temp;
        const windSpeed = hour.windspeed;
        const humidity = hour.humidity;
        const uvIndex = hour.uvindex;
  
        // Process the hour's data or perform any other operations
        console.log(`Hourly Time: ${time}`);
        console.log(`Hourly Temperature: ${temperature}`);
        console.log(`Hourly Wind Speed: ${windSpeed}`);
        console.log(`Hourly Humidity: ${humidity}`);
        console.log(`Hourly UV Index: ${uvIndex}`);
        console.log('------');
      });
    } else {
      console.log('Weather data is not available or incomplete.');
    }
}
  


  // function for normal
  // toggle for day or weekly -> this will actually be part of the controller.py
  // dayly = hourly forcast
  // a threshold for the wind speed, humidity, and UV index (and obviously, temp)
  function daily(location) {

  }
  // weekly = current + forcast of each day
  // function for "human"
  function weekly(location){
    // weekly should call daily
  }
