
document.addEventListener("DOMContentLoaded", () => {
    const skills = document.querySelectorAll(".skill");
    skills.forEach((skill, index) => {
        setTimeout(() => {
            skill.style.animation = "float 2s infinite alternate";
        }, index * 300);
    });

    document.querySelector("form").addEventListener("submit", (e) => {
        e.preventDefault();
        alert("Message sent successfully!");
    });
});

// Create a starry background by adding stars dynamically
function createStars() {
    const starCount = 100; // Number of stars
    const starsContainer = document.getElementById('stars');

    for (let i = 0; i < starCount; i++) {
        const star = document.createElement('div');
        star.classList.add('star');

        // Set random size and position for each star
        const size = Math.random() * 2 + 1; // Random size between 1 and 3
        const xPosition = Math.random() * window.innerWidth;
        const yPosition = Math.random() * window.innerHeight;

        star.style.width = `${size}px`;
        star.style.height = `${size}px`;
        star.style.left = `${xPosition}px`;
        star.style.top = `${yPosition}px`;

        // Append the star to the stars container
        starsContainer.appendChild(star);
    }
}

// Call the function to create stars when the page loads
window.onload = createStars;
