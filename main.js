//This is the main file that includes all the required files.

function main_function()
{
	//Including the toggle switch html:
	var header_elements = document.getElementsByClassName("header_contents");
	header_elements[0].innerHTML += "<iframe height=\"50px\" frameborder=\"0\" align=\"right\" width=\"100px\" src=\"https://rawgit.com/aman15012/seeQuora/master/switch.html\"></iframe>";

	//Including see-quora.js 
	var head_in_html = document.getElementsByTagName("head");
	head_in_html[0].innerHTML += "<script src=\"https://rawgit.com/aman15012/seeQuora/master/see-quora.js\">";

	//Including an event listner for scrolling
	var body_in_html = document.getElementsByTagName("body");
	body_in_html[0].setAttribute("onscroll","scroll_response()");	
}
