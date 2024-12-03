// Add scroll animation
document.addEventListener("DOMContentLoaded", () => {
    const cards = document.querySelectorAll(".card");

    const revealCards = () => {
        cards.forEach(card => {
            const cardTop = card.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;

            if (cardTop < windowHeight - 50) {
                card.style.opacity = "1";
                card.style.transform = "translateY(0)";
            }
        });
    };

    revealCards();
    window.addEventListener("scroll", revealCards);
});

// Sticky Header
const header = document.querySelector(".header");

window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
});
