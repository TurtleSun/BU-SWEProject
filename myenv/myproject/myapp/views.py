from django.shortcuts import render

# Create your views here.
from django.http import JsonResponse
import requests

def get_weather_data(location):
    url = 'https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/{LOCATION}'
    api_key = 'A99EB3XPFQ52CFFLVUBJ7ASWL'

    # Make the API call
    response = requests.get(url.format(LOCATION=location), params={'key': api_key})

    if response.status_code == 200:
        # API call was successful
        data = response.json()
        # Process the weather data
        # ...

        return data  # Return the weather data
    else:
        # API call failed
        error_message = 'Failed to fetch weather data'
        # Handle the error or display an appropriate message
        # ...

        return {'error': error_message}  # Return the error message

def process_weather_data_day(weather_data):
    if weather_data and 'days' in weather_data:
        for day in weather_data['days']:
            date = day['datetime']
            max_temp = day['tempmax']
            min_temp = day['tempmin']
            wind_speed = day['windspeed']
            humidity = day['humidity']
            uv_index = day['uvindex']

            # Process the day's data or perform any other operations
            print(f"Date: {date}")
            print(f"Daily Max Temperature: {max_temp}")
            print(f"Daily Min Temperature: {min_temp}")
            print(f"Daily Wind Speed: {wind_speed}")
            print(f"Daily Humidity: {humidity}")
            print(f"Daily UV Index: {uv_index}")
            print('------')
    else:
        print('Weather data is not available or incomplete.')


def process_weather_data_hour(weather_data):
    if weather_data and 'hours' in weather_data:
        for hour in weather_data['hours']:
            time = hour['datetime']
            temperature = hour['temp']
            wind_speed = hour['windspeed']
            humidity = hour['humidity']
            uv_index = hour['uvindex']

            # Process the hour's data or perform any other operations
            print(f"Hourly Time: {time}")
            print(f"Hourly Temperature: {temperature}")
            print(f"Hourly Wind Speed: {wind_speed}")
            print(f"Hourly Humidity: {humidity}")
            print(f"Hourly UV Index: {uv_index}")
            print('------')
    else:
        print('Weather data is not available or incomplete.')

def your_view(request):
    location = 'Boston'  # Replace with your desired location
    weather_data = get_weather_data(location)

    process_weather_data_day(weather_data)
    process_weather_data_hour(weather_data)

    # Return the weather data as a JSON response
    return JsonResponse(weather_data)
