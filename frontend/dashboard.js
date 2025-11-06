/* --- 1. YOUR NEW RESOURCE DATABASE (with Video URLs + PYQs) --- */
const resourcesByExam = {

    // --- School ---
    "10th_boards": {
        title: "Class 10 Boards",
        subjects: {
            "Science": [
                { title: "Life Processes - One Shot", channel: "Physics Wallah", duration: "3:45:20", difficulty: "Medium", url: "#" },
                { title: "Light Reflection & Refraction - Full Chapter", channel: "Vedantu", duration: "2:10:05", difficulty: "Medium", url: "#" },
                { title: "Acids, Bases & Salts - 20 Min Revision", channel: "Dear Sir", duration: "0:22:15", difficulty: "Easy", url: "#" }
            ],
            "Maths": [
                { title: "Real Numbers - Full Chapter", channel: "Dear Sir", duration: "1:15:30", difficulty: "Easy", url: "#" },
                { title: "Trigonometry - All Concepts", channel: "Magnet Brains", duration: "2:50:00", difficulty: "Medium", url: "#" },
                { title: "Circles - All Theorems", channel: "Vedantu", duration: "1:05:10", difficulty: "Hard", url: "#" }
            ],
            "Social Science": [
                { title: "Nationalism in India - One Shot", channel: "Digraj Singh Rajput", duration: "1:30:00", difficulty: "Medium", url: "#" },
                { title: "Power Sharing - Full Chapter", channel: "Magnet Brains", duration: "0:45:10", difficulty: "Easy", url: "#" },
                { title: "Sectors of Indian Economy - One Shot", channel: "Padhle", duration: "1:12:00", difficulty: "Medium", url: "#" }
            ]
        },
        pyqs: [
            { year: 2025, papers: [ { subject: "Science", url: "https://www.oswaal360.com/pluginfile.php/10939/mod_folder/content/0/Latest%20Board%20Paper%202025/ICSE%2010/Physics%202025.pdf" }, { subject: "Maths", url: "https://www.oswaal360.com/pluginfile.php/10939/mod_folder/content/0/Latest%20Board%20Paper%202025/ICSE%2010/ICSE-10%20Board%20Paper%20Mathematics.pdf" }, { subject: "Computer Application", url: "https://www.oswaal360.com/pluginfile.php/10939/mod_folder/content/0/Latest%20Board%20Paper%202025/ICSE%2010/Computer%20App%202025.pdf" } ] },
            { year: 2024, papers: [ { subject: "Science", url: "https://www.oswaal360.com/pluginfile.php/10939/mod_folder/content/0/Latest%20Board%20Paper%202024/ICSE%20Class%2010/ICSE%20-%20X%20Physics%20Board%20Paper%202024.pdf" }, { subject: "Maths", url: "https://www.oswaal360.com/pluginfile.php/10939/mod_folder/content/0/Latest%20Board%20Paper%202024/ICSE%20Class%2010/ICSE%20Math-10%20Solved%20Paper-2024.pdf" }, { subject: "Computer Application", url: "https://www.oswaal360.com/pluginfile.php/10939/mod_folder/content/0/Latest%20Board%20Papers%20Files/CISCE%20Class%2010/ICSE%20X%20Computer%20Paper-2023.pdf" } ] },
            { year: 2023, papers: [ { subject: "Science", url: "https://www.oswaal360.com/pluginfile.php/10939/mod_folder/content/0/pyp/cisce/class10/physics/Solved%20Paper%202023.pdf" }, { subject: "Maths", url: "https://www.oswaal360.com/pluginfile.php/10939/mod_folder/content/0/pyp/cisce/class10/mathematics/Solved%20Paper%202023.pdf" }, { subject: "English", url: "https://www.oswaal360.com/pluginfile.php/10939/mod_folder/content/0/pyp/cisce/class10/english1/Solved%20Paper%202023.pdf" } ] },
        ]
    },
    "12th_boards": {
        title: "Class 12 Boards",
        subjects: {
            "Physics": [
                { title: "Electric Charges & Fields - One Shot", channel: "Physics Wallah", duration: "4:30:10", difficulty: "Medium", url: "#" },
                { title: "Ray Optics - Full Chapter", channel: "Vedantu", duration: "3:15:00", difficulty: "Medium", url: "#" },
                { title: "Semiconductors - 1 Hour Revision", channel: "Apni Kaksha", duration: "1:05:00", difficulty: "Hard", url: "#" }
            ],
            "Chemistry": [
                { title: "Solutions - One Shot", channel: "Unacademy", duration: "2:40:00", difficulty: "Medium", url: "#" },
                { title: "Electrochemistry - Full Chapter", channel: "Physics Wallah", duration: "3:10:20", difficulty: "Medium", url: "#" },
                { title: "Haloalkanes & Haloarenes - One Shot", channel: "Vedantu", duration: "2:55:00", difficulty: "Hard", url: "#" }
            ],
            "Maths": [
                { title: "Matrices & Determinants - One Shot", channel: "Neha Agrawal", duration: "2:18:00", difficulty: "Easy", url: "#" },
                { title: "Integration - Full Chapter", channel: "Apni Kaksha", duration: "5:30:00", difficulty: "Hard", url: "#" },
                { title: "3D Geometry - Complete Chapter", channel: "Vedantu", duration: "2:45:00", difficulty: "Medium", url: "#" }
            ]
        },
        pyqs: [
            { year: 2025, papers: [ { subject: "English", url: "https://www.oswaal360.com/pluginfile.php/10939/mod_folder/content/0/Latest%20Board%20Paper%202025/ISC%2012/English%20Paper%201.pdf" }, { subject: "Chemistry", url: "https://www.oswaal360.com/pluginfile.php/10939/mod_folder/content/0/Latest%20Board%20Paper%202025/ISC%2012/Che%202025.pdf" }, { subject: "Maths", url: "https://www.oswaal360.com/pluginfile.php/10939/mod_folder/content/0/Latest%20Board%20Paper%202025/ISC%2012/Math%202025.pdf" } ] },
            { year: 2024, papers: [ { subject: "English", url: "https://www.oswaal360.com/pluginfile.php/10939/mod_folder/content/0/Latest%20Board%20Paper%202024/ISC%20Class%2012/ISC%20XII%20English%20Paper-1%20Paper.pdf" }, { subject: "Chemistry", url: "https://www.oswaal360.com/pluginfile.php/10939/mod_folder/content/0/Latest%20Board%20Paper%202024/ISC%20Class%2012/ISC%20Chemistry%2012th%20Solved%20Paper-2024.pdf" }, { subject: "Maths", url: "https://www.oswaal360.com/pluginfile.php/10939/mod_folder/content/0/Latest%20Board%20Paper%202025/ISC%2012/Math%202025.pdf" } ] },
            { year: 2023, papers: [ { subject: "English", url: "https://www.oswaal360.com/pluginfile.php/10939/mod_folder/content/0/pyp/cisce/class12/English-I/English-1%20PY%202023.pdf" }, { subject: "Chemistry", url: "https://www.oswaal360.com/pluginfile.php/10939/mod_folder/content/0/pyp/cisce/class12/Chemistry/Chemistry%20FY%202023.pdf" }, { subject: "Maths", url: "https://www.oswaal360.com/pluginfile.php/10939/mod_folder/content/0/pyp/cisce/class12/Mathematics/Maths%20PY%202023.pdf" } ] },
        ]
    },

    // --- Undergraduate ---
    "jee": {
        title: "IIT-JEE",
        subjects: {
            "Physics": [
                { title: "Rotation - JEE Advanced", channel: "Physics Galaxy", duration: "5:10:45", difficulty: "Hard", url: "#" },
                { title: "Modern Physics - JEE Mains One Shot", channel: "Unacademy JEE", duration: "3:20:00", difficulty: "Medium", url: "#" },
                { title: "Units & Dimensions - Full Chapter", channel: "Physics Wallah", duration: "1:30:00", difficulty: "Easy", url: "#" }
            ],
            "Chemistry": [
                { title: "Chemical Bonding - One Shot", channel: "Physics Wallah", duration: "4:05:10", difficulty: "Medium", url: "#" },
                { title: "GOC - General Organic Chemistry", channel: "Unacademy JEE", duration: "6:15:00", difficulty: "Hard", url: "#" },
                { title: "Mole Concept - Basic to Advanced", channel: "Apni Kaksha", duration: "3:00:00", difficulty: "Easy", url: "#" }
            ],
            "Maths": [
                { title: "Calculus - Full Marathon", channel: "Vedantu JEE", duration: "8:30:00", difficulty: "Hard", url: "#" },
                { title: "Conic Sections - One Shot", channel: "Unacademy JEE", duration: "4:12:00", difficulty: "Medium", url: "#" },
                { title: "Permutations & Combinations", channel: "Apni Kaksha", duration: "2:45:00", difficulty: "Medium", url: "#" }
            ]
        },
        pyqs: [
            { year: 2025, papers: [  { subject: "JEE Mains (Jan)", url: "#" }, { subject: "JEE Mains (Apr)", url: "#" } ] },
            { year: 2024, papers: [  { subject: "JEE Mains (Jan)", url: "#" }, { subject: "JEE Mains (Apr)", url: "#" } ] },
            { year: 2023, papers: [  { subject: "JEE Mains (Jan)", url: "#" }, { subject: "JEE Mains (Apr)", url: "#" } ] },
            { year: 2022, papers: [  { subject: "JEE Mains (Jan)", url: "#" }, { subject: "JEE Mains (Apr)", url: "#" } ] }
        ]
    },
    "neet": {
        title: "NEET (Medical)",
        subjects: {
            "Biology": [
                { title: "Human Physiology - One Shot", channel: "Unacademy NEET", duration: "10:15:30", difficulty: "Hard", url: "#" },
                { title: "Genetics & Evolution - Full Unit", channel: "Physics Wallah", duration: "7:45:00", difficulty: "Medium", url: "#" },
                { title: "Plant Kingdom - 30 Min Revision", channel: "Vedantu", duration: "0:30:00", difficulty: "Easy", url: "#" }
            ],
            "Physics": [
                { title: "NEET Physics - Full Syllabus Marathon", channel: "Physics Wallah", duration: "12:00:00", difficulty: "Medium", url: "#" },
                { title: "Current Electricity - NEET", channel: "Unacademy NEET", duration: "3:10:00", difficulty: "Medium", url: "#" },
                { title: "Laws of Motion - Concepts", channel: "Physics Galaxy", duration: "2:20:00", difficulty: "Easy", url: "#" }
            ],
            "Chemistry": [
                { title: "Organic Chemistry - Name Reactions", channel: "Physics Wallah", duration: "4:00:00", difficulty: "Hard", url: "#" },
                { title: "p-Block Elements - One Shot", channel: "Unacademy NEET", duration: "3:30:00", difficulty: "Medium", url: "#" },
                { title: "Atomic Structure - Full Chapter", channel: "Vedantu NEET", duration: "2:40:00", difficulty: "Easy", url: "#" }
            ]
        },
        pyqs: [
            { year: 2025, papers: [ { subject: "NEET Paper", url: "#" } ] },
            { year: 2024, papers: [ { subject: "NEET Paper", url: "#" } ] },
            { year: 2023, papers: [ { subject: "NEET Paper", url: "#" } ] },
            { year: 2022, papers: [ { subject: "NEET Paper", url: "#" } ] }
        ]
    },
    "clat": {
        title: "CLAT (Law)",
        subjects: {
            "Legal Reasoning": [
                { title: "Introduction to Legal Reasoning", channel: "LegalEdge", duration: "1:05:00", difficulty: "Easy", url: "#" },
                { title: "Law of Torts - Full Basics", channel: "Unacademy Law", duration: "2:15:00", difficulty: "Medium", url: "#" },
                { title: "How to Read Legal Passages", channel: "LegalEdge", duration: "0:45:00", difficulty: "Medium", url: "#" }
            ],
            "Logical Reasoning": [
                { title: "Critical Reasoning - Assumptions", channel: "Unacademy Law", duration: "1:30:00", difficulty: "Medium", url: "#" },
                { title: "Syllogisms - Tricks", channel: "LegalEdge", duration: "0:50:00", difficulty: "Easy", url: "#" },
                { title: "Para-Jumbles - Full Strategy", channel: "CLAT Gurukul", duration: "1:10:00", difficulty: "Hard", url: "#" }
            ],
            "Quantitative Techniques": [
                { title: "Data Interpretation for CLAT", channel: "LegalEdge", duration: "1:25:00", difficulty: "Medium", url: "#" },
                { title: "Percentage & Ratios", channel: "Unacademy Law", duration: "2:00:00", difficulty: "Easy", url: "#" },
                { title: "Averages & Mixtures", channel: "CLAT Gurukul", duration: "1:15:00", difficulty: "Medium", url: "#" }
            ]
        },
        pyqs: [
            { year: 2025, papers: [ { subject: "CLAT Paper", url: "#" } ] },
            { year: 2024, papers: [ { subject: "CLAT Paper", url: "#" } ] },
            { year: 2023, papers: [ { subject: "CLAT Paper", url: "#" } ] },
            { year: 2022, papers: [ { subject: "CLAT Paper", url: "#" } ] }
        ]
    },

    // --- Graduate ---
    "cat": {
        title: "CAT (MBA)",
        subjects: {
            "Quantitative Aptitude": [
                { title: "Arithmetic - One Shot Marathon", channel: "Unacademy CAT", duration: "6:30:00", difficulty: "Medium", url: "#" },
                { title: "Algebra - Complete Basics", channel: "Rodha", duration: "3:10:00", difficulty: "Medium", url: "#" },
                { title: "Geometry & Mensuration", channel: "Elites Grid", duration: "4:05:00", difficulty: "Hard", url: "#" }
            ],
            "LRDI": [
                { title: "Arrangements - Complete Set", channel: "Elites Grid", duration: "2:45:00", difficulty: "Hard", url: "#" },
                { title: "Games & Tournaments", channel: "Rodha", duration: "1:50:00", difficulty: "Hard", url: "#" },
                { title: "Venn Diagrams - 3 Sets", channel: "Unacademy CAT", duration: "1:30:00", difficulty: "Easy", url: "#" }
            ],
            "VARC": [
                { title: "Reading Comprehension Strategy", channel: "VARC 100", duration: "0:55:00", difficulty: "Medium", url: "#" },
                { title: "Para Jumbles - 5 Easy Tricks", channel: "Elites Grid", duration: "1:10:00", difficulty: "Easy", url: "#" },
                { title: "Summary of Passages", channel: "Unacademy CAT", duration: "1:20:00", difficulty: "Medium", url: "#" }
            ]
        },
        pyqs: [
            { year: 2024, papers: [ { subject: "CAT Slot 1", url: "#" }, { subject: "CAT Slot 2", url: "#" }, { subject: "CAT Slot 3", url: "#" } ] },
            { year: 2023, papers: [ { subject: "CAT Slot 1", url: "#" }, { subject: "CAT Slot 2", url: "#" }, { subject: "CAT Slot 3", url: "#" } ] },
            { year: 2022, papers: [ { subject: "CAT Slot 1", url: "#" }, { subject: "CAT Slot 2", url: "#" }, { subject: "CAT Slot 3", url: "#" } ] }
        ]
    },
    "gate": {
        title: "GATE (M.Tech)",
        subjects: {
            "Computer Science": [
                { title: "Theory of Computation - Full Course", channel: "Unacademy", duration: "10:30:00", difficulty: "Hard", url: "#" },
                { title: "Database Management (DBMS) - One Shot", channel: "Gate Smashers", duration: "5:15:00", difficulty: "Medium", url: "#" },
                { title: "Data Structures - Full Course", channel: "Jenny's Lectures", duration: "8:00:00", difficulty: "Medium", url: "#" }
            ],
            "General Aptitude": [
                { title: "Quantitative Aptitude - Full Course", channel: "Unacademy", duration: "6:45:00", difficulty: "Easy", url: "#" },
                { title: "Verbal Ability for GATE", channel: "Gate Smashers", duration: "2:10:00", difficulty: "Easy", url: "#" },
                { title: "Logical Reasoning - Full", channel: "Jenny's Lectures", duration: "3:00:00", difficulty: "Medium", url: "#" }
            ]
        },
        pyqs: [
            { year: 2025, papers: [ { subject: "CS Paper", url: "#" }, { subject: "ME Paper", url: "#" }, { subject: "EE Paper", url: "#" } ] },
            { year: 2024, papers: [ { subject: "CS Paper", url: "#" }, { subject: "ME Paper", url: "#" }, { subject: "EE Paper", url: "#" } ] },
            { year: 2023, papers: [ { subject: "CS Paper", url: "#" }, { subject: "ME Paper", url: "#" }, { subject: "EE Paper", url: "#" } ] }
        ]
    },
    "gre": {
        title: "GRE (International)",
        subjects: {
            "Quant": [
                { title: "GRE Quant - Full Course", channel: "Magoosh", duration: "4:30:00", difficulty: "Medium", url: "#" },
                { title: "Data Interpretation Strategies", channel: "GregMat", duration: "1:15:00", difficulty: "Medium", url: "#" },
                { title: "Permutations & Combinations", channel: "The Organic Chemistry Tutor", duration: "1:10:00", difficulty: "Hard", url: "#" }
            ],
            "Verbal": [
                { title: "Reading Comprehension - Strategy", channel: "GregMat", duration: "1:00:00", difficulty: "Hard", url: "#" },
                { title: "Text Completion - 5 Tips", channel: "Magoosh", duration: "0:25:00", difficulty: "Medium", url: "#" },
                { title: "AWA Essay Writing Guide", channel: "GregMat", duration: "0:50:00", difficulty: "Medium", url: "#" }
            ]
        },
        pyqs: [
            { year: 2025, papers: [ { subject: "Practice Test 1", url: "#" }, { subject: "Practice Test 2", url: "#" } ] },
            { year: 2024, papers: [ { subject: "Practice Test 1", url: "#" }, { subject: "Practice Test 2", url: "#" } ] }
        ]
    },

    // --- Post Graduate / Professional ---
    "upsc": {
        title: "UPSC (Civil Services)",
        subjects: {
            "Polity": [
                { title: "Laxmikanth - Full Marathon", channel: "Study IQ", duration: "11:00:00", difficulty: "Medium", url: "#" },
                { title: "Parliament of India - All Details", channel: "Drishti IAS", duration: "1:45:00", difficulty: "Medium", url: "#" },
                { title: "Fundamental Rights - In-Depth", channel: "Unacademy", duration: "2:10:00", difficulty: "Easy", url: "#" }
            ],
            "History": [
                { title: "Modern History - Spectrum One Shot", channel: "Study IQ", duration: "9:30:00", difficulty: "Medium", url: "#" },
                { title: "Ancient History - Full", channel: "Drishti IAS", duration: "6:15:00", difficulty: "Medium", url: "#" },
                { title: "Art & Culture - Nitin Singhania", channel: "Unacademy", duration: "4:00:00", difficulty: "Hard", url: "#" }
            ],
            "Economy": [
                { title: "Indian Economy - Full Syllabus", channel: "Mrunal Patel", duration: "15:00:00", difficulty: "Hard", url: "#" },
                { title: "Budget 2025 Analysis", channel: "Drishti IAS", duration: "1:30:00", difficulty: "Easy", url: "#" },
                { title: "Banking & Monetary Policy", channel: "Study IQ", duration: "2:20:00", difficulty: "Medium", url: "#" }
            ]
        },
        pyqs: [
            { year: 2025, papers: [ { subject: "Prelims GS", url: "#" }, { subject: "Prelims CSAT", url: "#" }, { subject: "Mains GS I", url: "#" } ] },
            { year: 2024, papers: [ { subject: "Prelims GS", url: "#" }, { subject: "Prelims CSAT", url: "#" }, { subject: "Mains GS I", url: "#" } ] },
            { year: 2023, papers: [ { subject: "Prelims GS", url: "#" }, { subject: "Prelims CSAT", url: "#" }, { subject: "Mains GS I", url: "#" } ] },
            { year: 2022, papers: [ { subject: "Prelims GS", url: "#" }, { subject: "Prelims CSAT", url: "#" }, { subject: "Mains GS I", url: "#" } ] }
        ]
    },
    "net": {
        title: "UGC-NET (Professor)",
        subjects: {
            "Paper 1 - Teaching Aptitude": [
                { title: "Teaching Aptitude - Full Course", channel: "Unacademy", duration: "5:30:00", difficulty: "Medium", url: "#" },
                { title: "Methods of Teaching", channel: "BYJU's", duration: "1:10:00", difficulty: "Easy", url: "#" },
                { title: "Evaluation Systems", channel: "GradeUp", duration: "0:45:00", difficulty: "Medium", url: "#" }
            ],
            "Paper 1 - Research Aptitude": [
                { title: "Research Aptitude - One Shot", channel: "Unacademy", duration: "3:15:00", difficulty: "Medium", url: "#" },
                { title: "Types of Research", channel: "BYJU's", duration: "1:00:00", difficulty: "Easy", url: "#" },
                { title: "Hypothesis Testing", channel: "GradeUp", duration: "0:50:00", difficulty: "Hard", url: "#" }
            ],
            "Paper 1 - Communication": [
                { title: "Communication - Full Unit", channel: "Unacademy", duration: "2:40:00", difficulty: "Medium", url: "#" },
                { title: "Barriers to Communication", channel: "BYJU's", duration: "0:40:00", difficulty: "Easy", url: "#" },
                { title: "Mass Media & Society", channel: "GradeUp", duration: "1:05:00", difficulty: "Medium", url: "#" }
            ]
        },
        pyqs: [
            { year: 2025, papers: [ { subject: "Paper 1 (June)", url: "#" }, { subject: "Paper 1 (Dec)", url: "#" } ] },
            { year: 2024, papers: [ { subject: "Paper 1 (June)", url: "#" }, { subject: "Paper 1 (Dec)", url: "#" } ] },
            { year: 2023, papers: [ { subject: "Paper 1 (June)", url: "#" }, { subject: "Paper 1 (Dec)", url: "#" } ] },
            { year: 2022, papers: [ { subject: "Paper 1 (June)", url: "#" }, { subject: "Paper 1 (Dec)", url: "#" } ] }
        ]
    }
};


