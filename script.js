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

    // Lyrics with timings
    const lyrics = [
        { time: 0, text: "Kadhal talk-u, night-u peak-u," },
        { time: 5, text: "Pesi pesi sudukadu aacho." },
        { time: 10, text: "Cat-u talk-u, moon walk-u," },
        { time: 15, text: "Avala paathu ellam poocho." },
        { time: 20, text: "Un kannadiyil naan, ennai thedi ponene," },
        { time: 25, text: "Kannodu kannin vishayam theriyuma?" },
        { time: 30, text: "Un mazhaiyil naan, kaatrai thedi nadandhen," },
        { time: 35, text: "Kattrin oram, kadhalin moham." },
        { time: 40, text: "Hey, raathiri raathiri radhai," },
        { time: 45, text: "Enakku ipo venum bodhai." },
        { time: 50, text: "Takkaru takkaru damaaru," },
        { time: 55, text: "Nee illama naanum sumaaru." },
        { time: 60, text: "Oru vaarthai sol, naan vaazhven," },
        { time: 65, text: "Oru silu silu vaarthai vaangi," },
        { time: 70, text: "Kadhal ariven." },
        { time: 75, text: "Podi podi paava kaari," },
        { time: 80, text: "Nee thaane enakku sooniya kaari." },
        { time: 85, text: "Right-u wrong-u, queen-u pei-u," },
        { time: 90, text: "Unna paatha alaeyh gaali" },
        { time: 95, text: "Nee vanthaal, mazhalai paadum," },
        { time: 100, text: "Thunaiyaaga naan, un mela nenaipen thooral." },
        { time: 105, text: "Mannippu thedi, marandhaalum," },
        { time: 110, text: "Thirumbum vazhi illaye." },
        { time: 115, text: "Hey, raathiri raathiri radhai," },
        { time: 120, text: "Enakku ipo venum bodhai." },
        { time: 125, text: "Takkaru takkaru damaaru," },
        { time: 130, text: "Nee illama naanum sumaaru" },
        { time: 135, text: "Hey! Pencil lady, naa valakkuren thaadi," },
        { time: 140, text: "Unnala aanen, eh ipo naanum KD." },
        { time: 145, text: "Suthi vita bhambaram, kairu illaa thadhiram..." },
        { time: 150, text: "Hey! Takkaru takkaru damaaru," },
        { time: 155, text: "Nee illama naanum sumaaru." },
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



