<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
		<meta name="description" content="QuickCare">
		<link rel="stylesheet" href="bootstrap/css/bootstrap.min.css">
		<link rel="stylesheet" href="style.css">
		<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1" />
		<!-- Elément Google Maps indiquant que la carte doit être affiché en plein écran et
		qu'elle ne peut pas être redimensionnée par l'utilisateur -->
		<meta name="viewport" content="initial-scale=1.0, user-scalable=no" />
		<!-- Inclusion de l'API Google MAPS -->
		<!-- Le paramètre "sensor" indique si cette application utilise détecteur pour déterminer la position de l'utilisateur -->
		
		
		<script src="jquery-3.1.0.js"></script>
		
		<script src="code.js"></script>
		<title> QuickCare </title>

	</head>

	<body id="content" onload="initialiser()">
		<div id="navbar" class="col-lg-2">
			<div id="brand">
				<a href="#"><img src=""></a>
			</div>
			<div id="urgence" class="navbar_link">
				
				<div class="link" >
					<span class="icon_gauche glyphicon glyphicon-plus col-lg-2" aria-hidden="true"></span><span class="name_link">Urgences</span><span class="icon_droite glyphicon glyphicon-triangle-right" aria-hidden="true"></span>
				</div>
				
			</div>
			<div id="sante" class="navbar_link">
				
				<h3> Conseils Santé </h3>
			</div>
			<div id="uber" class="navbar_link">
				<h3>Uber</h3>
			</div>
		</div>
		<div id="contener" class="col-lg-offset-2 col-lg-10">
		

		</div>
		<script src="map.js"></script>
		<script type="text/javascript" src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCvsFHTTm8Y-6kh8XJxlQPCyk2ErzW1BGY"></script>

	</body>
		
	</html>