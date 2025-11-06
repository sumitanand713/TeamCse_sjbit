// This function runs as soon as the page content is loaded
document.addEventListener("DOMContentLoaded", () => {

    // Get the modal elements
    const modal = document.getElementById("profile-setup-modal");
    const form = document.getElementById("profile-setup-form");

    // --- 1. Show the modal on page load ---
    // We assume the user is new if they land here without preferences
    // In a real app, you'd check if they have saved prefs first
    if (modal) {
        modal.classList.add("show");
        // We no longer need to blur the body, backdrop-filter does it
    }

    // --- 2. Handle the form submission ---
    if (form) {
        form.addEventListener("submit", (event) => {
            // Prevent the form from reloading the page
            event.preventDefault(); 
            
            // Get the selected values
            const selectedGrade = document.getElementById("grade").value;
            const selectedExam = document.getElementById("target-exam").value;

            console.log("Profile Saved:");
            console.log("Grade:", selectedGrade);
            console.log("Target Exam:", selectedExam);

            // !! In a real app, you would send this data to your backend API here !!
            // fetch('/api/save-profile', { ... });

            // --- 3. Hide the modal ---
            modal.classList.remove("show");
            
            // You could also update the dashboard text here
            const examText = document.querySelector(".dashboard-container h1");
            if(examText) {
                examText.textContent = `Welcome, ${selectedExam} Aspirant!`;
            }
        });
    }

});