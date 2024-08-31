document.addEventListener('DOMContentLoaded', function () {
    const audioPlayer = document.getElementById('audioPlayer');
    const lyrics = document.querySelectorAll('#lyrics p');

    // Timing (in seconds) for when each lyric line should appear
    const lyricTimings = [0, 5, 10, 15]; // Adjust these values based on your lyrics and music

    // Synchronize lyrics with audio
    audioPlayer.addEventListener('timeupdate', function () {
        const currentTime = audioPlayer.currentTime;

        lyrics.forEach((line, index) => {
            if (currentTime >= lyricTimings[index] && (index === lyricTimings.length - 1 || currentTime < lyricTimings[index + 1])) {
                line.style.opacity = 1;
                line.scrollIntoView({ behavior: 'smooth', block: 'center' });
            } else {
                line.style.opacity = 0;
            }
        });
    });
});


