var bytes = 0;
var kilobytes = 0;
var totalCount = 0;
var level = 1;

//on click
var shop1costBytes = 25;
var shop1costKilobytes = 0;
var shop1quan = 0;
var shop1prod = 2;
var shop1mult = 1.05;

//on click
var shop2costBytes =  0;
var shop2costKilobytes = 10;
var shop2quan = 0;
var shop2prod = 50;
var shop2mult = 1.10;

//automated
var shop3costBytes =  100;
var shop3costKilobytes = 0;
var shop3quan = 0;
var shop3prod = 1;
var shop3mult = 1.10;

document.getElementById("Counter").innerHTML = kilobytes + " KB - " + bytes + " Bytes";
document.getElementById("shopQuantity1").innerHTML = "You bought the faster bandwidth already " + shop1quan + " times!";
document.getElementById("shopQuantity2").innerHTML = "You bought the Dial-Up-Internet already " + shop2quan + " times!";
document.getElementById("shopQuantity3").innerHTML = "You bought a Auto-Downloader already " + shop3quan + " times!";
document.getElementById("shopCost1").innerHTML = "Cost: " + shop1costBytes + " Bytes";
document.getElementById("shopCost2").innerHTML = "Cost: " + shop2costKilobytes + " Kilobytes";
document.getElementById("shopCost3").innerHTML = "Cost: " + shop3costBytes + " Bytes";
document.getElementById("level").innerHTML = "Level: " + level;

function convertBytesKilobytes()
	{
	//Function to convert Bytes into Kilobytes
	console.log("Converting Bytes into a Kilobyte...");
	bytes = bytes - 1024
	kilobytes = kilobytes + 1
	}
	
function convertKilobytesBytes()
	{
	//Function to convert Kilobytes into Bytes
	console.log("Converting a Kilobyte into Bytes...");
	bytes = bytes + 1024
	kilobytes = kilobytes - 1
	}

function twentyBitEgg()
	{
	//Easteregg for reaching 1024 Kilobytes
	console.log("ERROR: 20-Bit-Number-Overflow. Bytes have been reset to 0.");
	kilobytes = 0
	bytes = 0
	}
	
function shop1Buy()
	{
	//Function for buying Shop-Item 1
	if (bytes >= shop1costBytes)
		{
		bytes = bytes - shop1costBytes
		shop1quan = shop1quan + 1
		shop1costBytes = shop1mult * shop1costBytes
		document.getElementById("shopQuantity1").innerHTML = "You bought the faster bandwidth already " + shop1quan + " times!";
		document.getElementById("shopCost1").innerHTML = "Cost: " + shop1costBytes + " Bytes";
		console.log("Buying of Shop-Item 1 succeeded.");
		}
	else
		{
		if (kilobytes > 0)
			{
			convertKilobytesBytes()
			shop1quan = shop1quan + 1
			shop1costBytes = shop1mult * shop1costBytes
			document.getElementById("shopQuantity1").innerHTML = "You bought the faster bandwidth already " + shop1quan + " times!";
			document.getElementById("shopCost1").innerHTML = "Cost: " + shop1costBytes + " Bytes";
			console.log("Buying of Shop-Item 1 succeeded.");
			}
		else
			{
			console.log("Buying of Shop-Item 1 failed.");
			}
		}
	}
	
function shop2Buy()
	{
	//Function for buying Shop-Item 2
	if (kilobytes >= shop2costKilobytes)
		{
		kilobytes = kilobytes - shop2costKilobytes
		shop2quan = shop2quan + 1
		shop2costKilobytes = shop2mult * shop2costKilobytes
		document.getElementById("shopQuantity2").innerHTML = "You bought the Dial-Up-Internet already " + shop2quan + " times!";
		document.getElementById("shopCost2").innerHTML = "Cost: " + shop2costKilobytes + " Kilobytes";
		console.log("Buying of Shop-Item 2 succeeded.");
		}
	else
		{
		console.log("Buying of Shop-Item 2 failed.");
		}
	}
	
function shop3Buy()
	{
	//Function for buying Shop-Item 3
	if (bytes >= shop3costBytes)
		{
		bytes = bytes - shop3costBytes
		shop3quan = shop3quan + 1
		shop3costBytes = shop3mult * shop3costBytes
		document.getElementById("shopQuantity3").innerHTML = "You bought the Auto-Downloader already " + shop3quan + " times!";
		document.getElementById("shopCost3").innerHTML = "Cost: " + shop3costBytes + " Bytes";
		console.log("Buying of Shop-Item 3 succeeded.");
		}
	else
		{
		if (kilobytes > 0)
			{
			convertKilobytesBytes()
			shop3quan = shop3quan + 1
			shop3costBytes = shop3mult * shop3costBytes
			document.getElementById("shopQuantity3").innerHTML = "You bought the Auto-Downloader already " + shop3quan + " times!";
			document.getElementById("shopCost3").innerHTML = "Cost: " + shop3costBytes + " Bytes";
			console.log("Buying of Shop-Item 3 succeeded.");
			}
		else
			{
			console.log("Buying of Shop-Item 3 failed.");
			}
		}
	}

function upCount(){
//Function for pressing the button
 bytes = bytes + 1 + shop1quan * shop1prod + shop2quan * shop2prod;
 totalCount = totalCount + 1 + shop1quan *shop1prod + shop2quan * shop2prod;
 document.getElementById("Counter").innerHTML = kilobytes + " KB - " + bytes + " Bytes";
 document.getElementById("level").innerHTML = "Level: " + level;
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
 if (kilobytes >= 1024)
	{
	twentyBitEgg();
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

var functionEverySecond=setInterval(function () {Byte()}, 1000);

function Byte()
	{
    bytes = bytes + shop3quan * shop3prod
	totalCount = totalCount + shop3quan * shop3prod
	document.getElementById("Counter").innerHTML = kilobytes + " KB - " + bytes + " Bytes";
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
	if (kilobytes >= 1024)
		{
		twentyBitEgg();
		}
	}
