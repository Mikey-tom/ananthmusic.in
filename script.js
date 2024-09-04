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

    // Lyrics with timings (apply scaling factor)
    const scalingFactor = 0.8;  // Adjust this factor to increase/decrease speed
    const lyrics = [
        { time: 1 * scalingFactor, text: "Kadhal talk-u, night-u peak-u," },
        { time: 2 * scalingFactor, text: "Pesi pesi sudukadu aacho." },
        { time: 2.5 * scalingFactor, text: "Cat-u talk-u, moon walk-u," },
        { time: 3 * scalingFactor, text: "Avala paathu ellam poocho." },
        { time: 3.5 * scalingFactor, text: "Un kannadiyil naan, ennai thedi ponene," },
        { time: 3.75 * scalingFactor, text: "Kannodu kannin vishayam theriyuma?" },
        { time: 4 * scalingFactor, text: "Un mazhaiyil naan, kaatrai thedi nadandhen," },
        { time: 4.25 * scalingFactor, text: "Kattrin oram, kadhalin moham." },
        { time: 4.75 * scalingFactor, text: "Hey, raathiri raathiri radhai," },
        { time: 5 * scalingFactor, text: "Enakku ipo venum bodhai." },
        { time: 5.5 * scalingFactor, text: "Takkaru takkaru damaaru," },
        { time: 6 * scalingFactor, text: "Nee illama naanum sumaaru." },
        { time: 6.5 * scalingFactor, text: "Oru vaarthai sol, naan vaazhven," },
        { time: 7 * scalingFactor, text: "Oru silu silu vaarthai vaangi," },
        { time: 7.5 * scalingFactor, text: "Kadhal ariven." },
        { time: 8 * scalingFactor, text: "Podi podi paava kaari," },
        { time: 8.5 * scalingFactor, text: "Nee thaane enakku sooniya kaari." },
        { time: 9 * scalingFactor, text: "Right-u wrong-u, queen-u pei-u," },
        { time: 9.5 * scalingFactor, text: "Unna paatha alaeyh gaali" },
        { time: 10 * scalingFactor, text: "Nee vanthaal, mazhalai paadum," },
        { time: 10.5 * scalingFactor, text: "Thunaiyaaga naan, un mela nenaipen thooral." },
        { time: 11 * scalingFactor, text: "Mannippu thedi, marandhaalum," },
        { time: 11.5 * scalingFactor, text: "Thirumbum vazhi illaye." },
        { time: 12 * scalingFactor, text: "Hey, raathiri raathiri radhai," },
        { time: 12.5 * scalingFactor, text: "Enakku ipo venum bodhai." },
        { time: 13 * scalingFactor, text: "Takkaru takkaru damaaru," },
        { time: 13.5 * scalingFactor, text: "Nee illama naanum sumaaru" },
        { time: 14 * scalingFactor, text: "Hey! Pencil lady, naa valakkuren thaadi," },
        { time: 14.5 * scalingFactor, text: "Unnala aanen, eh ipo naanum KD." },
        { time: 15 * scalingFactor, text: "Suthi vita bhambaram, kairu illaa thadhiram..." },
        { time: 15.5 * scalingFactor, text: "Hey! Takkaru takkaru damaaru," },
        { time: 16 * scalingFactor, text: "Nee illama naanum sumaaru." },
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





