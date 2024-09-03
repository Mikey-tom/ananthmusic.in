// script.js

const audioPlayer = document.getElementById('audioPlayer');
const lyricsContainer = document.getElementById('lyricsContainer');
const body = document.body;

// Define the lyrics with timestamps and associated colors
const lyrics = [
    { time: 0, text: "Kadhal talk-u, night-u peak-u,", color: "#FFB6C1" }, // Light pink
    { time: 6, text: "Pesi pesi soodukaadu aachu.", color: "#FFCCCB" }, // Light red
    { time: 12, text: "Cat-u talk-u, moon walk-u,", color: "#FFDDC1" }, // Light peach
    { time: 16, text: "Avala paathu ehlam poochu.", color: "#FFDAB9" }, // Peach puff
    { time: 20, text: "Un kannadiyil naan, ennai thedi ponene,", color: "#E0FFFF" }, // Light cyan
    { time: 24, text: "Kannodu kannin vishayam theriyuma?", color: "#E6E6FA" }, // Lavender
    { time: 26, text: "Un mazhaiyil naan, kaatrai thedi nadandhen,", color: "#F0E68C" }, // Khaki
    { time: 32, text: "Kattrin oram, kadhalin moham.", color: "#FFFACD" }, // Lemon chiffon
    { time: 36, text: "Hey, raathiri raathiri radhai,", color: "#FFB6C1" }, // Light pink
    { time: 38, text: "Enakku ipo venum bodhai.", color: "#FFCCCB" }, // Light red
    { time: 42, text: "Takkaru takkaru damaaru,", color: "#FFDDC1" }, // Light peach
    { time: 46, text: "Nee illama naanum sumaaru.", color: "#FFDAB9" }, // Peach puff
    { time: 48, text: "Oru vaarthai sol, naan vaazhven,", color: "#E0FFFF" }, // Light cyan
    { time: 52, text: "Oru silu silu vaarthai vaangi,", color: "#E6E6FA" }, // Lavender
    { time: 56, text: "Kadhal ariven.", color: "#F0E68C" }, // Khaki
    { time: 60, text: "Podi podi paava kaari,", color: "#FFFACD" }, // Lemon chiffon
    { time: 64, text: "Nee thaane enakku sooniya kaari.", color: "#FFB6C1" }, // Light pink
    { time: 68, text: "Right-u wrong-u, queen-u pei-u,", color: "#FFCCCB" }, // Light red
    { time: 72, text: "Unna paatha alaeyh gaali", color: "#FFDDC1" }, // Light peach
    { time: 76, text: "Nee vanthaal, mazhalai paadum,", color: "#FFDAB9" }, // Peach puff
    { time: 80, text: "Thunaiyaaga naan, un mela nenaipen thooral.", color: "#E0FFFF" }, // Light cyan
    { time: 84, text: "Mannippu thedi, marandhaalum,", color: "#E6E6FA" }, // Lavender
    { time: 88, text: "Thirumbum vazhi illaye.", color: "#F0E68C" }, // Khaki
    { time: 92, text: "Hey, raathiri raathiri radhai,", color: "#FFFACD" }, // Lemon chiffon
    { time: 96, text: "Enakku ipo venum bodhai.", color: "#FFB6C1" }, // Light pink
    { time: 100, text: "Takkaru takkaru damaaru,", color: "#FFCCCB" }, // Light red
    { time: 104, text: "Nee illama naanum sumaaru", color: "#FFDDC1" }, // Light peach
    { time: 108, text: "Hey! Pencil lady, naa valakkuren thaadi,", color: "#FFDAB9" }, // Peach puff
    { time: 112, text: "Unnala aanen, eh ipo naanum KD.", color: "#E0FFFF" }, // Light cyan
    { time: 116, text: "Suthi vita bhambaram, kairu illaa thadhiram...", color: "#E6E6FA" }, // Lavender
    { time: 120, text: "Hey! Takkaru takkaru damaaru,", color: "#F0E68C" }, // Khaki
    { time: 124, text: "Nee illama naanum sumaaru.", color: "#FFFACD" } // Lemon chiffon
];

let currentLyricIndex = -1;

function updateLyricsAndColor() {
    const currentTime = audioPlayer.currentTime;

    // Find the current lyric line
    const newLyricIndex = lyrics.findIndex(lyric => lyric.time > currentTime);

    // Update lyrics if the lyric index has changed
    if (newLyricIndex > 0 && newLyricIndex !== currentLyricIndex) {
        const currentLyric = lyrics[newLyricIndex - 1];
        lyricsContainer.textContent = currentLyric.text;
        body.style.backgroundColor = currentLyric.color;
        currentLyricIndex = newLyricIndex - 1; // Update current index
    }
}

// Use requestAnimationFrame for smoother updates
function onTimeUpdate() {
    updateLyricsAndColor();
    requestAnimationFrame(onTimeUpdate);
}

// Event listener to update lyrics and color during playback
audioPlayer.addEventListener('play', () => {
    requestAnimationFrame(onTimeUpdate);
});







