const audio = document.querySelector('.audio');
const button = document.querySelector('.audio__btn');
let isDefault = true;

button.addEventListener("click", function() {
    toggleBackImage();
    toggleAudio();
});

function toggleBackImage() {
    if (isDefault) {
        button.style.backgroundImage = "url(./resources/audio-btn-pause.jfif)";
    } else {
        button.style.backgroundImage = "url(./resources/audio-btn.png)";
    }
    isDefault = !isDefault;
}

function toggleAudio() {
    if (audio.paused) {
        audio.play();
    } else {
        audio.pause();
    }
}
