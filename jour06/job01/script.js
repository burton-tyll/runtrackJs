const citationsBladeRunner = [
    "Tous ces moments se perdront dans l'oubli, comme les larmes dans la pluie.",
    "J'ai vu des choses que vous, les gens, ne croiriez pas.",
    "Il est temps de mourir."];

function citationAleatoire() {
    let index = Math.floor(Math.random() * citationsBladeRunner.length);
    return citationsBladeRunner[index];
}


$('#reboot').click(function(){
	$('#jumbotron').text(citationAleatoire())
})

//---------------PAGINATION---------------------

const pages = [
    "Je suis l'homme qui frappe à la porte",
    "La vie c'est comme une boîte de chocolats",
    "Luke, Je suis ton père"];

$('#page1').click(function(){
    $('#jumbotron').text(pages[0])
    $('#page2').removeClass("active")
    $('#page3').removeClass("active")
    $('#page1').addClass("active")
})

$('#page2').click(function(){
    $('#jumbotron').text(pages[1])
    $('#page1').removeClass("active")
    $('#page3').removeClass("active")
    $('#page2').addClass("active")
})

$('#page3').click(function(){
    $('#jumbotron').text(pages[2])
    $('#page2').removeClass("active")
    $('#page1').removeClass("active")
    $('#page3').addClass("active")
})

//PREVIOUS

$('.previous').click(function(){
    let jumbotron = $('#jumbotron').text()
    let index = pages.indexOf(jumbotron)
    let p = index-1
    $('#jumbotron').text(pages[p])
})

//NEXT

$('.next').click(function(){
    let jumbotron = $('#jumbotron').text()
    let index = pages.indexOf(jumbotron)
    let n = index+1
    $('#jumbotron').text(pages[n])
})


//LISTE

$('#liste li').click(function(){
    $('#liste li').removeClass("active")
    $(this).addClass("active")
})