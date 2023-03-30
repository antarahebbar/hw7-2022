let myVid = document.querySelector(".video");

window.addEventListener("load", function() {
	console.log("Good job opening the window")
	myVid.load();
	myVid.autoplay = false;
	myVid.loop = false;
	console.log("Autoplay is set to false");
	console.log("Loop is set to false");
	console.log(myVid.classList);

});

// Initalize video

// Play this video with the play button
document.querySelector("#play").addEventListener("click", function()
{
	console.log("playing video");
	myVid.play();
})

// Set volume
document.querySelector("#volume").addEventListener("click", function()
{
	console.log("volume");
	document.querySelector("#volume").innerHTMl = myVid.volume * 100 + "%";
})


// Pause this video with the pause button
document.querySelector("#pause").addEventListener("click", function()
{
	console.log("pausing video");
	myVid.pause();
})

//  Set speeding settings
document.querySelector("#slower").addEventListener("click", function()
{
	console.log("Slowing down video");
	console.log("Speed is " + myVid.playbackRate);
	myVid.playbackRate = myVid.playbackRate * 0.9; // decrease rate
})

document.querySelector("#faster").addEventListener("click", function()
{
	console.log("Speeding up video");
	console.log("Speed is " + myVid.playbackRate);
	myVid.playbackRate = myVid.playbackRate / 0.9; // decrease rate
})

//  Skip by 10 seconds
document.querySelector("#skip").addEventListener("click", function()
{
	console.log("Video current time is " + myVid.currentTime);
	myVid.currentTime = myVid.currentTime + 10; // decrease rate
})

//  Set unmuted
document.querySelector("#mute").addEventListener("click", function()
{
	if (myVid.muted == true)
	{
		myVid.muted = false;
		document.querySelector("#mute").innerHTML = "Mute";
		console.log("video is muted");
	}

	else
	{
		myVid.muted = true;
		document.querySelector("#mute").innerHTML = "Unmuted";
		console.log("video is not muted");

	}
})

// Volume slider
let volume = document.querySelector("#slider");
volume.addEventListener("change", function(funct)
{
	myVid.volume = funct.currentTarget.value / 100;
	console.log("The current value is " + myVid.volume);
	document.querySelector("#volume").innerHTML = myVid.volume*100 + "%";
	console.log("changed volume");
})

// Old school
document.querySelector("#vintage").addEventListener("click", function()

{
	console.log("old school activated");
	myVid.classList.add("oldSchool");
	console.log(myVid.classList);
})


// Original
document.querySelector("#orig").addEventListener("click", function()

{
	console.log("back to original");
	myVid.classList.remove("oldSchool");
	console.log(myVid.classList);
})





// document.querySelector("#play").addEventListener("click", function() {
// 	console.log("Play Video");
// });

