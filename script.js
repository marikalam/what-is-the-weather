function createHTML(cityName, tempValue){

	var htmlString = '<div class="setBorder">' +
						'<div class="weatherCity">' + cityName + '</div>' +
						'<div class="weatherData">' + tempValue + '</div>' +
					'</div>';
	$('#weatherResults').prepend(htmlString);
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
			createHTML(theCity, theTemp+'&#8457;');
		}
	});
};

$(document).ready(function(){
	getWeather("Sacramento");
	getWeather("Fresno");
	getWeather("Honolulu");
});
