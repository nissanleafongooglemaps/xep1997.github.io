function volumeDown() {

	document.getElementById('stream').volume-=0.1;
	
}


function volumeUp() {

	document.getElementById('stream').volume+=0.1;
	
}



function playPause() {
var liveNow = document.getElementById('stream');
if (liveNow.paused) {
liveNow.play()
} else {
liveNow.pause()
}
	
}



document.onkeypress = function(e){
    if((e || window.event).keyCode === 32){
        playPause()
    }
};



