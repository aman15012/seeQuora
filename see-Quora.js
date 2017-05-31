///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Author:  Aman Agarwal (aman15012@iiitd.ac.in)																										 //
//About:   Quora is a question-and-answer site where questions are asked, answered, edited and organized by its community of users.                  //
//Context: Recently Quora.com introduced a change in its top stories feed page interface: It stopped showing the number of upvotes associated with   //
//         each answer.																																 //
//Use:     This a javascript which when run on browser adds a toggle switch on the top of the page. This toggle switch can be turned on to view the  //
//	       number of upvotes on each answer. 																										 //
//Benifit: It benifits those users who want to view only the popular content on Quora. They can now, easily see the quality of the answer as         //
//         they were able to see before the update.																									 //
//Steps:         																																	 //
//1. Open Quora on your browser window.																												 //	
//2. Open the javascript console of the browser while remaining in the same tab. (Possibly by: Right Click --> Inspect Element --> Go to console tab)//
//3. Paste this javascript in the console.																											 //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
 
/////////////////////////////////////////////////////////// THE SCRIPT ////////////////////////////////////////////////////////////////////////////////



//Add the toggle switch to the Quora home page.

var header_elements = document.getElementsByClassName("header_contents"); // header_contents is the class name of the HTML element where we add the switch 
header_elements[0].innerHTML += "<hr><label class=\"switch\">" +
	"<input type=\"checkbox\" onchange=\"handleClick(this)\">" +
	"<div class=\"slider round\"></div>" +
	"</label>" +
	"<style>" +
	".switch {position: relative;display: inline-block;width: 60px;height: 34px;}" +
	".switch input {display:none;}" +
	".slider {position: absolute;cursor: pointer;top: 0; left: 0;right: 0;bottom: 0;background-color: #ccc;-webkit-transition: .4s;transition: .4s;}" +
	".slider:before {position: absolute;content: \"\";height: 26px;width: 26px;left: 4px;bottom: 4px;background-color: white;-webkit-transition: .4s;transition: .4s;}" +
	"input:checked + .slider {background-color: #2196F3;}" +
	"input:focus + .slider { box-shadow: 0 0 1px #2196F3;}" +
	"input:checked + .slider:before {-webkit-transform: translateX(26px);-ms-transform: translateX(26px);transform: translateX(26px);}" +
	".slider.round { border-radius: 34px;}" +
	".slider.round:before {border-radius: 50%;}" +
	"</style>";

// Add an event for those answers which load dynamically as we go down the page

var body_in_html = document.getElementsByTagName("body");
body_in_html[0].setAttribute("onscroll","scroll_response()");

// This is the main script 

var state = 0; // state determines the state of the toggle switch
function handleClick(cb) {
  if(cb.checked)
  {
  	state = 1;
  	see();
  }
  else
  {
  	state = 0;
  	no_see();
  }
}
// see() makes the number of upvotes visible
var see = function()
{
	var x = document.getElementsByClassName("count hide_in_feed");
	for(var i=0 ; i< x.length ; i++)
	{
		x[i].style.display = "inline";
	}
}
// no_see() hides the number of upvotes
var no_see = function()
{
	var x = document.getElementsByClassName("count hide_in_feed");
	for(var i=0 ; i< x.length ; i++)
	{
		x[i].style.display = "none";
	}
}
//scroll_response() handles the newly loaded answers 
function scroll_response()
{
	var pos = document.body.scrollTop / (document.body.scrollHeight - document.body.clientHeight);
	if(state)
	{
		if(pos>0.6 || document.body.scrollTop == 0) // We call the see() function everytime the scrollbar crosses a particular distance from the top
		{
			see();
		}
	}
	
}