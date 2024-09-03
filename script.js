// script.js

const audioPlayer = document.getElementById('audioPlayer');
const lyricsContainer = document.getElementById('lyricsContainer');

// Define the lyrics with time stamps
const lyrics = [
    { time: 0, text: "Kadhal talk-u, night-u peak-u," },
    { time: 4, text: "Pesi pesi soodukaadu aachu." },
    { time: 8, text: "Cat-u talk-u, moon walk-u," },
    { time: 12, text: "Avala paathu ehlam poochu." },
    { time: 16, text: "Un kannadiyil naan, ennai thedi ponene," },
    { time: 20, text: "Kannodu kannin vishayam theriyuma?" },
    { time: 24, text: "Un mazhaiyil naan, kaatrai thedi nadandhen," },
    { time: 28, text: "Kattrin oram, kadhalin moham." },
    { time: 32, text: "Hey, raathiri raathiri radhai," },
    { time: 36, text: "Enakku ipo venum bodhai." },
    { time: 40, text: "Takkaru takkaru damaaru," },
    { time: 44, text: "Nee illama naanum sumaaru." },
    { time: 48, text: "Oru vaarthai sol, naan vaazhven," },
    { time: 52, text: "Oru silu silu vaarthai vaangi," },
    { time: 56, text: "Kadhal ariven." },
    { time: 60, text: "Podi podi paava kaari," },
    { time: 64, text: "Nee thaane enakku sooniya kaari." },
    { time: 68, text: "Right-u wrong-u, queen-u pei-u," },
    { time: 72, text: "Unna paatha alaeyh gaali" },
    { time: 76, text: "Nee vanthaal, mazhalai paadum," },
    { time: 80, text: "Thunaiyaaga naan, un mela nenaipen thooral." },
    { time: 84, text: "Mannippu thedi, marandhaalum," },
    { time: 88, text: "Thirumbum vazhi illaye." },
    { time: 92, text: "Hey, raathiri raathiri radhai," },
    { time: 96, text: "Enakku ipo venum bodhai." },
    { time: 100, text: "Takkaru takkaru damaaru," },
    { time: 104, text: "Nee illama naanum sumaaru" },
    { time: 108, text: "Hey! Pencil lady, naa valakkuren thaadi," },
    { time: 112, text: "Unnala aanen, eh ipo naanum KD." },
    { time: 116, text: "Suthi vita bhambaram, kairu illaa thadhiram..." },
    { time: 120, text: "Hey! Takkaru takkaru damaaru," },
    { time: 124, text: "Nee illama naanum sumaaru." }
];

let currentLyricIndex = -1;

function updateLyrics() {
    const currentTime = audioPlayer.currentTime;
    
    // Find the current lyric line
    const newLyricIndex = lyrics.findIndex(lyric => lyric.time > currentTime);
    
    // If the new index is valid and different from the current index
    if (newLyricIndex > 0 && newLyricIndex !== currentLyricIndex) {
        // Update the lyrics container
        lyricsContainer.textContent = lyrics[newLyricIndex - 1].text;
        currentLyricIndex = newLyricIndex - 1; // Update current index
    }
}

// Use requestAnimationFrame for smoother updates
function onTimeUpdate() {
    updateLyrics();
    requestAnimationFrame(onTimeUpdate);
}

// Event listener to update lyrics during playback
audioPlayer.addEventListener('play', () => {
    requestAnimationFrame(onTimeUpdate);
});
