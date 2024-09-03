// script.js

const audioPlayer = document.getElementById('audioPlayer');
const lyricsContainer = document.getElementById('lyricsContainer');
const body = document.body;

// Define the lyrics with timestamps and associated colors
const lyrics = [
    { time: 0, text: "Kadhal talk-u, night-u peak-u,\nPesi pesi soodukaadu aachu.", color: "#FFB6C1" }, // Light pink
    { time: 4, text: "Cat-u talk-u, moon walk-u,\nAvala paathu ehlam poochu.", color: "#FFCCCB" }, // Light red
    { time: 8, text: "Un kannadiyil naan, ennai thedi ponene,\nKannodu kannin vishayam theriyuma?", color: "#FFDDC1" }, // Light peach
    { time: 12, text: "Un mazhaiyil naan, kaatrai thedi nadandhen,\nKattrin oram, kadhalin moham.", color: "#FFDAB9" }, // Peach puff
    { time: 16, text: "Hey, raathiri raathiri radhai,\nEnakku ipo venum bodhai.", color: "#E0FFFF" }, // Light cyan
    { time: 20, text: "Takkaru takkaru damaaru,\nNee illama naanum sumaaru.", color: "#E6E6FA" }, // Lavender
    { time: 24, text: "Oru vaarthai sol, naan vaazhven,\nOru silu silu vaarthai vaangi,\nKadhal ariven.", color: "#F0E68C" }, // Khaki
    { time: 28, text: "Podi podi paava kaari,\nNee thaane enakku sooniya kaari.", color: "#FFFACD" }, // Lemon chiffon
    { time: 32, text: "Right-u wrong-u, queen-u pei-u,\nUnna paatha alaeyh gaali", color: "#FFB6C1" },
    { time: 36, text: "Nee vanthaal, mazhalai paadum,\nThunaiyaaga naan, un mela nenaipen thooral.", color: "#FFCCCB" },
    { time: 40, text: "Mannippu thedi, marandhaalum,\nThirumbum vazhi illaye.", color: "#FFDDC1" },
    { time: 44, text: "Hey, raathiri raathiri radhai,\nEnakku ipo venum bodhai.", color: "#FFDAB9" },
    { time: 48, text: "Takkaru takkaru damaaru,\nNee illama naanum sumaaru", color: "#E0FFFF" },
    { time: 52, text: "Hey! Pencil lady, naa valakkuren thaadi,\nUnnala aanen, eh ipo naanum KD.", color: "#E6E6FA" },
    { time: 56, text: "Suthi vita bhambaram, kairu illaa thadhiram...\nHey! Takkaru takkaru damaaru,\nNee illama naanum sumaaru.", color: "#F0E68C" }
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





