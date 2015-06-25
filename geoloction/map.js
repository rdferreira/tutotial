(function(){

	navigator.geolocation.getCurrentPosition(success, fail);

	function success(geoPosition){
		showGeolocation(geoPosition.coords);
	}

	function fail(error){
		console.log(positionError.message);
	}

	function showGeolocation(coords){

		var innerHTML = ''

		for(var property in coords){
			innerHTML += '<h1>' + property.toUpperCase() + ': ' + coords[property] + '</h2>';
					}
		document.body.innerHTML = innerHTML;
	}

})();