const API_KEY = J963356MBQTJDELDUP74WUQPA;
var city = null;
const API_URL = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?unitGroup=us&include=fcst&key=${API_KEY}&contentType=json`;

/**
 * API call: GET request to fetch weather data.
 * @returns The response JSON.
 */
async function apiFetch() {
    const response = await fetch(API_URL, {
        method: 'GET',
        headers: {
            'message': 'OK!'
        }
    }).then(response => {
        if (!response.ok) {
          throw response; //check the http response code and if isn't ok then throw the response as an error
        }
                  
        return response.json(); //parse the result as JSON
      
      }).then(response => {
        //response now contains parsed JSON ready for use
        processWeatherData(response);
      
      }).catch((errorResponse) => {
        if (errorResponse.text) { //additional error information
          errorResponse.text().then( errorMessage => {
            //errorMessage now returns the response body which includes the full error message
          })
        } else {
          //no additional error information 
        } 
      });

    console.log('API call: Weather Data');
    const data = await response.json();
    console.log(data);

    return data;
}


async function fetch(response){
    city = response; //can give back an object that can be broken down to give cities and extra
    var data = await apiFetch(); // all here rn won't be here later, instead this should call daily and weekly
    await processWeatherData(data); //based on toggle
}

  function processWeatherData(response) {
    var location=response.resolvedAddress;
    var days=response.days;
    console.log("Location: "+location);
    for (var i=0;i<days.length;i++) {
      console.log(days[i].datetime+": tempmax="+days[i].tempmax+", tempmin="+days[i].tempmin);
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
