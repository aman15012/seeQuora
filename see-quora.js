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
var pos = document.body.scrollTop / (document.body.scrollHeight - document.body.clientHeight);
if(pos>0.8 || document.body.scrollTop == 0)
{
	see();
}