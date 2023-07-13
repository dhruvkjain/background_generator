var color1=document.getElementsByClassName("color1")[0];
var color2=document.getElementsByClassName("color2")[0];
var body=document.getElementById("gradient");
var css=document.getElementsByClassName("background")[0];

function setgradient()
{
	body.style.background="linear-gradient(to right,"+color1.value+","+color2.value+")";
	css.textContent=body.style.background+";";
}
color1.addEventListener("input", setgradient);
color2.addEventListener("input", setgradient);

function randomcolor()
{
	var color="";
	for(var i=0;i<3;i++)
	{
		var subpart=Math.floor(Math.random()*256).toString(16);
		if(subpart.length === 1)
		{
			color=color+"0"+subpart;
		}
		else
		{
			color=color+subpart;
		}
	}
	return "#"+color;
}

var random=document.getElementsByClassName("random")[0];
random.addEventListener("click", function()
{
	color1.value=randomcolor();
	color2.value=randomcolor();
	body.style.background="linear-gradient(to right,"+color1.value+","+color2.value+")";
	css.textContent=body.style.background+";";
});

var csstext=document.getElementsByClassName("text")[0];
var randomt=document.getElementsByClassName("randomt")[0];
randomt.addEventListener("click",function()
{
	body.style.color=randomcolor();
	csstext.textContent=body.style.color+";"
});