// Wait for the entire page content to load
document.addEventListener("DOMContentLoaded", () => {
    
    // Find the login form by its ID
    const loginForm = document.getElementById("login-form");

    // Check if the form actually exists on this page
    if (loginForm) {
        // Add an event listener for the "submit" event
        loginForm.addEventListener("submit", (event) => {
            
            // 1. IMPORTANT: Stop the form from its default action (reloading the page)
            event.preventDefault();

            // 2. (Optional) You can add validation logic here
            // For example: check if email and password fields are filled
            
            // 3. Redirect the user to home.html
            window.location.href = "dashboard.html";
        });
    }

});