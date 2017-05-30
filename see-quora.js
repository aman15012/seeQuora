var state = 0;
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
var see = function()
{
	var x = document.getElementsByClassName("count hide_in_feed");
	for(var i=0 ; i< x.length ; i++)
	{
		x[i].style.display = "inline";
	}
}
var no_see = function()
{
	var x = document.getElementsByClassName("count hide_in_feed");
	for(var i=0 ; i< x.length ; i++)
	{
		x[i].style.display = "none";
	}
}
function scroll_response()
{
	var pos = document.body.scrollTop / (document.body.scrollHeight - document.body.clientHeight);
	if(state)
	{
		if(pos>0.8 || document.body.scrollTop == 0)
		{
			see();
		}
	}
	
}