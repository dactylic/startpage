# Startpage
Customized homepage written in HTML/CSS/Javascript. Features temperature, condition, wind speed, and a formatted list of relevant links.

This is the first time in about a decade that I've dabbled in HTML / CSS, and my first time ever using / implementing JavaScript in a meaningful way. I'm sure there are things that could be changed and improved here, so over time as I learn more in these disciplines I'll return and improve my work.

# Weather 
Startpage uses AJAX and JQuery to retrieve weather data from OpenWeather (https://home.openweathermap.org/) and displays the temperature, condition, and windspeed at the location of the user. 

I don't know much about JavaScript so I followed the guide here: https://medium.com/weekly-webtips/build-a-weather-widget-using-javascript-65717a929c24. I used the OpenWeather API to add the wind measurement to my version.

You must get your own API key from OpenWeather and add it to the API_KEY variable in weather.js in order for it to work.

# Links
I have set the default links to be the sites I most commonly visit / open when I load Firefox. If you want to change them, in startpage.html change the links wrapped in "<a href= </a>" to whatever you want. 

# Example

Default Startpage looks like this:

![eIPglDnp16](https://user-images.githubusercontent.com/94248701/162595517-6f3cbc24-f5ce-4e3c-b82f-4ad104d66272.png)
