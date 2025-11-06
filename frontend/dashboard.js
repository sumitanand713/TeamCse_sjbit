/* ---- SUBJECT → CHAPTER DATABASE ---- */
const examChapters = {
    jee: {
        "Physics": [
            "Units and Dimensions",
            "Kinematics",
            "Laws of Motion",
            "Work Power Energy",
            "Modern Physics",
            "Rotation"
        ],
        "Chemistry": [
            "Chemical Bonding",
            "Mole Concept",
            "GOC",
            "Thermodynamics",
            "Coordination Compounds"
        ],
        "Maths": [
            "Quadratic Equations",
            "Sequences and Series",
            "Binomial Theorem",
            "Conic Sections",
            "Differentiation",
            "Integration"
        ]
    },

    neet: {
        "Biology": [
            "Human Physiology",
            "Plant Physiology",
            "Genetics",
            "Evolution",
            "Animal Kingdom"
        ],
        "Physics": [
            "Current Electricity",
            "Laws of Motion",
            "Waves",
            "Optics"
        ],
        "Chemistry": [
            "Organic Basics",
            "Periodic Table",
            "Chemical Bonding",
            "Solutions"
        ]
    }
};


/* ---- DYNAMIC RESOURCE LOADER ---- */
function loadDynamicResources() {
    const exam = localStorage.getItem("userExam");
    const resourcesTab = document.getElementById("resources");

    if (!exam || !examChapters[exam]) {
        resourcesTab.innerHTML = `
            <h2>Learning Resources</h2>
            <p>Please complete your profile setup to get personalized resources.</p>
        `;
        return;
    }

    const subjects = examChapters[exam];

    let html = `<h1>${exam.toUpperCase()} Learning Resources</h1>`;
    html += `<p>Select a topic to watch best lectures.</p>`;

    html += `
    <label>Select Subject:</label>
    <select id="subjectSelect">
        <option disabled selected>Select Subject</option>
        ${Object.keys(subjects).map(s => `<option>${s}</option>`).join("")}
    </select>

    <label>Select Chapter:</label>
    <select id="chapterSelect"><option>Select a subject first</option></select>

    <button id="searchVideosBtn" class="login-button">Search Videos</button>
    <div id="videoResults" style="margin-top:20px"></div>
    `;

    resourcesTab.innerHTML = html;

    const subjectSelect = document.getElementById("subjectSelect");
    const chapterSelect = document.getElementById("chapterSelect");
    const videoResults = document.getElementById("videoResults");

    subjectSelect.addEventListener("change", () => {
        chapterSelect.innerHTML = subjects[subjectSelect.value]
            .map(ch => `<option>${ch}</option>`).join("");
    });

    document.getElementById("searchVideosBtn").addEventListener("click", () => {
        const query = `${chapterSelect.value} ${subjectSelect.value} ${exam} one shot`;
        const url = `https://www.youtube.com/results?search_query=${encodeURIComponent(query)}`;

        videoResults.innerHTML = `
            <h3>Top Results for <b>${chapterSelect.value}</b></h3>
            <a href="${url}" target="_blank" class="login-button">Open YouTube Results 🔥</a>
        `;

        // ✅ COUNT VIDEO AS WATCHED
        let vw = parseInt(localStorage.getItem("videosWatched") || "0");
        localStorage.setItem("videosWatched", vw + 1);
        loadDashboardStats();
    });
}


/* ---- DASHBOARD STATS LOADER ---- */
function loadDashboardStats() {

    const exam = localStorage.getItem("userExam");
    let videosWatched = parseInt(localStorage.getItem("videosWatched") || "0");
    let videosTotal = 0;

    if (exam && examChapters[exam]) {
        Object.values(examChapters[exam]).forEach(subject => {
            videosTotal += subject.length;
        });
    }

    localStorage.setItem("videosTotal", videosTotal);

    const videoProgress = videosTotal ? (videosWatched / videosTotal) : 0;

    let quizzesTaken = parseInt(localStorage.getItem("quizzesTaken") || "0");
    let quizzesTotal = videosTotal;

    localStorage.setItem("quizzesTotal", quizzesTotal);

    const quizProgress = quizzesTotal ? (quizzesTaken / quizzesTotal) : 0;

    const overallProgress = Math.round(((videoProgress + quizProgress) / 2) * 100);
    localStorage.setItem("userProgress", overallProgress);

    // ✅ Update UI
    document.getElementById("progressValue").textContent = overallProgress + "%";
    document.documentElement.style.setProperty("--progressValue", overallProgress);

    document.getElementById("quizBar").style.setProperty("--progress", quizProgress * 100);
    document.getElementById("quizStats").textContent = `${quizzesTaken} / ${quizzesTotal} Quizzes`;

    const studyWeek = Math.max(1, Math.ceil(overallProgress / 10));
    document.getElementById("studyWeekDisplay").textContent = `Week ${studyWeek}`;
}


/* ---- PAGE LOAD ---- */
document.addEventListener("DOMContentLoaded", () => {

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
        loadDashboardStats();
    });

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

    loadDynamicResources();
    loadDashboardStats();
});

/* ---- QUIZ GENERATION & SUBMISSION ---- */

document.getElementById("quiz-setup-form").addEventListener("submit", (e) => {
    e.preventDefault();

    const topic = document.getElementById("quiz-topic").value.trim();
    if (!topic) return;

    document.getElementById("quiz-loading").style.display = "block";

    // Generate quiz questions using YouTube/You search query
    const query = `${topic} MCQ quiz`;
    const url = `https://www.youtube.com/results?search_query=${encodeURIComponent(query)}`;

    document.getElementById("quiz-loading").style.display = "none";
    document.getElementById("quiz-content").innerHTML = `
        <h3>Practice Quiz for <b>${topic}</b></h3>
        <p>Choose a quiz video to solve:</p>
        <a href="${url}" target="_blank" class="login-button">Open Quiz Videos 🎯</a>
        <br><br>
        <button id="markQuizDone" class="login-button" style="background:#28a745;">Mark as Completed ✅</button>
    `;

    // ✅ When user finishes quiz, they click "Mark as Completed"
    document.getElementById("markQuizDone").addEventListener("click", () => {
        let qt = parseInt(localStorage.getItem("quizzesTaken") || "0");
        localStorage.setItem("quizzesTaken", qt + 1);
        loadDashboardStats(); // Refresh stats

        document.getElementById("quiz-results").innerHTML = `
            ✅ Quiz marked as completed!  
            <br>Progress updated.
        `;
    });
});

