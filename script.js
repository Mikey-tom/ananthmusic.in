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

    // Lyrics with adjusted timings
    const lyrics = [
        { time: 0, text: "Kadhal talk-u, night-u peak-u," },
        { time: 2, text: "Pesi pesi sudukadu aacho." },
        { time: 4, text: "Cat-u talk-u, moon walk-u," },
        { time: 6, text: "Avala paathu ellam poocho." },
        { time: 8, text: "Un kannadiyil naan, ennai thedi ponene," },
        { time: 10, text: "Kannodu kannin vishayam theriyuma?" },
        { time: 12, text: "Un mazhaiyil naan, kaatrai thedi nadandhen," },
        { time: 14, text: "Kattrin oram, kadhalin moham." },
        { time: 16, text: "Hey, raathiri raathiri radhai," },
        { time: 18, text: "Enakku ipo venum bodhai." },
        { time: 20, text: "Takkaru takkaru damaaru," },
        { time: 22, text: "Nee illama naanum sumaaru." },
        { time: 24, text: "Oru vaarthai sol, naan vaazhven," },
        { time: 26, text: "Oru silu silu vaarthai vaangi," },
        { time: 28, text: "Kadhal ariven." },
        { time: 30, text: "Podi podi paava kaari," },
        { time: 32, text: "Nee thaane enakku sooniya kaari." },
        { time: 34, text: "Right-u wrong-u, queen-u pei-u," },
        { time: 36, text: "Unna paatha alaeyh gaali" },
        { time: 38, text: "Nee vanthaal, mazhalai paadum," },
        { time: 40, text: "Thunaiyaaga naan, un mela nenaipen thooral." },
        { time: 42, text: "Mannippu thedi, marandhaalum," },
        { time: 44, text: "Thirumbum vazhi illaye." },
        { time: 46, text: "Hey, raathiri raathiri radhai," },
        { time: 48, text: "Enakku ipo venum bodhai." },
        { time: 50, text: "Takkaru takkaru damaaru," },
        { time: 52, text: "Nee illama naanum sumaaru" },
        { time: 54, text: "Hey! Pencil lady, naa valakkuren thaadi," },
        { time: 56, text: "Unnala aanen, eh ipo naanum KD." },
        { time: 58, text: "Suthi vita bhambaram, kairu illaa thadhiram..." },
        { time: 60, text: "Hey! Takkaru takkaru damaaru," },
        { time: 62, text: "Nee illama naanum sumaaru." },
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
                lyricElement.style.opacity = 1; // Fade in
                lyricElement.style.color = '#1db954';
                lyricElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
            } else {
                lyricElement.style.opacity = 0; // Fade out
                lyricElement.style.color = '#fff';
            }
        });
    }
});

