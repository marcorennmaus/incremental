var bytes = 0;
var kilobytes = 0;
var totalCount = 0;

//on click
var shop1costBytes = 25;
var shop1quan = 0;
var shop1prod = 2;
var shop1mult = 1.05;

//on click
var shop2costBytes =  10240;
var shop2quan = 0;
var shop2prod = 50;
var shop2mult = 1.10;

//automated
var shop3costBytes =  100;
var shop3quan = 0;
var shop3prod = 1;
var shop3mult = 1.10;

document.getElementById("Counter").innerHTML = bytes + " Bytes";
document.getElementById("shopQuantity1").innerHTML = "You bought the faster bandwidth already " + shop1quan + " times!";
document.getElementById("shopQuantity2").innerHTML = "You bought the Dial-Up-Internet already " + shop2quan + " times!";
document.getElementById("shopQuantity3").innerHTML = "You bought a Auto-Downloader already " + shop3quan + " times!";
document.getElementById("shopCost1").innerHTML = "Cost: " + shop1costBytes + " Bytes";
document.getElementById("shopCost2").innerHTML = "Cost: " + shop2costBytes + " Bytes";
document.getElementById("shopCost3").innerHTML = "Cost: " + shop3costBytes + " Bytes";

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
		shop1costBytes = Math.round(shop1mult * shop1costBytes)
		document.getElementById("shopQuantity1").innerHTML = "You bought the faster bandwidth already " + shop1quan + " times!";
		document.getElementById("shopCost1").innerHTML = "Cost: " + shop1costBytes + " Bytes";
		console.log("Buying of Shop-Item 1 succeeded.");
		document.getElementById("Counter").innerHTML = bytes + " Bytes";
		}
	else
		{
		console.log("Buying of Shop-Item 1 failed.");
		}
	}

	
function shop2Buy()
	{
	//Function for buying Shop-Item 2
	if (bytes >= shop2costBytes)
		{
		bytes = bytes - shop2costBytes
		shop2quan = shop2quan + 1
		shop2costBytes = Math.round(shop2mult * shop2costBytes)
		document.getElementById("shopQuantity2").innerHTML = "You bought the Dial-Up-Internet already " + shop2quan + " times!";
		document.getElementById("shopCost2").innerHTML = "Cost: " + shop2costBytes + " Bytes";
		console.log("Buying of Shop-Item 2 succeeded.");
		document.getElementById("Counter").innerHTML = bytes + " Bytes";
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
		shop3costBytes = Math.round(shop3mult * shop3costBytes) 
		document.getElementById("shopQuantity3").innerHTML = "You bought the Auto-Downloader already " + shop3quan + " times!";
		document.getElementById("shopCost3").innerHTML = "Cost: " + shop3costBytes + " Bytes";
		console.log("Buying of Shop-Item 3 succeeded.");
		document.getElementById("Counter").innerHTML = bytes + " Bytes";
		}
	else
		{
		console.log("Buying of Shop-Item 3 failed.");
		}
	}
	
function upCount(){
	//Function for pressing the button
	bytes = bytes + 1 + shop1quan * shop1prod + shop2quan * shop2prod;
	totalCount = totalCount + 1 + shop1quan *shop1prod + shop2quan * shop2prod;
	document.getElementById("Counter").innerHTML = bytes + " Bytes";
	//console.log(count);
	if (bytes >= 1048576)
		{
		twentyBitEgg();
		}
	}

var functionEverySecond=setInterval(function () {Byte()}, 1000);

function Byte()
	{
    bytes = bytes + shop3quan * shop3prod
	totalCount = totalCount + shop3quan * shop3prod
	document.getElementById("Counter").innerHTML = bytes + " Bytes";
	if (kilobytes >= 1048576)
		{
		twentyBitEgg();
		}
	}
