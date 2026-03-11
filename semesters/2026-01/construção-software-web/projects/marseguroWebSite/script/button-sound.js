const clickSound = new Audio("assets/sounds/click-feedback.mp3");

document.querySelectorAll("button").forEach(button => {
    button.addEventListener("click", () => {
        clickSound.currentTime = 0;
        clickSound.play();
    });
});