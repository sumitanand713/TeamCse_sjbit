/* --- 1. YOUR NEW RESOURCE DATABASE --- */
/* (This stays at the top, in the global scope) */
    /* --- 1. YOUR NEW RESOURCE DATABASE (Converted to Search Queries) --- */
const resourcesByExam = {

    // --- School ---
    "10th_boards": {
        title: "Class 10 Boards",
        subjects: {
            "Science": [
                { title: "Life Processes - One Shot", channel: "Physics Wallah", duration: "3:45:20", difficulty: "Medium", query: "Physics Wallah Life Processes One Shot" },
                { title: "Light Reflection & Refraction - Full Chapter", channel: "Vedantu", duration: "2:10:05", difficulty: "Medium", query: "Vedantu Light Reflection & Refraction Full Chapter" },
                { title: "Acids, Bases & Salts - 20 Min Revision", channel: "Dear Sir", duration: "0:22:15", difficulty: "Easy", query: "Dear Sir Acids Bases & Salts 20 Min Revision" }
            ],
            "Maths": [
                { title: "Real Numbers - Full Chapter", channel: "Dear Sir", duration: "1:15:30", difficulty: "Easy", query: "Dear Sir Real Numbers Full Chapter" },
                { title: "Trigonometry - All Concepts", channel: "Magnet Brains", duration: "2:50:00", difficulty: "Medium", query: "Magnet Brains Trigonometry All Concepts" },
                { title: "Circles - All Theorems", channel: "Vedantu", duration: "1:05:10", difficulty: "Hard", query: "Vedantu Circles All Theorems" }
            ],
            "Social Science": [
                { title: "Nationalism in India - One Shot", channel: "Digraj Singh Rajput", duration: "1:30:00", difficulty: "Medium", query: "Digraj Singh Rajput Nationalism in India One Shot" },
                { title: "Power Sharing - Full Chapter", channel: "Magnet Brains", duration: "0:45:10", difficulty: "Easy", query: "Magnet Brains Power Sharing Full Chapter" },
                { title: "Sectors of Indian Economy - One Shot", channel: "Padhle", duration: "1:12:00", difficulty: "Medium", query: "Padhle Sectors of Indian Economy One Shot" }
            ]
        }
    },
    "12th_boards": {
        title: "Class 12 Boards",
        subjects: {
            "Physics": [
                { title: "Electric Charges & Fields - One Shot", channel: "Physics Wallah", duration: "4:30:10", difficulty: "Medium", query: "Physics Wallah Electric Charges & Fields One Shot" },
                { title: "Ray Optics - Full Chapter", channel: "Vedantu", duration: "3:15:00", difficulty: "Medium", query: "Vedantu Ray Optics Full Chapter" },
                { title: "Semiconductors - 1 Hour Revision", channel: "Apni Kaksha", duration: "1:05:00", difficulty: "Hard", query: "Apni Kaksha Semiconductors 1 Hour Revision" }
            ],
            "Chemistry": [
                { title: "Solutions - One Shot", channel: "Unacademy", duration: "2:40:00", difficulty: "Medium", query: "Unacademy Solutions One Shot" },
                { title: "Electrochemistry - Full Chapter", channel: "Physics Wallah", duration: "3:10:20", difficulty: "Medium", query: "Physics Wallah Electrochemistry Full Chapter" },
                { title: "Haloalkanes & Haloarenes - One Shot", channel: "Vedantu", duration: "2:55:00", difficulty: "Hard", query: "Vedantu Haloalkanes & Haloarenes One Shot" }
            ],
            "Maths": [
                { title: "Matrices & Determinants - One Shot", channel: "Neha Agrawal", duration: "2:18:00", difficulty: "Easy", query: "Neha Agrawal Matrices & Determinants One Shot" },
                { title: "Integration - Full Chapter", channel: "Apni Kaksha", duration: "5:30:00", difficulty: "Hard", query: "Apni Kaksha Integration Full Chapter" },
                { title: "3D Geometry - Complete Chapter", channel: "Vedantu", duration: "2:45:00", difficulty: "Medium", query: "Vedantu 3D Geometry Complete Chapter" }
            ]
        }
    },

    // --- Undergraduate ---
    "jee": {
        title: "IIT-JEE",
        subjects: {
            "Physics": [
                { title: "Rotation - JEE Advanced", channel: "Physics Galaxy", duration: "5:10:45", difficulty: "Hard", query: "Physics Galaxy Rotation JEE Advanced" },
                { title: "Modern Physics - JEE Mains One Shot", channel: "Unacademy JEE", duration: "3:20:00", difficulty: "Medium", query: "Unacademy JEE Modern Physics One Shot" },
                { title: "Units & Dimensions - Full Chapter", channel: "Physics Wallah", duration: "1:30:00", difficulty: "Easy", query: "Physics Wallah JEE Units & Dimensions Full Chapter" }
            ],
            "Chemistry": [
                { title: "Chemical Bonding - One Shot", channel: "Physics Wallah", duration: "4:05:10", difficulty: "Medium", query: "Physics Wallah JEE Chemical Bonding One Shot" },
                { title: "GOC - General Organic Chemistry", channel: "Unacademy JEE", duration: "6:15:00", difficulty: "Hard", query: "Unacademy JEE GOC General Organic Chemistry" },
                { title: "Mole Concept - Basic to Advanced", channel: "Apni Kaksha", duration: "3:00:00", difficulty: "Easy", query: "Apni Kaksha JEE Mole Concept" }
            ],
            "Maths": [
                { title: "Calculus - Full Marathon", channel: "Vedantu JEE", duration: "8:30:00", difficulty: "Hard", query: "Vedantu JEE Calculus Marathon" },
                { title: "Conic Sections - One Shot", channel: "Unacademy JEE", duration: "4:12:00", difficulty: "Medium", query: "Unacademy JEE Conic Sections One Shot" },
                { title: "Permutations & Combinations", channel: "Apni Kaksha", duration: "2:45:00", difficulty: "Medium", query: "Apni Kaksha JEE Permutations & Combinations" }
            ]
        }
    },
    "neet": {
        title: "NEET (Medical)",
        subjects: {
            "Biology": [
                { title: "Human Physiology - One Shot", channel: "Unacademy NEET", duration: "10:15:30", difficulty: "Hard", query: "Unacademy NEET Human Physiology One Shot" },
                { title: "Genetics & Evolution - Full Unit", channel: "Physics Wallah", duration: "7:45:00", difficulty: "Medium", query: "Physics Wallah NEET Genetics & Evolution" },
                { title: "Plant Kingdom - 30 Min Revision", channel: "Vedantu", duration: "0:30:00", difficulty: "Easy", query: "Vedantu NEET Plant Kingdom 30 Min Revision" }
            ],
            "Physics": [
                { title: "NEET Physics - Full Syllabus Marathon", channel: "Physics Wallah", duration: "12:00:00", difficulty: "Medium", query: "Physics Wallah NEET Physics Full Syllabus Marathon" },
                { title: "Current Electricity - NEET", channel: "Unacademy NEET", duration: "3:10:00", difficulty: "Medium", query: "Unacademy NEET Current Electricity" },
                { title: "Laws of Motion - Concepts", channel: "Physics Galaxy", duration: "2:20:00", difficulty: "Easy", query: "Physics Galaxy NEET Laws of Motion" }
            ],
            "Chemistry": [
                { title: "Organic Chemistry - Name Reactions", channel: "Physics Wallah", duration: "4:00:00", difficulty: "Hard", query: "Physics Wallah NEET Organic Chemistry Name Reactions" },
                { title: "p-Block Elements - One Shot", channel: "Unacademy NEET", duration: "3:30:00", difficulty: "Medium", query: "Unacademy NEET p-Block Elements One Shot" },
                { title: "Atomic Structure - Full Chapter", channel: "Vedantu NEET", duration: "2:40:00", difficulty: "Easy", query: "Vedantu NEET Atomic Structure Full Chapter" }
            ]
        }
    },
    "clat": {
        title: "CLAT (Law)",
        subjects: {
            "Legal Reasoning": [
                { title: "Introduction to Legal Reasoning", channel: "LegalEdge", duration: "1:05:00", difficulty: "Easy", query: "LegalEdge Introduction to Legal Reasoning" },
                { title: "Law of Torts - Full Basics", channel: "Unacademy Law", duration: "2:15:00", difficulty: "Medium", query: "Unacademy Law Law of Torts" },
                { title: "How to Read Legal Passages", channel: "LegalEdge", duration: "0:45:00", difficulty: "Medium", query: "LegalEdge How to Read Legal Passages" }
            ],
            "Logical Reasoning": [
                { title: "Critical Reasoning - Assumptions", channel: "Unacademy Law", duration: "1:30:00", difficulty: "Medium", query: "Unacademy Law Critical Reasoning Assumptions" },
                { title: "Syllogisms - Tricks", channel: "LegalEdge", duration: "0:50:00", difficulty: "Easy", query: "LegalEdge CLAT Syllogisms Tricks" },
                { title: "Para-Jumbles - Full Strategy", channel: "CLAT Gurukul", duration: "1:10:00", difficulty: "Hard", query: "CLAT Gurukul Para-Jumbles Strategy" }
            ],
            "Quantitative Techniques": [
                { title: "Data Interpretation for CLAT", channel: "LegalEdge", duration: "1:25:00", difficulty: "Medium", query: "LegalEdge Data Interpretation for CLAT" },
                { title: "Percentage & Ratios", channel: "Unacademy Law", duration: "2:00:00", difficulty: "Easy", query: "Unacademy Law CLAT Percentage & Ratios" },
                { title: "Averages & Mixtures", channel: "CLAT Gurukul", duration: "1:15:00", difficulty: "Medium", query: "CLAT Gurukul Averages & Mixtures" }
            ]
        }
    },

    // --- Graduate ---
    "cat": {
        title: "CAT (MBA)",
        subjects: {
            "Quantitative Aptitude": [
                { title: "Arithmetic - One Shot Marathon", channel: "Unacademy CAT", duration: "6:30:00", difficulty: "Medium", query: "Unacademy CAT Arithmetic Marathon" },
                { title: "Algebra - Complete Basics", channel: "Rodha", duration: "3:10:00", difficulty: "Medium", query: "Rodha CAT Algebra Basics" },
                { title: "Geometry & Mensuration", channel: "Elites Grid", duration: "4:05:00", difficulty: "Hard", query: "Elites Grid CAT Geometry & Mensuration" }
            ],
            "LRDI": [
                { title: "Arrangements - Complete Set", channel: "Elites Grid", duration: "2:45:00", difficulty: "Hard", query: "Elites Grid LRDI Arrangements" },
                { title: "Games & Tournaments", channel: "Rodha", duration: "1:50:00", difficulty: "Hard", query: "Rodha LRDI Games & Tournaments" },
                { title: "Venn Diagrams - 3 Sets", channel: "Unacademy CAT", duration: "1:30:00", difficulty: "Easy", query: "Unacademy CAT LRDI Venn Diagrams 3 Sets" }
            ],
            "VARC": [
                { title: "Reading Comprehension Strategy", channel: "VARC 100", duration: "0:55:00", difficulty: "Medium", query: "VARC 100 Reading Comprehension Strategy" },
                { title: "Para Jumbles - 5 Easy Tricks", channel: "Elites Grid", duration: "1:10:00", difficulty: "Easy", query: "Elites Grid VARC Para Jumbles Tricks" },
                { title: "Summary of Passages", channel: "Unacademy CAT", duration: "1:20:00", difficulty: "Medium", query: "Unacademy CAT VARC Summary of Passages" }
            ]
        }
    },
    "gate": {
        title: "GATE (M.Tech)",
        subjects: {
            "Computer Science": [
                { title: "Theory of Computation - Full Course", channel: "Unacademy", duration: "10:30:00", difficulty: "Hard", query: "Unacademy GATE Theory of Computation" },
                { title: "Database Management (DBMS) - One Shot", channel: "Gate Smashers", duration: "5:15:00", difficulty: "Medium", query: "Gate Smashers DBMS One Shot" },
                { title: "Data Structures - Full Course", channel: "Jenny's Lectures", duration: "8:00:00", difficulty: "Medium", query: "Jenny's Lectures Data Structures Full Course" }
            ],
            "General Aptitude": [
                { title: "Quantitative Aptitude - Full Course", channel: "Unacademy", duration: "6:45:00", difficulty: "Easy", query: "Unacademy GATE General Aptitude Quantitative" },
                { title: "Verbal Ability for GATE", channel: "Gate Smashers", duration: "2:10:00", difficulty: "Easy", query: "Gate Smashers GATE Verbal Ability" },
                { title: "Logical Reasoning - Full", channel: "Jenny's Lectures", duration: "3:00:00", difficulty: "Medium", query: "Jenny's Lectures GATE Logical Reasoning" }
            ]
        }
    },
    "gre": {
        title: "GRE (International)",
        subjects: {
            "Quant": [
                { title: "GRE Quant - Full Course", channel: "Magoosh", duration: "4:30:00", difficulty: "Medium", query: "Magoosh GRE Quant Full Course" },
                { title: "Data Interpretation Strategies", channel: "GregMat", duration: "1:15:00", difficulty: "Medium", query: "GregMat GRE Data Interpretation" },
                { title: "Permutations & Combinations", channel: "The Organic Chemistry Tutor", duration: "1:10:00", difficulty: "Hard", query: "The Organic Chemistry Tutor GRE Permutations & Combinations" }
            ],
            "Verbal": [
                { title: "Reading Comprehension - Strategy", channel: "GregMat", duration: "1:00:00", difficulty: "Hard", query: "GregMat GRE Reading Comprehension Strategy" },
                { title: "Text Completion - 5 Tips", channel: "Magoosh", duration: "0:25:00", difficulty: "Medium", query: "Magoosh GRE Text Completion Tips" },
                { title: "AWA Essay Writing Guide", channel: "GregMat", duration: "0:50:00", difficulty: "Medium", query: "GregMat GRE AWA Essay Guide" }
            ]
        }
    },

    // --- Post Graduate / Professional ---
    "upsc": {
        title: "UPSC (Civil Services)",
        subjects: {
            "Polity": [
                { title: "Laxmikanth - Full Marathon", channel: "Study IQ", duration: "11:00:00", difficulty: "Medium", query: "Study IQ Laxmikanth Marathon" },
                { title: "Parliament of India - All Details", channel: "Drishti IAS", duration: "1:45:00", difficulty: "Medium", query: "Drishti IAS Parliament of India" },
                { title: "Fundamental Rights - In-Depth", channel: "Unacademy", duration: "2:10:00", difficulty: "Easy", query: "Unacademy UPSC Fundamental Rights" }
            ],
            "History": [
                { title: "Modern History - Spectrum One Shot", channel: "Study IQ", duration: "9:30:00", difficulty: "Medium", query: "Study IQ Spectrum One Shot" },
                { title: "Ancient History - Full", channel: "Drishti IAS", duration: "6:15:00", difficulty: "Medium", query: "Drishti IAS Ancient History" },
                { title: "Art & Culture - Nitin Singhania", channel: "Unacademy", duration: "4:00:00", difficulty: "Hard", query: "Unacademy UPSC Art & Culture Nitin Singhania" }
            ],
            "Economy": [
                { title: "Indian Economy - Full Syllabus", channel: "Mrunal Patel", duration: "15:00:00", difficulty: "Hard", query: "Mrunal Patel UPSC Indian Economy" },
                { title: "Budget 2025 Analysis", channel: "Drishti IAS", duration: "1:30:00", difficulty: "Easy", query: "Drishti IAS Budget Analysis" },
                { title: "Banking & Monetary Policy", channel: "Study IQ", duration: "2:20:00", difficulty: "Medium", query: "Study IQ Banking & Monetary Policy" }
            ]
        }
    },
    "net": {
        title: "UGC-NET (Professor)",
        subjects: {
            "Paper 1 - Teaching Aptitude": [
                { title: "Teaching Aptitude - Full Course", channel: "Unacademy", duration: "5:30:00", difficulty: "Medium", query: "Unacademy UGC NET Teaching Aptitude Full Course" },
                { title: "Methods of Teaching", channel: "BYJU's", duration: "1:10:00", difficulty: "Easy", query: "BYJU's UGC NET Methods of Teaching" },
                { title: "Evaluation Systems", channel: "GradeUp", duration: "0:45:00", difficulty: "Medium", query: "GradeUp UGC NET Evaluation Systems" }
            ],
            "Paper 1 - Research Aptitude": [
                { title: "Research Aptitude - One Shot", channel: "Unacademy", duration: "3:15:00", difficulty: "Medium", query: "Unacademy UGC NET Research Aptitude One Shot" },
                { title: "Types of Research", channel: "BYJU's", duration: "1:00:00", difficulty: "Easy", query: "BYJU's UGC NET Types of Research" },
                { title: "Hypothesis Testing", channel: "GradeUp", duration: "0:50:00", difficulty: "Hard", query: "GradeUp UGC NET Hypothesis Testing" }
            ],
            "Paper 1 - Communication": [
                { title: "Communication - Full Unit", channel: "Unacademy", duration: "2:40:00", difficulty: "Medium", query: "Unacademy UGC NET Communication Full Unit" },
                { title: "Barriers to Communication", channel: "BYJU's", duration: "0:40:00", difficulty: "Easy", query: "BYJU's UGC NET Barriers to Communication" },
                { title: "Mass Media & Society", channel: "GradeUp", duration: "1:05:00", difficulty: "Medium", query: "GradeUp UGC NET Mass Media & Society" }
            ]
        }
    }
};


