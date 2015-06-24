window.onload = function() {
	
	var latLng = new google.maps.LatLng(-23.581474099999998, -46.672693699999996);

	var map = new google.maps.Map(document.querySelector('.mapa'), {
		zoom: 16,
		center: latLng
	});

	var marker = new google.maps.Marker({
		position: latLng,
		map: map,
		title: 'Here !!!'
	});
};