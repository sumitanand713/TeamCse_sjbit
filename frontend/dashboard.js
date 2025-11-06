/* ------------------ 1. RESOURCE DATABASE ------------------ */

const resourcesByExam = {
    "jee": {
        title: "IIT-JEE",
        subjects: {
            "Physics": [
                { title: "Rotation - JEE Advanced", channel: "Physics Galaxy", duration: "5:10:45", difficulty: "Hard", url: "https://www.youtube.com/results?search_query=Physics+Galaxy+Rotation+JEE" },
                { title: "Modern Physics - One Shot", channel: "Unacademy JEE", duration: "3:20:00", difficulty: "Medium", url: "https://www.youtube.com/results?search_query=Unacademy+JEE+Modern+Physics+One+Shot" },
                { title: "Units & Dimensions", channel: "Physics Wallah", duration: "1:30:00", difficulty: "Easy", url: "https://www.youtube.com/results?search_query=Physics+Wallah+Units+and+Dimensions" }
            ],
            "Chemistry": [
                { title: "Chemical Bonding - One Shot", channel: "Physics Wallah", duration: "4:05:10", difficulty: "Medium", url: "https://www.youtube.com/results?search_query=PW+Chemical+Bonding+One+Shot" },
                { title: "GOC Full Basics", channel: "Unacademy JEE", duration: "6:15:00", difficulty: "Hard", url: "https://www.youtube.com/results?search_query=Unacademy+JEE+GOC" },
                { title: "Mole Concept", channel: "Apni Kaksha", duration: "3:00:00", difficulty: "Easy", url: "https://www.youtube.com/results?search_query=Apni+Kaksha+Mole+Concept" }
            ],
            "Maths": [
                { title: "Calculus Marathon", channel: "Vedantu JEE", duration: "8:30:00", difficulty: "Hard", url: "https://www.youtube.com/results?search_query=Vedantu+JEE+Calculus+Marathon" },
                { title: "Conic Sections One Shot", channel: "Unacademy JEE", duration: "4:12:00", difficulty: "Medium", url: "https://www.youtube.com/results?search_query=Unacademy+JEE+Conic+Sections" },
                { title: "Permutation & Combination", channel: "Apni Kaksha", duration: "2:45:00", difficulty: "Medium", url: "https://www.youtube.com/results?search_query=Apni+Kaksha+P&C" }
            ]
        }
    },

    /* You can add NEET, CAT, UPSC etc same format later */
};


/* ------------------ 2. LOAD RESOURCES FUNCTION ------------------ */

function loadDynamicResources() {
    const userExam = localStorage.getItem('userExam');
    const resourcesTab = document.getElementById('resources');
    const examData = resourcesByExam[userExam];

    if (!examData) {
        resourcesTab.innerHTML = `<h2>Please select your exam in Settings.</h2>`;
        return;
    }

    let html = `<h1>${examData.title} - Recommended Learning Videos</h1>`;

    for (const subject in examData.subjects) {
        html += `<h2 class="subject-header">${subject}</h2>`;
        html += `<div class="video-card-container">`;

        examData.subjects[subject].forEach(video => {
            const difficultyClass = `difficulty-${video.difficulty.toLowerCase()}`;
            html += `
                <div class="video-card">
                    <h3>${video.title}</h3>
                    <p>By: ${video.channel}</p>
                    <div class="video-meta">
                        <span>${video.duration}</span>
                        <span class="${difficultyClass}">${video.difficulty}</span>
                    </div>
                    <a href="${video.url}" class="video-link" target="_blank">Watch Now</a>
                </div>
            `;
        });

        html += `</div>`;
    }

    resourcesTab.innerHTML = html;
}


/* ------------------ 3. PAGE LOAD LOGIC ------------------ */

document.addEventListener("DOMContentLoaded", () => {

    // Modal Check
    const modal = document.getElementById("profile-setup-modal");
    const form = document.getElementById("profile-setup-form");

    if (!localStorage.getItem("profileSetupComplete")) {
        modal.style.display = "flex";
    }

    form.addEventListener("submit", (e) => {
        e.preventDefault();
        localStorage.setItem("userGrade", document.getElementById("grade").value);
        localStorage.setItem("userExam", document.getElementById("target-exam").value);
        localStorage.setItem("profileSetupComplete", "true");
        modal.style.display = "none";
        loadDynamicResources();
    });

    // Tabs
    const navLinks = document.querySelectorAll('.dashboard-nav a');
    const tabPanes = document.querySelectorAll('.tab-pane');
    
    navLinks.forEach(link => {
        link.addEventListener("click", e => {
            e.preventDefault();
            const target = link.dataset.tab;

            navLinks.forEach(a => a.classList.remove("active"));
            link.classList.add("active");

            tabPanes.forEach(p => p.classList.remove("active"));
            document.getElementById(target).classList.add("active");
        });
    });

    // Load resources on page load
    loadDynamicResources();
});
