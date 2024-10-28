// Redirect to shutdown page if website is shut down
if (localStorage.getItem('websiteShutdown') === 'true') {
    window.location.href = 'shutdown.html';
}

document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.getElementById("loginForm");
    const navButtons = document.getElementById("navButtons");
    const disabledMessage = document.getElementById("disabledMessage");

    // Admin login status - toggled via admin panel
    let loginEnabled = true; // This should be dynamically updated from your server in production

    // Sample login credentials
    const validUsername = "interstellar";
    const validPassword = "newpassword123";

    // Admin credentials
    const adminUsername = "admin";
    const adminPassword = "ilovefruit123";

    loginForm.addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent form submission
        
        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;

        // Check if login is enabled
        if (!loginEnabled) {
            disabledMessage.style.display = "block";
            return;
        }

        // Validate login credentials
        if ((username === validUsername && password === validPassword) || 
            (username === adminUsername && password === adminPassword)) {
            // If login is successful, show navigation buttons
            navButtons.style.display = "block";
            document.querySelector(".login-container").style.display = "none"; // Hide login form
            
            // Check if the user is admin
            if (username === adminUsername) {
                alert("Welcome, Admin! You have access to the admin panel.");
                // Here you could redirect to the admin panel page if desired
                // window.location.href = 'admin.html'; 
            }
        } else {
            alert("Invalid username or password. Please try again.");
        }
    });
});

// Logout function
function logout() {
    // Here you could add logic to handle logout, such as clearing session data
    alert("You have been logged out.");
    window.location.href = "index.html"; // Redirect to login page after logout
}
