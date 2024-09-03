document.addEventListener("DOMContentLoaded", function() {
    const audioPlayer = document.getElementById("audioPlayer");
    const lyrics = document.querySelectorAll(".lyrics p");

    audioPlayer.addEventListener("timeupdate", function() {
        const currentTime = audioPlayer.currentTime;
        
        lyrics.forEach((lyric, index) => {
            const startTime = parseFloat(lyric.getAttribute("data-time"));
            const nextTime = lyrics[index + 1] ? parseFloat(lyrics[index + 1].getAttribute("data-time")) : Infinity;

            if (currentTime >= startTime && currentTime < nextTime) {
                lyric.classList.add("show");
            } else {
                lyric.classList.remove("show");
            }
        });
    });
});




