//I had to hardcode all the things instead of calling functions.

var state = 0; 
var header_elements = document.getElementsByClassName("header_logo"); 
header_elements[0].innerHTML += "<br><hr><label class=\"switch\">" +
	"<input type=\"checkbox\" id=\"clik\">" +
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

var c = document.getElementById("clik");
c.addEventListener('change', function() {
	  if(this.checked)
	  {
	  	state = 1;
	  	var x = document.getElementsByClassName("count hide_in_feed");
		for(var i=0 ; i< x.length ; i++)
		{
			x[i].style.display = "inline";
		}
	  }
	  else
	  {
	  	state = 0;
	  	var x = document.getElementsByClassName("count hide_in_feed");
		for(var i=0 ; i< x.length ; i++)
		{
			x[i].style.display = "none";
		}
	  }
        
});
window.onscroll = function() {

	var pos = document.body.scrollTop / (document.body.scrollHeight - document.body.clientHeight);
	if(state)
	{
		if(pos>0.6 || document.body.scrollTop == 0)
		{
			var x = document.getElementsByClassName("count hide_in_feed");
			for(var i=0 ; i< x.length ; i++)
			{
				x[i].style.display = "inline";
			}
			
		}
	}
}



