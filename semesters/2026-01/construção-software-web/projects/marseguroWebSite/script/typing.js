document.addEventListener("DOMContentLoaded", function () {

    function createTypingEffect(elementId, words) {
        const typingElement = document.getElementById(elementId);
        if (!typingElement) return;

        let wordIndex = 0;
        let charIndex = 0;
        let isDeleting = false;

        const typingSpeed = 80;
        const deletingSpeed = 50;
        const pauseAfterTyping = 1500;

        function typeEffect() {
            const currentWord = words[wordIndex];

            if (!isDeleting) {
                typingElement.textContent = currentWord.substring(0, charIndex + 1);
                charIndex++;

                if (charIndex === currentWord.length) {
                    setTimeout(() => isDeleting = true, pauseAfterTyping);
                }
            } else {
                typingElement.textContent = currentWord.substring(0, charIndex - 1);
                charIndex--;

                if (charIndex === 0) {
                    isDeleting = false;
                    wordIndex = (wordIndex + 1) % words.length;
                }
            }

            setTimeout(typeEffect, isDeleting ? deletingSpeed : typingSpeed);
        }

        typeEffect();
    }

    // 🔥 Aqui você instancia dois efeitos independentes
    createTypingEffect("typing-text", [
        "Pescadores Artesanais",
        "Navegantes Amadores",
        "Comunidades Ribeirinhas e Costeiras",
        "Usuários de Pequenas Embarcações"
    ]);

    createTypingEffect("app-subtitle", [
        "Navegue com mais segurança",
        "Previna-se de Acidentes",
        "Aplicativo Gratuito"
    ]);

});