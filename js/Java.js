document.addEventListener('DOMContentLoaded', function () {
    const cards = document.querySelectorAll('.card');

    window.addEventListener('scroll', function () {
        cards.forEach(card => {
            const rect = card.getBoundingClientRect();
            if (rect.top < window.innerHeight && rect.bottom > 0) {
                card.style.transform = `rotateY(${(window.scrollY % 360)}deg)`;
            } else {
                card.style.transform = 'rotateY(0deg)';
            }
        });
    });
});
