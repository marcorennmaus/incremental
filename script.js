var count = 0;
var level = 1;

document.getElementById("Counter").innerHTML = count;

function upCount(){
 document.getElementById("Counter").innerHTML = "Bytes: " + count;
 document.getElementById("level").innerHTML = "Level: " + level;
 count += 1;
 //console.log(count);
if (level === 1 && count >= 25)
	{
	level = 2
	console.log("Congratulations! You leveled up to Level 2!");
	}
else
	{
	if (level === 2 && count >= 50)
		{
		level = 3
		console.log("Congratulations! You leveled up to Level 3!");
		}
	else
		{
		if (level === 3 && count >= 100)
			{
			level = 4
			console.log("Congratulations! You leveled up to Level 4!");
			}
		else
			{
			if (level === 4 && count >= 250)
				{
				level = 5
				console.log("Congratulations! You leveled up to Level 5!");
				}
			else
				{
				if (level === 5 && count >= 500)
					{
					level = 6
					console.log("Congratulations! You leveled up to Level 6!");
					}
				else
					{
					if (level === 6 && count >= 800)
						{
						level = 7
						console.log("Congratulations! You leveled up to Level 7!");
						}
					else
						{
						if (level === 7 && count >= 1200)
							{
							level = 8
							console.log("Congratulations! You leveled up to Level 8!");
							}
						else
							{
							if (level === 8 && count >= 1850)
								{
								level = 9
								console.log("Congratulations! You leveled up to Level 9!");
								}
							else
								{
								if (level === 9 && count >= 2500)
									{
									level = 10
									console.log("Congratulations! You leveled up to Level 10!");
									}
								}
							}
						}
					}
				}
			}
		}
	}
}