/* --- 2. DYNAMIC RESOURCE LOADING FUNCTION --- */
/* (This also stays in the global scope) */

function loadDynamicResources() {
    // 1. Find the resources tab
    const resourcesTab = document.getElementById('resources');
    
    // 2. Get the user's SELECTED EXAM
    const userExam = localStorage.getItem('userExam'); // <-- The NEW key
    
    // 3. Find the resources for that exam from our new database
    const examData = resourcesByExam[userExam];

    // 4. Check if we have resources for this user's exam
    if (examData) {
        // We have data! Build the new card-based HTML
        let html = `<h1>Resources for ${examData.title}</h1>`;
        html += '<p>Curated video resources to help you prepare.</p>';

        // Loop over each SUBJECT
        for (const subjectName in examData.subjects) {
            html += `<h2 class="subject-header">${subjectName}</h2>`;
            html += '<div class="video-card-container">'; // Container for the cards

            const videos = examData.subjects[subjectName];

            // Loop over each VIDEO
            videos.forEach(video => {
                let difficultyClass = `difficulty-${video.difficulty.toLowerCase()}`;
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
                        <a href="${video.url}" class="video-link" target="_blank">Watch Now</a>
                    </div>
                `;
            });
            html += '</div>'; // Close video-card-container
        }
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