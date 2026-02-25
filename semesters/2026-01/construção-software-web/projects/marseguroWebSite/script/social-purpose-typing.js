const words = [
    "Pescadores Artesanais",
    "Navegantes Amadores",
    "Usuários de Pequenas Embarcações",
    "Comunidades Ribeirinhas e Costeiras"
];

const typingElement = document.getElementById("typing-text");

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

const typingSpeed = 80;
const deletingSpeed = 50;
const pauseAfterTyping = 1500;

function typeEffect() {
    const currentWord = words[wordIndex];

    if (!isDeleting) {
        // digitando
        typingElement.textContent = currentWord.substring(0, charIndex + 1);
        charIndex++;

        if (charIndex === currentWord.length) {
            setTimeout(() => {
                isDeleting = true;
            }, pauseAfterTyping);
        }
    } else {
        // apagando
        typingElement.textContent = currentWord.substring(0, charIndex - 1);
        charIndex--;

        if (charIndex === 0) {
            typingElement.textContent = "\u00A0";
            isDeleting = false;
            wordIndex = (wordIndex + 1) % words.length;
        }
    }

    setTimeout(
        typeEffect,
        isDeleting ? deletingSpeed : typingSpeed
    );
}

typeEffect();