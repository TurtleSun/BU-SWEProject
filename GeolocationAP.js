// URL and KEY
const API_KEY = 'key';
const API_URL = 'https://ipgeolocation.abstractapi.com/v1/?api_key=${API_KEY}'



/**
 * API call: GET request to fetch location
 * @returns The response JSON.
 */

async function apiCity () {

    var url = API_URL + '&fields=city'

   const response = await fetch(API_URL, {
        method: 'GET',
        headers: {
            'message': 'good'
        }

   })
    

    console.log('API call: Geolocation ');
    const data = await response.json();
    console.log(data)

    return data;

   }

async function city(response) {
    city = response;
    var data = await apiCity();

   }


  /*  $.getJSON("https://ipgeolocation.abstractapi.com/v1/?api_key=54589c2eef56405591af2ac0a72f8eba", function(data) {
       console.log(data.ip_address);
       console.log(data.country);
   }) */
