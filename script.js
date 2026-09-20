// ===============================
// ELEMENTS
// ===============================

const envelope = document.getElementById("envelope");
const openBtn = document.getElementById("openBtn");

const openingScreen =
  document.getElementById("openingScreen");

const proposal =
  document.getElementById("proposal");

const yesBtn =
  document.getElementById("yesBtn");

const noBtn =
  document.getElementById("noBtn");

const successScreen =
  document.getElementById("successScreen");

const closeSuccess =
  document.getElementById("closeSuccess");

const musicBtn =
  document.getElementById("musicBtn");

const bgMusic =
  document.getElementById("bgMusic");


// ===============================
// OPEN LETTER
// ===============================

openBtn.addEventListener("click", () => {

  envelope.classList.add("open");

  openBtn.innerHTML = "Opening... 💕";

  setTimeout(() => {

    openingScreen.style.display = "none";

    proposal.classList.add("show");

    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });

  }, 1200);

});


// Also open when clicking envelope

envelope.addEventListener("click", () => {

  if (!envelope.classList.contains("open")) {

    envelope.classList.add("open");

    openBtn.innerHTML = "Opening... 💕";

    setTimeout(() => {

      openingScreen.style.display = "none";

      proposal.classList.add("show");

    }, 1200);

  }

});


// ===============================
// YES BUTTON
// ===============================

yesBtn.addEventListener("click", () => {

  successScreen.classList.add("show");

  createCelebration();

});


// ===============================
// NO BUTTON
// ===============================

function moveNoButton() {

  const maxX = window.innerWidth - 160;
  const maxY = window.innerHeight - 100;

  const x = Math.random() * maxX - maxX / 2;
  const y = Math.random() * maxY - maxY / 2;

  noBtn.style.position = "fixed";

  noBtn.style.left = "50%";
  noBtn.style.top = "50%";

  noBtn.style.transform =
    `translate(calc(-50% + ${x}px),
               calc(-50% + ${y}px))`;
}


// Desktop

noBtn.addEventListener("mouseenter", moveNoButton);


// Mobile

noBtn.addEventListener("touchstart", (event) => {

  event.preventDefault();

  moveNoButton();

});


// ===============================
// SUCCESS CLOSE
// ===============================

closeSuccess.addEventListener("click", () => {

  successScreen.classList.remove("show");

});


// ===============================
// FLOATING HEARTS
// ===============================

const heartsContainer =
  document.querySelector(".hearts");

function createHeart() {

  const heart =
    document.createElement("div");

  heart.className = "heart";

  const hearts = [
    "❤️",
    "💕",
    "💗",
    "💖",
    "💘",
    "💓"
  ];

  heart.innerHTML =
    hearts[Math.floor(Math.random() * hearts.length)];

  heart.style.left =
    Math.random() * 100 + "%";

  heart.style.fontSize =
    12 + Math.random() * 25 + "px";

  heart.style.animationDuration =
    5 + Math.random() * 7 + "s";

  heartsContainer.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 13000);
}


// Create hearts continuously

setInterval(createHeart, 600);


// ===============================
// CELEBRATION
// ===============================

function createCelebration() {

  for (let i = 0; i < 50; i++) {

    setTimeout(() => {

      const heart =
        document.createElement("div");

      heart.className = "heart";

      heart.innerHTML =
        ["❤️", "💖", "💕", "💍", "✨"]
        [Math.floor(Math.random() * 5)];

      heart.style.left =
        Math.random() * 100 + "%";

      heart.style.fontSize =
        15 + Math.random() * 30 + "px";

      heart.style.animationDuration =
        3 + Math.random() * 4 + "s";

      heartsContainer.appendChild(heart);

      setTimeout(() => {
        heart.remove();
      }, 7000);

    }, i * 80);

  }

}


// ===============================
// MUSIC
// ===============================

let musicPlaying = false;

musicBtn.addEventListener("click", () => {

  if (!musicPlaying) {

    bgMusic.play()
      .then(() => {

        musicPlaying = true;

        musicBtn.innerHTML = "🔊";

      })
      .catch(() => {

        alert(
          "Add a file named music.mp3 to the project folder first ❤️"
        );

      });

  } else {

    bgMusic.pause();

    musicPlaying = false;

    musicBtn.innerHTML = "🎵";

  }

});