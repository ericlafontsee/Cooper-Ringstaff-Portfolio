const cards = document.querySelectorAll(".card");

cards.forEach(card => {
    const modalId = card.getAttribute('data-bs-target');
    const modal = document.querySelector(modalId);
    const video = modal.querySelector('video');

    card.addEventListener("click", () => {
        video.play();
    });

    modal.addEventListener('click', () => {
        video.pause();
    });
});
