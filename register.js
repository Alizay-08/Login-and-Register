document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("registerForm");

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        // Get form values
        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const phone = document.getElementById("phone").value.trim();
        const password = document.getElementById("password").value.trim();

        // Name validation
        if (!/^[a-zA-Z\s]+$/.test(name) || name.length < 2) {
            alert("Please enter a valid name (letters only, at least 2 characters).");
            return;
        }

        // Email validation
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            alert("Please enter a valid email address.");
            return;
        }

        // Phone validation
        if (!/^\d{10,15}$/.test(phone)) {
            alert("Please enter a valid phone number (10-15 digits).");
            return;
        }

        // Password validation
        if (password.length < 6) {
            alert("Password must be at least 6 characters long.");
            return;
        }

        // If all is good
        alert("Registration successful!");
        form.submit();
    });
});
