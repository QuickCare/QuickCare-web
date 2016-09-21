// /*function newXmlHttpRequest(){
// 	if(window.XMLHttpRequest)
// 		return new XMLHttpRequest();
// 	return new ActiveXObject("Microsoft.XMLHTTP");
// }

// function test(){
// 	alert("ok");
// }

// function displayMap(){
// 	initialiser();
// 	var map = document.getElementById("contener");
// 	var request = newXmlHttpRequest();
// 	request.onreadystatechange = function(){
// 		if(request.readyState == 4 && request.status == 200){
// 			map.innerHTML = request.responseText;
// 		}
// 	}
// 	request.open("GET", "map.php");
// 	request.send();
// };*/

var app = app || {};

app.home = { 

	init : function() {
		this.test.init();
	},

	test : {

		init : function() {
			this.bindUIActions();
		},

		bindUIActions : function() {
			$(window).on("load", function() {
				// app.home.initialiser.init();
				 $.ajax({
				 	url : 'map.php',
				 	type : "GET",
					dataType : "html",
				success : function(res, statut){
				// 	//success: function(data) {
				// 	//	data = JSON.parse(data);
					alert(res);
				// 		//$("#contener").html(data.res);

					$("#contener").html(res);
				 	}

				});
			});
		}
	},

	// initialiser : {

	// 	init : function() {
	// 		this.bindUIActions();
	// 	},

	// 	bindUIActions : function() {

	// 	}
	// }
}

app.home.init();

