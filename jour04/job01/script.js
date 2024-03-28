$("#button").click(function(){
	fetch("expression.txt")
	.then(response => response.text())
	.then(data => {
		console.log(data);
		$("#phrase").html("<p>" + data + "</p>");
	})
	.catch(error => console.error("Une erreur est survenue", error));
})
