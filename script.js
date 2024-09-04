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
        { time: 1, text: "Kadhal talk-u, night-u peak-u," },
        { time: 1.5, text: "Pesi pesi sudukadu aacho." },
        { time: 2.5, text: "Cat-u talk-u, moon walk-u," },
        { time: 3.5, text: "Avala paathu ellam poocho." },
        { time: 4.5, text: "Un kannadiyil naan, ennai thedi ponene," },
        { time: 5.5, text: "Kannodu kannin vishayam theriyuma?" },
        { time: 6.5, text: "Un mazhaiyil naan, kaatrai thedi nadandhen," },
        { time: 7.5, text: "Kattrin oram, kadhalin moham." },
        { time: 8.5, text: "Hey, raathiri raathiri radhai," },
        { time: 9.5, text: "Enakku ipo venum bodhai." },
        { time: 10.5, text: "Takkaru takkaru damaaru," },
        { time: 11.5, text: "Nee illama naanum sumaaru." },
        { time: 12.5, text: "Oru vaarthai sol, naan vaazhven," },
        { time: 13.5, text: "Oru silu silu vaarthai vaangi," },
        { time: 14.5, text: "Kadhal ariven." },
        { time: 15.5, text: "Podi podi paava kaari," },
        { time: 16.5, text: "Nee thaane enakku sooniya kaari." },
        { time: 17.5, text: "Right-u wrong-u, queen-u pei-u," },
        { time: 18.5, text: "Unna paatha alaeyh gaali" },
        { time: 19.5, text: "Nee vanthaal, mazhalai paadum," },
        { time: 20.5, text: "Thunaiyaaga naan, un mela nenaipen thooral." },
        { time: 21.5, text: "Mannippu thedi, marandhaalum," },
        { time: 22.5, text: "Thirumbum vazhi illaye." },
        { time: 23.5, text: "Hey, raathiri raathiri radhai," },
        { time: 24.5, text: "Enakku ipo venum bodhai." },
        { time: 25.5, text: "Takkaru takkaru damaaru," },
        { time: 26.5, text: "Nee illama naanum sumaaru" },
        { time: 27.5, text: "Hey! Pencil lady, naa valakkuren thaadi," },
        { time: 28.5, text: "Unnala aanen, eh ipo naanum KD." },
        { time: 29.5, text: "Suthi vita bhambaram, kairu illaa thadhiram..." },
        { time: 30.5, text: "Hey! Takkaru takkaru damaaru," },
        { time: 31.5, text: "Nee illama naanum sumaaru." },
    ];

    // Add lyrics to the container
    function addLyrics() {
        lyricsContainer.innerHTML = lyrics.map(line => `<p>${line.text}</p>`).join('');
    }

    addLyrics();

    // Sync lyrics with audio time
    function syncLyrics(currentTime) {
        const delayIncrement = 0.5; // Adjust this value for timing between lines
        lyrics.forEach((line, index) => {
            const lyricElement = lyricsContainer.children[index];
            if (currentTime >= line.time - delayIncrement * index && (index === lyrics.length - 1 || currentTime < lyrics[index + 1].time - delayIncrement * index)) {
                lyricElement.style.opacity = 1;
                lyricElement.classList.add('highlighted');
                lyricElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
            } else {
                lyricElement.style.opacity = 0;
                lyricElement.classList.remove('highlighted');
            }
        });
    }
});










