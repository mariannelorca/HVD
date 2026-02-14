function openLetter() {
    document.querySelector(".envelope").style.display = "none";
    document.getElementById("letter").style.display = "block";

    document.getElementById("music").play();
}

/* Floating Hearts */
function createHeart() {
    const heart = document.createElement("div");
    heart.className = "heart";
    heart.innerHTML = "❤️";

    heart.style.left = Math.random() * window.innerWidth + "px";
    heart.style.bottom = "0px";

    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 5000);
}

setInterval(createHeart, 300);
