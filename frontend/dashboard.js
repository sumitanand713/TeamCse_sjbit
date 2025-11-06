// Wait for the entire page content to load
document.addEventListener("DOMContentLoaded", () => {

    // --- 1. MODAL LOGIC ---
    
    const modal = document.getElementById("profile-setup-modal");
    const form = document.getElementById("profile-setup-form");

    // Check if the user has saved preferences. We use localStorage for this demo.
    // In a real app, you'd check your backend.
    const hasProfile = localStorage.getItem("eduPathProfileSaved");

    // If no profile is saved, show the modal.
    if (!hasProfile && modal) {
        modal.classList.add("show");
    }

    // When the modal form is submitted
    if (form) {
        form.addEventListener("submit", (event) => {
            event.preventDefault(); 
            
            const selectedGrade = document.getElementById("grade").value;
            const selectedExam = document.getElementById("target-exam").value;

            // Save to localStorage to "remember"
            localStorage.setItem("eduPathProfileSaved", "true");
            localStorage.setItem("eduPathExam", selectedExam);
            
            console.log("Profile Saved:", selectedGrade, selectedExam);
            
            // Hide the modal
            modal.classList.remove("show");

            // Update the homepage title
            const homeTitle = document.querySelector("#home h1");
            if (homeTitle) {
                homeTitle.textContent = `Welcome, ${selectedExam} Aspirant!`;
            }
        });
    }

    // --- 2. TAB SWITCHING LOGIC ---

    const tabLinks = document.querySelectorAll(".dashboard-nav a");
    const tabPanes = document.querySelectorAll(".tab-pane");

    tabLinks.forEach(link => {
        link.addEventListener("click", (event) => {
            event.preventDefault(); // Stop the link from changing the URL

            const targetTabId = link.getAttribute("data-tab");

            // 1. Deactivate all tabs
            tabLinks.forEach(item => {
                item.classList.remove("active");
            });

            // 2. Deactivate all panes
            tabPanes.forEach(pane => {
                pane.classList.remove("active");
            });

            // 3. Activate the clicked tab
            link.classList.add("active");

            // 4. Activate the corresponding pane
            const targetPane = document.getElementById(targetTabId);
            if (targetPane) {
                targetPane.classList.add("active");
            }
        });
    });

});

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