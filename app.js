(function(){

	var app  = {


		init:function(){    
			app.recupvared(); 

		},
		recupvared:function() {

			var valred = $("#couleurR").val()
			console.log(valred); 
			var	valgreen = $("#couleurG").val()
			console.log(valgreen); 
			var valblue = $("#couleurB").val();
			console.log(valblue); 

			$("#affichvaleurR").html(128);
			$("#affichvaleurG").html(128); 
			$("#affichevaleurB").html(128); 
		},
	}
	app.init(); 
}()); 