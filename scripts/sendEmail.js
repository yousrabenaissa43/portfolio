document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();

    emailjs.init("YOUR_USER_ID"); // Replace with your EmailJS User ID

    emailjs.send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", {
        from_name: document.getElementById("name").value,
        from_email: document.getElementById("email").value,
        message: document.getElementById("message").value,
    }).then(function(response) {
        alert("Email sent successfully!");
    }, function(error) {
        alert("Failed to send email: " + error.text);
    });
});
