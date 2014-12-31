/*
** HTML div slider
*/

var htmlDivs = new Array();
var htmlDivsForSlide = document.getElementsByClassName("slideComponent");
var divCount = 0 ;
var htmlSlide = function(){
	document.getElementById('sliding_div').innerHTML = htmlDivsForSlide[divCount].innerHTML;
	divCount < (htmlDivsForSlide.length -1 ) ? divCount++ : divCount = 0 ;
	setTimeout(htmlSlide, 2500);
};

htmlSlide();