/* --- 2. DYNAMIC RESOURCE LOADING FUNCTION (Reads Video URLs + PYQs) --- */
/* (This goes *after* the database object, in the global scope) */

function loadDynamicResources() {
    // 1. Find the resources tab
    const resourcesTab = document.getElementById('resources');
    
    // 2. Get the user's SELECTED EXAM
    const userExam = localStorage.getItem('userExam');
    
    // 3. Find the resources for that exam from our new database
    const examData = resourcesByExam[userExam];

    // 4. Check if we have resources for this user's exam
    if (examData) {
        // --- (Start of HTML Building) ---
        let html = `<h1>Resources for ${examData.title}</h1>`;
        html += '<p>Curated materials to help you prepare.</p>';

        // --- (A) Build Video Section ---
        html += `<h2 class="subject-header">Video Lessons</h2>`;
        html += '<div class="video-card-container">';
        
        for (const subjectName in examData.subjects) {
            const videos = examData.subjects[subjectName];
            
            videos.forEach(video => {
                let difficultyClass = `difficulty-${video.difficulty.toLowerCase()}`;
                
                // This is the logic to read the 'url'
                let videoLink = video.url;
                
                html += `
                    <div class="video-card">
                        <h3 class="video-title">${video.title}</h3>
                        <p class="video-channel">By: ${video.channel}</p>
                        <div class="video-meta">
                            <span class="meta-duration">Length: ${video.duration}</span>
                            <span class="meta-difficulty ${difficultyClass}">
                                ${video.difficulty}
                            </span>
                        </div>
                        <a href="${videoLink}" class="video-link" target="_blank">Watch Now</a>
                    </div>
                `;
            });
        }
        html += '</div>'; // Close video-card-container
        
        // --- (B) Build NEW PYQ Section ---
        if (examData.pyqs && examData.pyqs.length > 0) {
            html += `<h2 class="subject-header">Previous Year Questions (PYQs)</h2>`;
            html += '<div class="pyq-container">'; // A container for all year blocks

            // Loop over each year object (e.g., { year: 2025, ... })
            examData.pyqs.forEach(yearData => {
                html += `<div class="pyq-year-block">`;
                html += `<h3>${yearData.year} Papers</h3>`;
                html += `<ul class="pyq-paper-list">`;
                
                // Loop over each paper in that year
                yearData.papers.forEach(paper => {
                    html += `<li><a href="${paper.url}" target="_blank">${paper.subject}</a></li>`;
                });
                
                html += `</ul></div>`; // Close pyq-year-block
            });

            html += `</div>`; // Close pyq-container
        }
        
        // --- (End of HTML Building) ---
        resourcesTab.innerHTML = html;

    } else {
        // We don't have data for this user's exam.
        resourcesTab.innerHTML = `
            <h1>Learning Resources</h1>
            <p>Please select your <strong>target exam</strong> from your profile settings to see personalized video resources.</p>
        `;
    }
}


