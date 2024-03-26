window.onscroll = scrollingBar;

function scrollingBar(){
	if (window.pageYOffset < 400){
		document.getElementById("footer").style.background = 'blue';
	}
	if (window.pageYOffset > 400){
		document.getElementById("footer").style.background = 'linear-gradient(to right, red -100%, blue)';
	}
	if (window.pageYOffset > 1200){
		document.getElementById("footer").style.background = 'linear-gradient(to right, red -40%, blue)';
	}
	if (window.pageYOffset > 2000){
		document.getElementById("footer").style.background = 'linear-gradient(to right, red 0%, blue)';
	}
	if (window.pageYOffset > 2800){
		document.getElementById("footer").style.background = 'linear-gradient(to right, red 40%, blue)';
	}
	if (window.pageYOffset > 3200){
		document.getElementById("footer").style.background = 'linear-gradient(to right, red 60%, blue)';
	}
	if (window.pageYOffset > 3300){
		document.getElementById("footer").style.background = 'linear-gradient(to right, red 100%, blue)';
	}
}