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

    // Lyrics with timings (adjusted for faster playback speeds)
    const scalingFactor = 1.2;  // Adjust this factor to synchronize with playback speed
    const lyrics = [
        { time: 1 * scalingFactor, text: "Kadhal talk-u, night-u peak-u," },
        { time: 2 * scalingFactor, text: "Pesi pesi sudukadu aacho." },
        { time: 3 * scalingFactor, text: "Cat-u talk-u, moon walk-u," },
        { time: 4 * scalingFactor, text: "Avala paathu ellam poocho." },
        { time: 5 * scalingFactor, text: "Un kannadiyil naan, ennai thedi ponene," },
        { time: 6 * scalingFactor, text: "Kannodu kannin vishayam theriyuma?" },
        { time: 7 * scalingFactor, text: "Un mazhaiyil naan, kaatrai thedi nadandhen," },
        { time: 8 * scalingFactor, text: "Kattrin oram, kadhalin moham." },
        { time: 9 * scalingFactor, text: "Hey, raathiri raathiri radhai," },
        { time: 10 * scalingFactor, text: "Enakku ipo venum bodhai." },
        { time: 11 * scalingFactor, text: "Takkaru takkaru damaaru," },
        { time: 12 * scalingFactor, text: "Nee illama naanum sumaaru." },
        { time: 13 * scalingFactor, text: "Oru vaarthai sol, naan vaazhven," },
        { time: 14 * scalingFactor, text: "Oru silu silu vaarthai vaangi," },
        { time: 15 * scalingFactor, text: "Kadhal ariven." },
        { time: 16 * scalingFactor, text: "Podi podi paava kaari," },
        { time: 17 * scalingFactor, text: "Nee thaane enakku sooniya kaari." },
        { time: 18 * scalingFactor, text: "Right-u wrong-u, queen-u pei-u," },
        { time: 19 * scalingFactor, text: "Unna paatha alaeyh gaali" },
        { time: 20 * scalingFactor, text: "Nee vanthaal, mazhalai paadum," },
        { time: 21 * scalingFactor, text: "Thunaiyaaga naan, un mela nenaipen thooral." },
        { time: 22 * scalingFactor, text: "Mannippu thedi, marandhaalum," },
        { time: 23 * scalingFactor, text: "Thirumbum vazhi illaye." },
        { time: 24 * scalingFactor, text: "Hey, raathiri raathiri radhai," },
        { time: 25 * scalingFactor, text: "Enakku ipo venum bodhai." },
        { time: 26 * scalingFactor, text: "Takkaru takkaru damaaru," },
        { time: 27 * scalingFactor, text: "Nee illama naanum sumaaru" },
        { time: 28 * scalingFactor, text: "Hey! Pencil lady, naa valakkuren thaadi," },
        { time: 29 * scalingFactor, text: "Unnala aanen, eh ipo naanum KD." },
        { time: 30 * scalingFactor, text: "Suthi vita bhambaram, kairu illaa thadhiram..." },
        { time: 31 * scalingFactor, text: "Hey! Takkaru takkaru damaaru," },
        { time: 32 * scalingFactor, text: "Nee illama naanum sumaaru." },
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
                lyricElement.classList.add('highlighted');
                lyricElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
            } else {
                lyricElement.classList.remove('highlighted');
            }
        });
    }
});







