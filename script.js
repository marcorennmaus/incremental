var bytes = 0;
var kilobytes = 0;
var totalCount = 0;
var level = 1;

document.getElementById("Counter").innerHTML = kilobytes + " KB - " + bytes + " Bytes";

function convertBytesKilobytes()
	{
	bytes = bytes - 1024
	kilobytes = kilobytes + 1
	}
	
function convertKilobytesBytes()
	{
	bytes = bytes + 1024
	kilobytes = kilobytes - 1
	}

function sixteenBitEgg()
	{
	console.log("ERROR: 16-Bit-Number-Overflow. Bytes have been reset to 0.");
	kilobytes = 0
	bytes = 0
	}

function upCount(){
 document.getElementById("Counter").innerHTML = kilobytes + " KB - " + bytes + " Bytes";
 document.getElementById("level").innerHTML = "Level: " + level;
 bytes += 1;
 totalCount += 1;
 //console.log(count);
  if (bytes >= 1024)
	{
	convertBytesKilobytes()
	}
else
	{
	if (bytes < 0)
		{
		convertKilobytesBytes()
		}
	}
 if (bytes >= 65536)
	{
	sixteenBitEgg();
	}
else
	{
	if (level === 1 && totalCount >= 25)
		{
		level = 2
		console.log("Congratulations! You leveled up to Level 2!");
		}
	else
		{
		if (level === 2 && totalCount >= 50)
			{
			level = 3
			console.log("Congratulations! You leveled up to Level 3!");
			}
		else
			{
			if (level === 3 && totalCount >= 100)
				{
				level = 4
				console.log("Congratulations! You leveled up to Level 4!");
				}
			else
				{
				if (level === 4 && totalCount >= 250)
					{
					level = 5
					console.log("Congratulations! You leveled up to Level 5!");
					}
				else
					{
					if (level === 5 && totalCount >= 500)
						{
						level = 6
						console.log("Congratulations! You leveled up to Level 6!");
						}
					else
						{
						if (level === 6 && totalCount >= 800)
							{
							level = 7
							console.log("Congratulations! You leveled up to Level 7!");
							}
						else
							{
							if (level === 7 && totalCount >= 1200)
								{
								level = 8
								console.log("Congratulations! You leveled up to Level 8!");
								}
							else
								{
								if (level === 8 && totalCount >= 1850)
									{
									level = 9
									console.log("Congratulations! You leveled up to Level 9!");
									}
								else
									{
									if (level === 9 && totalCount >= 2500)
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
}
