document.addEventListener('DOMContentLoaded', function () {
    const audioPlayer = document.getElementById('audioPlayer');
    const playPauseBtn = document.getElementById('playPauseBtn');
    const progressBar = document.getElementById('progressBar');
    const currentTimeElem = document.getElementById('currentTime');
    const durationElem = document.getElementById('duration');
    const lyrics = document.querySelectorAll('#lyrics p');

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

    // Sync lyrics with audio time
    const lyricTimings = [0, 5, 10, 15]; // Adjust timings according to your lyrics

    function syncLyrics(currentTime) {
        lyrics.forEach((line, index) => {
            if (currentTime >= lyricTimings[index] && (index === lyricTimings.length - 1 || currentTime < lyricTimings[index + 1])) {
                line.style.color = '#1db954';
                line.scrollIntoView({ behavior: 'smooth', block: 'center' });
            } else {
                line.style.color = '#fff';
            }
        });
    }

    // Format time to mm:ss
    function formatTime(seconds) {
        const minutes = Math.floor(seconds / 60);
        const secs = Math.floor(seconds % 60);
        return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
    }
});


