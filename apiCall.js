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
      processWeatherData(data)
    })
    .catch(error => {
      console.error('Error:', error);
    });

  //processWeatherData(weather)
}
function processWeatherData(weatherData) {
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
        const conditions = day.conditions;
  
        // Process the day's data or perform any other operations
        console.log(`Date: ${date}`);
        console.log(`Max Temperature: ${maxTemp}`);
        console.log(`Min Temperature: ${minTemp}`);
        console.log(`Conditions: ${conditions}`);
        console.log('------');
      });
    } else {
      console.log('Weather data is not available or incomplete.');
    }
  
  }
/* async function fetch(){
    //city = response; //can give back an object that can be broken down to give cities and extra
    var data = await getWeather(); // all here rn won't be here later, instead this should call daily and weekly
    if (data){
      console.log("I HAVE DATA!")
    }
   //processWeatherData(data); //based on toggle
} */


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
