<audio controls id="music">

<source src="D:\my music\AI Music-audio (1) (1).mpeg" type="audio/mpeg">

Your browser does not support the audio element.

</audio>

 

<p>Click the buttons to play or pause the music.</p>

 

<button onclick="play()" type="button">Play </button>

<button onclick="pause()" type="button">Pause</button>

 

<script>

var myMusic= document.getElementById("music");

function play() {

myMusic.play();

}

 

function pause() {

myMusic.pause();

}

</script>

