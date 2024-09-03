// script.js

const audioPlayer = document.getElementById('audioPlayer');
const lyricsContainer = document.getElementById('lyricsContainer');

// Define the lyrics with time stamps
const lyrics = [
    { time: 0, text: "Kadhal talk-u, night-u peak-u," },
    { time: 1, text: "Pesi pesi soodukaadu aachu." },
    { time: 2, text: "Cat-u talk-u, moon walk-u," },
    { time: 3, text: "Avala paathu ehlam poochu." },
    { time: 5, text: "Un kannadiyil naan, ennai thedi ponene," },
    { time: 8, text: "Kannodu kannin vishayam theriyuma?" },
    { time: 10, text: "Un mazhaiyil naan, kaatrai thedi nadandhen," },
    { time: 12, text: "Kattrin oram, kadhalin moham." },
    { time: 14, text: "Hey, raathiri raathiri radhai," },
    { time: 16, text: "Enakku ipo venum bodhai." },
    { time: 18, text: "Takkaru takkaru damaaru," },
    { time: 20, text: "Nee illama naanum sumaaru." },
    { time: 22, text: "Oru vaarthai sol, naan vaazhven," },
    { time: 24, text: "Oru silu silu vaarthai vaangi," },
    { time: 26, text: "Kadhal ariven." },
    { time: 28, text: "Podi podi paava kaari," },
    { time: 30, text: "Nee thaane enakku sooniya kaari." },
    { time: 32, text: "Right-u wrong-u, queen-u pei-u," },
    { time: 34, text: "Unna paatha alaeyh gaali" },
    { time: 36, text: "Nee vanthaal, mazhalai paadum," },
    { time: 40, text: "Thunaiyaaga naan, un mela nenaipen thooral." },
    { time: 42, text: "Mannippu thedi, marandhaalum," },
    { time: 44, text: "Thirumbum vazhi illaye." },
    { time: 46, text: "Hey, raathiri raathiri radhai," },
    { time: 48, text: "Enakku ipo venum bodhai." },
    { time: 50, text: "Takkaru takkaru damaaru," },
    { time: 52, text: "Nee illama naanum sumaaru" },
    { time: 54, text: "Hey! Pencil lady, naa valakkuren thaadi," },
    { time: 56, text: "Unnala aanen, eh ipo naanum KD." },
    { time: 60, text: "Suthi vita bhambaram, kairu illaa thadhiram..." },
    { time: 62, text: "Hey! Takkaru takkaru damaaru," },
    { time: 64, text: "Nee illama naanum sumaaru." }
];

// Function to update lyrics based on current time
function updateLyrics() {
    const currentTime = audioPlayer.currentTime;
    const currentLyric = lyrics.find(lyric => lyric.time <= currentTime && (lyrics[lyrics.indexOf(lyric) + 1] ? lyrics[lyrics.indexOf(lyric) + 1].time > currentTime : true));

    if (currentLyric) {
        lyricsContainer.textContent = currentLyric.text;
    }
}

// Event listener to update lyrics during playback
audioPlayer.addEventListener('timeupdate', updateLyrics);





