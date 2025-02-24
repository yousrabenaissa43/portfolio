document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".project-card").forEach(card => {
        let imageUrl = card.getAttribute("data-image");
        if (imageUrl) {
            card.style.backgroundImage = `url(${imageUrl})`;
        }
    });
});
