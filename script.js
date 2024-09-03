


document.addEventListener('DOMContentLoaded', function () {
    const audioPlayer = document.getElementById('audioPlayer');
    const playPauseBtn = document.getElementById('playPauseBtn');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const loopBtn = document.getElementById('loopBtn');
    const likeBtn = document.getElementById('likeBtn');
    const likeCountElem = document.getElementById('likeCount');
    const volumeControl = document.getElementById('volumeControl');
    const progressBar = document.getElementById('progressBar');
    const currentTimeElem = document.getElementById('currentTime');
    const durationElem = document.getElementById('duration');
    const playbackSpeed = document.getElementById('playbackSpeed');
    const downloadBtn = document.getElementById('downloadBtn');
    const lyricsContainer = document.getElementById('lyrics');

    let isPlaying = false;
    let isLooping = false;
    let likeCount = 0;

    // Lyrics data
    const lyricsData = [
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
        { time: 130, text: "Nee illama naanum sumaaru." },
        { time: 135, text: "Hey! Pencil lady, naa valakkuren thaadi," },
        { time: 140, text: "Unnala aanen, eh ipo naanum KD." },
        { time: 145, text: "Suthi vita bhambaram, kairu illaa thadhiram..." },
        { time: 150, text: "Hey! Takkaru takkaru damaaru," },
        { time: 155, text: "Nee illama naanum sumaaru." }
    ];

    // Add lyrics to the container
    lyricsData.forEach(item => {
        const p = document.createElement('p');
        p.textContent = item.text;
        lyricsContainer.appendChild(p);
    });

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

    // Previous and Next functionality
    prevBtn.addEventListener('click', function () {
        // Logic to play the previous track
    });

    nextBtn.addEventListener('click', function () {
        // Logic to play the next track
    });

    // Loop functionality
    loopBtn.addEventListener('







