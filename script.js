document.addEventListener('DOMContentLoaded', function () {
    const audioPlayer = document.getElementById('audioPlayer');
    const playPauseBtn = document.getElementById('playPauseBtn');
    const progressBar = document.getElementById('progressBar');
    const currentTimeElem = document.getElementById('currentTime');
    const durationElem = document.getElementById('duration');
    const volumeControl = document.getElementById('volumeControl');
    const playbackSpeed = document.getElementById('playbackSpeed');
    const lyricsContainer = document.getElementById('lyrics');

    let isPlaying = false;

    // Play/Pause functionality
    playPauseBtn.addEventListener('click', function () {
        if (isPlaying) {
            audioPlayer.pause();
            playPauseBtn.textContent = 'Play';
        } else {
            audioPlayer.play();
            playPauseBtn.textContent = 'Pause';
        }
        isPlaying = !isPlaying;
    });

    // Update the progress bar and time
    audioPlayer.addEventListener('timeupdate', function () {
        const progress = (audioPlayer.currentTime / audioPlayer.duration) * 100;
        progressBar.value = progress;

        currentTimeElem.textContent = formatTime(audioPlayer.currentTime);
        durationElem.textContent = formatTime(audioPlayer.duration);

        syncLyrics(audioPlayer.currentTime);
    });

    // Handle progress bar changes
    progressBar.addEventListener('input', function () {
        const newTime = (progressBar.value / 100) * audioPlayer.duration;
        audioPlayer.currentTime = newTime;
    });

    // Handle volume control
    volumeControl.addEventListener('input', function () {
        audioPlayer.volume = volumeControl.value / 100;
    });

    // Handle playback speed
    playbackSpeed.addEventListener('change', function () {
        audioPlayer.playbackRate = parseFloat(playbackSpeed.value);
    });

    // Format time to mm:ss
    function formatTime(seconds) {
        const minutes = Math.floor(seconds / 60);
        const secs = Math.floor(seconds % 60);
        return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
    }

    // Faster Lyrics with timings
   const lyrics = [
    { time: 0, text: "Kadhal talk-u, night-u peak-u," },
    { time: 0.3, text: "Pesi pesi sudukadu aacho." },
    { time: 0.6, text: "Cat-u talk-u, moon walk-u," },
    { time: 0.9, text: "Avala paathu ellam poocho." },
    { time: 1.2, text: "Un kannadiyil naan, ennai thedi ponene," },
    { time: 1.5, text: "Kannodu kannin vishayam theriyuma?" },
    { time: 1.8, text: "Un mazhaiyil naan, kaatrai thedi nadandhen," },
    { time: 2.1, text: "Kattrin oram, kadhalin moham." },
    { time: 2.4, text: "Hey, raathiri raathiri radhai," },
    { time: 2.7, text: "Enakku ipo venum bodhai." },
    { time: 3.0, text: "Takkaru takkaru damaaru," },
    { time: 3.3, text: "Nee illama naanum sumaaru." },
    { time: 3.6, text: "Oru vaarthai sol, naan vaazhven," },
    { time: 3.9, text: "Oru silu silu vaarthai vaangi," },
    { time: 4.2, text: "Kadhal ariven." },
    { time: 4.5, text: "Podi podi paava kaari," },
    { time: 4.8, text: "Nee thaane enakku sooniya kaari." },
    { time: 5.1, text: "Right-u wrong-u, queen-u pei-u," },
    { time: 5.4, text: "Unna paatha alaeyh gaali" },
    { time: 5.7, text: "Nee vanthaal, mazhalai paadum," },
    { time: 6.0, text: "Thunaiyaaga naan, un mela nenaipen thooral." },
    { time: 6.3, text: "Mannippu thedi, marandhaalum," },
    { time: 6.6, text: "Thirumbum vazhi illaye." },
    { time: 6.9, text: "Hey, raathiri raathiri radhai," },
    { time: 7.2, text: "Enakku ipo venum bodhai." },
    { time: 7.5, text: "Takkaru takkaru damaaru," },
    { time: 7.8, text: "Nee illama naanum sumaaru" },
    { time: 8.1, text: "Hey! Pencil lady, naa valakkuren thaadi," },
    { time: 8.4, text: "Unnala aanen, eh ipo naanum KD." },
    { time: 8.7, text: "Suthi vita bhambaram, kairu illaa thadhiram..." },
    { time: 9.0, text: "Hey! Takkaru takkaru damaaru," },
    { time: 9.3, text: "Nee illama naanum sumaaru." },
];


    // Add lyrics to the container
    function addLyrics() {
        lyricsContainer.innerHTML = lyrics.map(line => `<p>${line.text}</p>`).join('');
    }

    addLyrics();

    // Sync lyrics with audio time
    function syncLyrics(currentTime) {
        lyrics.forEach((line, index) => {
            const lyricElement = lyricsContainer.children[index];
            if (currentTime >= line.time && (index === lyrics.length - 1 || currentTime < lyrics[index + 1].time)) {
                lyricElement.style.color = '#1db954';
                lyricElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
            } else {
                lyricElement.style.color = '#fff';
            }
        });
    }
});




