function createHTML(cityName, tempValue, humidity){

	var htmlString = '<div class="setBorder">' +
						'<div class="weatherCity">' + cityName + '</div>' +
						'<div class="weatherData">' + tempValue + '</div>' +
						'<div class="humidityData">' + humidity + '</div>' +

					'</div>';
	$('#weatherResults').append(htmlString);
}

var getWeather = function(city){

	var searchURL = 'http://api.openweathermap.org/data/2.5/weather?q=' + city + '&units=imperial&APPID=9af9987d0f66079a5baa5b00f7f58162';
	$.ajax({
		url: searchURL,
		type: 'GET',
		dataType: 'json',
		error: function(data){
		},
		success: function(data){
			var theCity = data.name;
			var theTemp = Math.round(data.main.temp);
			var theHumidity = Math.round(data.main.humidity);
			console.log("HI I AM HERE", theHumidity);
			createHTML(theCity, theTemp+'&#8457;','Humidity: '+theHumidity);

		}
	});
};

$(document).ready(function(){
	getWeather("Fresno");
	getWeather("Honolulu");
	getWeather("Sunnyvale");
	getWeather("Los Angeles");
	getWeather("Sacramento");

});
