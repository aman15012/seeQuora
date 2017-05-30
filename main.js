//This is the main file that includes all the required files.

//try
var header_elements = document.getElementsByClassName("header_contents");
header_elements[0].innerHTML += "<script src=\"https://www.w3schools.com/lib/w3.js\"></script><div w3-include-html=\"https://github.com/aman15012/seeQuora/blob/master/switch.html\"></div><script> w3.includeHTML(); </script>";


//Including the toggle switch html:
/*var header_elements = document.getElementsByClassName("header_contents");
header_elements[0].innerHTML += "<div w3-include-html=\"https://github.com/aman15012/seeQuora/blob/master/switch.html\"></div><script> w3.includeHTML(); </script>";
*/
//Including see-quora.js 
var head_in_html = document.getElementsByTagName("head");
head_in_html[0].innerHTML += "<script src=\"https://github.com/aman15012/seeQuora/blob/master/see-quora.js\">";

//Including an event listner for scrolling
var body_in_html = document.getElementsByTagName("body");
body_in_html[0].setAttribute("onscroll","scroll_response()");
