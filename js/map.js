function geocode(lat, lng){
	var geocoder = new google.maps.Geocoder();
	var latlng = new google.maps.LatLng(lat, lng);
	geocoder.geocode({'latLng': latlng}, function(results, status) {
        if (status == google.maps.GeocoderStatus.OK) {
        	var adresse = results[0].formatted_address;
        	var champ = document.getElementsByName("adr_depart")[0];
        	var champ2 = document.getElementsByName("adr_depart")[1];
        	champ.value = adresse;
        	champ2.value = adresse;
        }
	});
}

function geolocation() {
    
   // On vérifie si le navigateur supporte la géolocalisation
	if(navigator.geolocation) {
    
		function hasPosition(position) {
			// Instanciation
			var point = new google.maps.LatLng(position.coords.latitude, position.coords.longitude),
			
			// Ajustage des paramètres
			myOptions = {
			zoom: 13,
			center: point,
			mapTypeId: google.maps.MapTypeId.ROADMAP
			},
			
			// Envoi de la carte dans la div
			mapDiv = document.getElementById("carte"),
			map = new google.maps.Map(mapDiv, myOptions),
			
			marker = new google.maps.Marker({
				position: point,
				map: map,
				// Texte du point
				title: "Votre Position",
				icon: "img/location.png"
			});
			var lat = position.coords.latitude;
			var lng = position.coords.longitude;

			geocode(lat, lng);
			display_hospitals(map);

		}

		function display_hospitals(carte) {
			
			var vert = new google.maps.Marker({
				position: new google.maps.LatLng(48.848926, 2.382784),
				map: carte,
				icon: "img/vert.jpg"
			});

			setTimeout(function() {
				var mv = new google.maps.Marker({
					position: new google.maps.LatLng(48.848926, 2.382784),
					map: carte,
					icon: "img/hopital.png"
				});
				google.maps.event.addListener(mv,'click', function(event) {
					document.getElementById("pourc_remp").innerHTML = "28";
					document.getElementById("hopital_name").innerHTML = "Vert";
					document.getElementById("popup-hopital").setAttribute('class', '');
					document.getElementById("bg-black-popup").setAttribute('class', '');
				});
			}, 50);


			var orange = new google.maps.Marker({
				position: new google.maps.LatLng(48.844435, 2.415998),
				map: carte,
				icon: "img/orange.jpg"
			});

			setTimeout(function() {
				var mo = new google.maps.Marker({
					position: new google.maps.LatLng(48.844435, 2.415998),
					map: carte,
					icon: "img/hopital.png"
				});
				google.maps.event.addListener(mo,'click', function(event) {
					document.getElementById("pourc_remp").innerHTML = "56";
					document.getElementById("hopital_name").innerHTML = "Orange";
					document.getElementById("popup-hopital").setAttribute('class', '');
					document.getElementById("bg-black-popup").setAttribute('class', '');
				});
			}, 50);


			var rouge = new google.maps.Marker({
				position: new google.maps.LatLng(48.849779, 2.352416),
				map: carte,
				icon: "img/rouge.jpg"
			});

			setTimeout(function() {
				var mr = new google.maps.Marker({
					position: new google.maps.LatLng(48.849779, 2.352416),
					map: carte,
					icon: "img/hopital.png"
				});
				google.maps.event.addListener(mr,'click', function(event) {
					document.getElementById("pourc_remp").innerHTML = "84";
					document.getElementById("hopital_name").innerHTML = "Rouge";
					document.getElementById("popup-hopital").setAttribute('class', '');
					document.getElementById("bg-black-popup").setAttribute('class', '');
				});
			}, 50);

		}
		var pos = navigator.geolocation.getCurrentPosition(hasPosition);

	}

}

function getServices(){

	$.ajax({
		type: 'GET',
		url: 'http://127.0.0.1:666/service',
		success: function(response){
			for(var i = 0; i<response.length; i++){
				$('#urgences_select').append("<option value='"+response[i]['name']+"'>"+response[i]['name']+"</option>");
			}
		}
	});

}