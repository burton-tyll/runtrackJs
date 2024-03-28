$(document).ready(function(){
	$("img").css("order", "0");
	$("#mélanger").click(function(){
		$("#arc1").css("order", "3");
		$("#arc2").css("order", "1");
		$("#arc3").css("order", "4");
		$("#arc4").css("order", "5");
		$("#arc5").css("order", "0");
		$("#arc6").css("order", "2");
		$(".remettre_ordre").html("<button>Remettre dans l'ordre</button>");

		$(".remettre_ordre").click(function(){
			$(".remettre_ordre").empty();
			$("img").css("order", "0");
			$(".remettre_ordre").append("<p style='color: green'>Vous avez gagné!</p>");
		});
	});
});

