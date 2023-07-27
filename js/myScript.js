var randomNum = Math.floor((Math.random()*12)+1);
var clickCounter = parseInt(0);
var gameActive = true;

function boom(btn){
	if(gameActive)
	{
		if(btn == randomNum)
		{
			alert("Aaaaarrrgggggghhhhhh!!!\nYou found the Jolly Roger");
			document.getElementById(btn).src = "img/pirate.gif";
			document.getElementById(btn).style.border = "red 3px outset";
			document.getElementById(btn).classList.remove("img-cursor");
			document.getElementById("disp").innerHTML = "";
			document.getElementById("msg").innerHTML = "You Lose, Better Luck Next Time!!!!";
			deactivate();
			gameActive = false;
		}
		else
		{
			clickCounter++;
			document.getElementById(btn).src = "img/flag1.jpg";
			document.getElementById(btn).onclick = null;
			document.getElementById(btn).classList.remove("img-cursor");

			if(clickCounter == 10)
			{
				alert("Congratlations");
				document.getElementById(randomNum).src = "img/pirate.gif";
				document.getElementById(randomNum).style.border = "red 3px outset";
				document.getElementById("disp").innerHTML = "";
				document.getElementById("msg").innerHTML = "Congratulations, You Won!!!<br/><span style='font-size: 20px;'>The Jolly Roger was on position " + randomNum+"</span>";
				deactivate();
				gameActive = false;
			}
		}
	}
}


function deactivate(){
	for(var i = 1; i <= 12; i++)
	{
		document.getElementById(i).classList.remove("img-cursor");
	}
}