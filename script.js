document.addEventListener("DOMContentLoaded", function() {
    const lyrics = document.querySelector(".lyrics");
    const speed = 2000; // Speed in milliseconds per line

    function scrollLyrics() {
        let firstChild = lyrics.firstElementChild;
        firstChild.classList.add("fade-out");
        setTimeout(() => {
            lyrics.appendChild(firstChild);
            firstChild.classList.remove("fade-out");
        }, speed);
    }

    setInterval(scrollLyrics, speed);
});



