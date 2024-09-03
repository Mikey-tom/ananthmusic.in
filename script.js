document.addEventListener('DOMContentLoaded', function () {
    const audioPlayer = document.getElementById('audioPlayer');
    const playPauseBtn = document.getElementById('playPauseBtn');
    const progressBar = document.getElementById('progressBar');
    const volumeControl = document.getElementById('volumeControl');
    const currentTimeElem = document.getElementById('currentTime');
    const durationElem = document.getElementById('duration');
    const likeBtn = document.getElementById('likeBtn');
    const likeCountElem = document.getElementById('likeCount');
    const downloadBtn = document.getElementById('downloadBtn');
    const loopBtn = document.getElementById('loopBtn');
    const speedBtn = document.getElementById('speedBtn');
    const lyrics = document.querySelectorAll('#lyrics p');

    let isPlaying = false;
    let isLooping = false;
    let playbackSpeed = 1;
    let likeCount = 0;

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

    // Volume control
    volumeControl.addEventListener('input', function () {
        audioPlayer.volume = volumeControl.value / 100;
    });

    // Download button functionality
    downloadBtn.addEventListener('click', function () {
        const link = document.createElement('a');
        link.href = audioPlayer.src;
        link.download = 'Kadhal_Night.mp3';
        link.click();
    });

    // Loop button functionality
    loopBtn.addEventListener('click', function () {
        isLooping = !isLooping;
        loopBtn.textContent = isLooping ? 'Loop: On' : 'Loop: Off';
        audioPlayer.loop = isLooping;
    });

    // Playback speed control
    speedBtn.addEventListener('click', function () {
        playbackSpeed = playbackSpeed === 1 ? 1.5 : 1;
        audioPlayer.playbackRate = playbackSpeed;
        speedBtn.textContent = `Speed: ${playbackSpeed}x`;
    });

    // Like button functionality
    likeBtn.addEventListener('click', function () {
        likeCount++;
        likeCountElem.textContent = likeCount;
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
    const lyricTimings = [0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95]; // Adjust timings according to your lyrics

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









