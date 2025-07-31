const roadmapData = {
    "Python": {
        beginner: [
            "Syntax & Variables", "Data Types", "If/Else, Loops", "Functions", "Lists, Tuples"
        ],
        intermediate: [
            "File Handling", "OOP", "Error Handling", "Modules", "NumPy, Pandas"
        ],
        advanced: [
            "Flask/Django", "ML & AI", "REST APIs", "Automation", "Deep Learning"
        ],
        projects: [
            "Chatbot", "Weather App", "Data Analyzer"
        ],
        certs: [
            "Google Python Course", "Coursera Python Specialization"
        ]
    },
    "C++": {
        beginner: [
            "Syntax & Data Types", "Loops", "Arrays & Strings", "Functions", "Pointers"
        ],
        intermediate: [
            "OOP Concepts", "File I/O", "STL", "Dynamic Memory", "Templates"
        ],
        advanced: [
            "DSA", "Game Dev", "OS Programming", "Multithreading", "Projects"
        ],
        projects: [
            "Bank App", "File Encryptor", "Skill Tracker"
        ],
        certs: [
            "HackerRank C++ Cert", "Microsoft C++ Training"
        ]
    },
    "Web": {
        beginner: [
            "HTML Basics", "CSS Styling", "Simple Layouts", "Forms", "JS Intro"
        ],
        intermediate: [
            "DOM", "Responsive Design", "Git", "Bootstrap", "React Intro"
        ],
        advanced: [
            "MERN Stack", "Auth Systems", "Hosting", "REST APIs", "DevOps Basics"
        ],
        projects: [
            "Portfolio", "Blog Site", "E-Commerce Mini Site"
        ],
        certs: [
            "FreeCodeCamp Web Design", "Udemy Web Dev Bootcamp"
        ]
    },
    "Java": {
        beginner: [
            "Basics & Syntax", "Data Types", "Loops", "Classes & Objects", "Inheritance"
        ],
        intermediate: [
            "Collections", "File I/O", "Threads", "Exception Handling", "JDBC"
        ],
        advanced: [
            "Spring Framework", "REST APIs", "Android with Java", "Microservices", "JVM Tuning"
        ],
        projects: [
            "Library System", "Billing App", "Chat App"
        ],
        certs: [
            "Oracle Java Certification", "EdX Java Course"
        ]
    },
    "SQL": {
        beginner: [
            "Basics & SELECT", "WHERE & AND/OR", "JOINS", "GROUP BY", "Subqueries"
        ],
        intermediate: [
            "Views", "Stored Procedures", "Triggers", "Transactions", "Indexing"
        ],
        advanced: [
            "Query Optimization", "NoSQL Concepts", "Data Warehousing", "Admin Tasks", "Big Data Integration"
        ],
        projects: [
            "Employee DB", "Result Management", "Online Orders DB"
        ],
        certs: [
            "SQL for Data Science (Coursera)", "Oracle SQL Cert"
        ]
    },
    "Android": {
        beginner: [
            "Java/Kotlin Basics", "Android Studio Setup", "UI Design", "Activity Lifecycle", "Intents"
        ],
        intermediate: [
            "RecyclerView", "SQLite", "API Calls", "Fragments", "Navigation"
        ],
        advanced: [
            "Firebase", "MVVM Pattern", "Push Notifications", "Jetpack Compose", "Play Store Deployment"
        ],
        projects: [
            "To-Do App", "Notes App", "College App"
        ],
        certs: [
            "Google Android Basics", "Udacity Android Developer"
        ]
    },
    "Machine Learning": {
        beginner: [
            "Python Basics", "Linear Regression", "Supervised Learning", "Numpy/Pandas", "Matplotlib"
        ],
        intermediate: [
            "Logistic Regression", "Decision Trees", "Clustering", "Feature Scaling", "Model Validation"
        ],
        advanced: [
            "Deep Learning", "CNN/RNN", "TensorFlow/Keras", "NLP", "Deploying Models"
        ],
        projects: [
            "Spam Detector", "Handwriting Recognizer", "Stock Predictor"
        ],
        certs: [
            "ML by Andrew Ng (Coursera)", "TensorFlow Developer Cert"
        ]
    },
    "Cloud": {
        beginner: [
            "Cloud Basics", "AWS Console", "EC2", "S3", "IAM"
        ],
        intermediate: [
            "Lambda", "RDS", "Load Balancers", "Monitoring", "CLI Tools"
        ],
        advanced: [
            "DevOps on AWS", "Kubernetes", "Serverless Arch", "Cost Optimization", "Certification Prep"
        ],
        projects: [
            "Host a Website on AWS", "Serverless Function", "Cloud Portfolio"
        ],
        certs: [
            "AWS Certified Cloud Practitioner", "Azure Fundamentals"
        ]
    }
};

const output = document.getElementById('output');
const form = document.getElementById('languageForm');
const select = document.getElementById('languageSelect');

form.addEventListener('submit', function(e) {
    e.preventDefault();
    const lang = select.value;
    if (!lang || !(lang in roadmapData)) {
        output.innerHTML = <span style="color:#c00;">❌ Please select a valid language/technology.</span>;
        return;
    }
    const data = roadmapData[lang];
    output.innerHTML = `
        <div class="roadmap-section">
            <h2>✅ ${lang}</h2>
            <h3>📘 Beginner Topics</h3>
            <ul>${data.beginner.map(t=><li>${t}</li>).join('')}</ul>
            <h3>📗 Intermediate Topics</h3>
            <ul>${data.intermediate.map(t=><li>${t}</li>).join('')}</ul>
            <h3>📕 Advanced Topics</h3>
            <ul>${data.advanced.map(t=><li>${t}</li>).join('')}</ul>
        </div>
        <div class="roadmap-section">
            <h3>💡 Mini Projects</h3>
            <ul>${data.projects.map(p=><li>${p}</li>).join('')}</ul>
        </div>
        <div class="roadmap-section">
            <h3>🎓 Recommended Certifications</h3>
            <ul>${data.certs.map(c=><li>${c}</li>).join('')}</ul>
        </div>
    `;
});