/* --- 3. MAIN SCRIPT LOGIC (Runs after page loads) --- */

document.addEventListener('DOMContentLoaded', () => {

    // --- 1. PROFILE SETUP MODAL LOGIC ---
    
    const modal = document.getElementById('profile-setup-modal');
    const form = document.getElementById('profile-setup-form');
    const profileIsSet = localStorage.getItem('profileSetupComplete');

    if (!profileIsSet) {
        modal.style.display = 'flex';
    }

    // Add listener for when the setup form is submitted
    form.addEventListener('submit', (e) => {
        e.preventDefault(); 
        
        const grade = document.getElementById('grade').value;
        const exam = document.getElementById('target-exam').value;

        // Save data
        localStorage.setItem('userGrade', grade);
        localStorage.setItem('userExam', exam);
        localStorage.setItem('profileSetupComplete', 'true');

        console.log('Profile Saved:', { grade, exam });

        // Hide the modal
        modal.style.display = 'none';

        // Load resources *immediately* after user saves profile
        loadDynamicResources(); 
    });


    // --- 2. DASHBOARD TAB NAVIGATION LOGIC ---

    const navLinks = document.querySelectorAll('.dashboard-nav a');
    const tabPanes = document.querySelectorAll('.dashboard-tab-content .tab-pane');

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault(); 
            const targetTabId = link.getAttribute('data-tab');
            const targetPane = document.getElementById(targetTabId);

            // 1. Update Nav Links
            navLinks.forEach(navLink => navLink.classList.remove('active'));
            link.classList.add('active');

            // 2. Update Tab Panes
            tabPanes.forEach(pane => pane.classList.remove('active'));
            if (targetPane) {
                targetPane.classList.add('active');
            }
        });
    });

    // Load resources for the user *as soon as the page loads*
    loadDynamicResources();
    
    
    // --- 3. AI STUDY PLAN LOGIC ---
    const generateBtn = document.getElementById('generate-plan-btn');
    const planContent = document.getElementById('plan-content');
    const planLoading = document.getElementById('plan-loading');

    // Check if the button exists before adding listener
    if (generateBtn) {
        generateBtn.addEventListener('click', async () => {
            // Clear old plan and show loading spinner
            planContent.innerHTML = '';
            planLoading.style.display = 'block';
            generateBtn.disabled = true;

            try {
                const grade = localStorage.getItem('userGrade');
                const exam = localStorage.getItem('userExam');
                const weakTopics = ['Calculus', 'Thermodynamics']; // (Placeholder)

                // Call your back-end server
                const response = await fetch('http://localhost:3000/api/generate-plan', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        grade: grade,
                        exam: exam,
                        topics: weakTopics
                    }),
                });

                if (!response.ok) { throw new Error('Network response was not ok'); }

                const data = await response.json();
                planContent.innerHTML = data.planHtml; // Put AI HTML onto page

            } catch (error) {
                console.error('Error generating plan:', error);
                planContent.innerHTML = '<p style="color: red;">Sorry, an error occurred. Please try again.</p>';
            } finally {
                planLoading.style.display = 'none';
                generateBtn.disabled = false;
            }
        });
    }

    
    // --- 4. AI QUIZ GENERATION LOGIC ---

    const quizForm = document.getElementById('quiz-setup-form');
    const quizContent = document.getElementById('quiz-content');
    const quizLoading = document.getElementById('quiz-loading');
    const quizResults = document.getElementById('quiz-results');
    const quizTopicInput = document.getElementById('quiz-topic');
    
    let currentQuizData = []; // Holds the correct answers

    // Check if the form exists
    if (quizForm) {
        quizForm.addEventListener('submit', async (e) => {
            e.preventDefault(); 
            
            const topic = quizTopicInput.value;
            if (!topic) return; 

            const exam = localStorage.getItem('userExam') || 'general';

            // Reset the UI
            quizContent.innerHTML = '';
            quizResults.innerHTML = '';
            quizLoading.style.display = 'block';
            quizForm.querySelector('button').disabled = true;

            try {
                // 1. Call your back-end to get the quiz
                const response = await fetch('http://localhost:3000/api/generate-quiz', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ topic, exam })
                });

                if (!response.ok) { throw new Error('Server returned an error'); }

                const quizData = await response.json();
                currentQuizData = quizData; // Save answers
                
                // 2. Build the quiz HTML
                buildQuiz(quizData);

            } catch (error) {
                console.error('Error generating quiz:', error);
                quizContent.innerHTML = '<p style="color: red;">Sorry, an error occurred. Please try again.</p>';
            } finally {
                quizLoading.style.display = 'none';
                quizForm.querySelector('button').disabled = false;
            }
        });
    }

    // This function builds the HTML for the quiz
    function buildQuiz(quizData) {
        quizData.forEach((questionData, index) => {
            const questionElement = document.createElement('div');
            questionElement.classList.add('question-block');

            const questionTitle = document.createElement('h3');
            questionTitle.textContent = `${index + 1}. ${questionData.question}`;
            questionElement.appendChild(questionTitle);

            const optionsContainer = document.createElement('div');
            optionsContainer.classList.add('options-container');

            questionData.options.forEach(option => {
                const label = document.createElement('label');
                label.classList.add('option-label');

                const radio = document.createElement('input');
                radio.type = 'radio';
                radio.name = `question-${index}`;
                radio.value = option;

                label.appendChild(radio);
                label.appendChild(document.createTextNode(option));
                optionsContainer.appendChild(label);
            });

            questionElement.appendChild(optionsContainer);
            quizContent.appendChild(questionElement);
        });

        // Add the "Submit Quiz" button at the end
        const submitButton = document.createElement('button');
        submitButton.id = 'submit-quiz-btn';
        submitButton.textContent = 'Submit Quiz';
        submitButton.classList.add('login-button');
        submitButton.style.marginTop = '1.5rem';
        quizContent.appendChild(submitButton);

        // Add listener to the new submit button
        submitButton.addEventListener('click', checkAnswers);
    }

    // This function checks the answers
    function checkAnswers() {
        let score = 0;
        const totalQuestions = currentQuizData.length;

        currentQuizData.forEach((questionData, index) => {
            const selectedOption = document.querySelector(`input[name="question-${index}"]:checked`);
            if (selectedOption && selectedOption.value === questionData.answer) {
                score++;
            }
        });

        // Display the results
        quizResults.innerHTML = `
            <h3>Quiz Complete!</h3>
            <p>You scored <strong>${score} out of ${totalQuestions}</strong>.</p>
        `;

        // Hide the quiz
        quizContent.innerHTML = '';
    }

});