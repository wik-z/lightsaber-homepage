var saberon = false;
var saberhum = false;
$(document).ready(function() {
	var snd = new Audio("sounds/turnon.wav");
	snd.addEventListener('ended', function() {
		if(saberhum == true)
			return;

		this.src = "sounds/hum.wav";
		this.load();
		this.play();
		this.loop = true;
		saberhum = true;
	});
	if(!saberon) {
		setTimeout(function() {snd.play(); }, 5000);
		saberon = true;
	}
});


