var app = app || {};

app.home = { 

	init : function() {
		this.closePopup.init();
		this.manageFormTransport.init();
		this.selectDest.init();
	},

	closePopup : {

		init : function() {
			this.bindUIActions();
		},

		bindUIActions : function() {
			
			$(document).on('click', '#close-popup-hopital', function() {
				$('#bg-black-popup').addClass("none");
				$('#popup-hopital').addClass("none");
			});

			$(document).on('click', '#bg-black-popup', function() {
				$('#bg-black-popup').addClass("none");
				$('#popup-hopital').addClass("none");
			});

		}
	},

	manageFormTransport : {

		init : function() {
			this.bindUIActions();
		},

		bindUIActions : function() {

			$("#submit_transport").click( function() {
	
				var datehour = $("#datepicker").val(); // Recuperation de la value
				$('#myModal').modal('hide');
				
				if(!datehour){

					$("#datepicker").css('border', '1px solid red');

				}else{

					var date = datehour.split("-")[0]; // Recuperation de la partie date
					var day = date.split("/")[0];	// Recuperation du jour
					var month = date.split("/")[1]; // Recuperation du mois
					var year = date.split("/")[2];	// Recuperation de l'annee

					var modal_date = document.getElementById("date_chauffeur");
					modal_date.innerHTML = day + "/" + month + "/" + year; 

					var hour_ = datehour.split("-")[1]; // Recuperation de la partie heure
					var hour = hour_.split(":")[0];	// Recuperation de l'heure
					var min = hour_.split(":")[1]; // Recuperation des minutes

					var modal_heure = document.getElementById("heure_chauffeur");
					modal_heure.innerHTML = hour + ":" + min;

					var adresse_depart = $("[name='adr_depart']").val(); // Recuperation de l'adresse de départ

					if(!adresse_depart){
						
						$("[name='adr_depart']").css('border', '1px solid red');
					}else{
						
						var modal_depart = document.getElementById("lieu_depart");
						modal_depart.innerHTML = adresse_depart; 

						var adresse_arrivee = $("[name='adr_arrivee']").val(); // Recuperation de l'adresse d'arrivée

						if(!adresse_arrivee){

						$("[name='adr_arrivee']").css('border', '1px solid red');
						}else{

							var modal_arrivee = document.getElementById("lieu_arrivée");
							modal_arrivee.innerHTML = adresse_arrivee; 
							$('#myModal').modal('show');
						
						}
						

					}	

				}
				
			});

		}

	},

	selectDest : {

		init : function() {
			this.bindUIActions();
		},

		bindUIActions : function() {
			
			$(document).on('click', '#select_dest', function() {
				$('#bg-black-popup').addClass("none");
				$('#popup-hopital').addClass("none");
			});

		}
	}
}

app.home.init();

