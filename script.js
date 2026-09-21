/* =========================
   ELEMENTS
========================= */

const openingScreen =
    document.getElementById("openingScreen");

const proposal =
    document.getElementById("proposal");

const envelope =
    document.getElementById("envelope");

const openBtn =
    document.getElementById("openBtn");

const yesBtn =
    document.getElementById("yesBtn");

const noBtn =
    document.getElementById("noBtn");

const successScreen =
    document.getElementById("successScreen");

const musicBtn =
    document.getElementById("musicBtn");

const bgMusic =
    document.getElementById("bgMusic");

const heartsContainer =
    document.getElementById("heartsContainer");


/* =========================
   MUSIC
========================= */

let musicPlaying = false;


async function playMusic() {

    try {

        bgMusic.volume = 0.7;

        await bgMusic.play();

        musicPlaying = true;

        musicBtn.innerHTML = "🔊";

        console.log("Music playing successfully");

    } catch (error) {

        console.error(
            "Music could not play:",
            error
        );

        musicPlaying = false;

        musicBtn.innerHTML = "🎵";

    }
}


/* =========================
   MUSIC BUTTON
========================= */

musicBtn.addEventListener(
    "click",
    async () => {

        if (musicPlaying) {

            bgMusic.pause();

            musicPlaying = false;

            musicBtn.innerHTML = "🎵";

        } else {

            await playMusic();

        }

    }
);


/* =========================
   OPEN ENVELOPE
========================= */

function openLetter() {

    /*
       IMPORTANT:
       playMusic() is called here because
       this function runs after the user's
       button click.
    */

    playMusic();


    envelope.classList.add("open");


    openBtn.innerHTML =
        "Opening... 💕";


    openBtn.disabled = true;


    setTimeout(() => {

        openingScreen.style.display =
            "none";

        proposal.classList.add("show");

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    }, 1200);

}


openBtn.addEventListener(
    "click",
    openLetter
);


/* =========================
   YES BUTTON
========================= */

yesBtn.addEventListener(
    "click",
    () => {

        successScreen.classList.add("show");

        createCelebration();

    }
);


/* =========================
   NO BUTTON
========================= */

function moveNoButton() {

    const buttonWidth =
        noBtn.offsetWidth;

    const buttonHeight =
        noBtn.offsetHeight;


    const maxX =
        window.innerWidth -
        buttonWidth -
        30;


    const maxY =
        window.innerHeight -
        buttonHeight -
        30;


    const randomX =
        Math.max(
            20,
            Math.random() * maxX
        );


    const randomY =
        Math.max(
            20,
            Math.random() * maxY
        );


    noBtn.style.position =
        "fixed";


    noBtn.style.left =
        `${randomX}px`;


    noBtn.style.top =
        `${randomY}px`;


    noBtn.style.zIndex =
        "9999";
}


/*
   Desktop
*/

noBtn.addEventListener(
    "mouseenter",
    moveNoButton
);


/*
   Mobile
*/

noBtn.addEventListener(
    "touchstart",
    (event) => {

        event.preventDefault();

        moveNoButton();

    }
);


/* =========================
   FLOATING HEARTS
========================= */

function createHeart() {

    const heart =
        document.createElement("div");


    heart.classList.add(
        "floating-heart"
    );


    const hearts = [
        "❤️",
        "💕",
        "💗",
        "💖",
        "💘"
    ];


    heart.innerHTML =
        hearts[
            Math.floor(
                Math.random() *
                hearts.length
            )
        ];


    heart.style.left =
        Math.random() * 100 + "%";


    heart.style.fontSize =
        `${15 + Math.random() * 25}px`;


    heart.style.animationDuration =
        `${4 + Math.random() * 4}s`;


    heartsContainer.appendChild(
        heart
    );


    setTimeout(() => {

        heart.remove();

    }, 8000);

}


/*
   Create hearts continuously
*/

setInterval(
    createHeart,
    700
);


/* =========================
   YES CELEBRATION
========================= */

function createCelebration() {

    for (
        let i = 0;
        i < 40;
        i++
    ) {

        setTimeout(
            createHeart,
            i * 80
        );

    }

}


/* =========================
   KEYBOARD SUPPORT
========================= */

document.addEventListener(
    "keydown",
    (event) => {

        if (
            event.key === "Enter" &&
            !openBtn.disabled &&
            openingScreen.style.display !== "none"
        ) {

            openLetter();

        }

    }
);