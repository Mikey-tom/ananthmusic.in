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
    { time: 0.2, text: "Kadhal talk-u, night-u peak-u," },
    { time: 0.5, text: "Pesi pesi sudukadu aacho." },
    { time: 0.8, text: "Cat-u talk-u, moon walk-u," },
    { time: 1.1, text: "Avala paathu ellam poocho." },
    { time: 1.4, text: "Un kannadiyil naan, ennai thedi ponene," },
    { time: 1.7, text: "Kannodu kannin vishayam theriyuma?" },
    { time: 2.0, text: "Un mazhaiyil naan, kaatrai thedi nadandhen," },
    { time: 2.3, text: "Kattrin oram, kadhalin moham." },
    { time: 2.6, text: "Hey, raathiri raathiri radhai," },
    { time: 2.9, text: "Enakku ipo venum bodhai." },
    { time: 3.2, text: "Takkaru takkaru damaaru," },
    { time: 3.5, text: "Nee illama naanum sumaaru." },
    { time: 3.8, text: "Oru vaarthai sol, naan vaazhven," },
    { time: 4.1, text: "Oru silu silu vaarthai vaangi," },
    { time: 4.4, text: "Kadhal ariven." },
    { time: 4.7, text: "Podi podi paava kaari," },
    { time: 5.0, text: "Nee thaane enakku sooniya kaari." },
    { time: 5.3, text: "Right-u wrong-u, queen-u pei-u," },
    { time: 5.6, text: "Unna paatha alaeyh gaali" },
    { time: 5.9, text: "Nee vanthaal, mazhalai paadum," },
    { time: 6.2, text: "Thunaiyaaga naan, un mela nenaipen thooral." },
    { time: 6.5, text: "Mannippu thedi, marandhaalum," },
    { time: 6.8, text: "Thirumbum vazhi illaye." },
    { time: 7.1, text: "Hey, raathiri raathiri radhai," },
    { time: 7.4, text: "Enakku ipo venum bodhai." },
    { time: 7.7, text: "Takkaru takkaru damaaru," },
    { time: 8.0, text: "Nee illama naanum sumaaru" },
    { time: 8.3, text: "Hey! Pencil lady, naa valakkuren thaadi," },
    { time: 8.6, text: "Unnala aanen, eh ipo naanum KD." },
    { time: 8.9, text: "Suthi vita bhambaram, kairu illaa thadhiram..." },
    { time: 9.2, text: "Hey! Takkaru takkaru damaaru," },
    { time: 9.5, text: "Nee illama naanum sumaaru." },
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




