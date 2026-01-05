// Skills Data
const skillsData = [
    {
        id: "web-development",
        title: "Full Stack Web Development",
        category: "Technology",
        icon: "💻",
        description: "Build modern web applications from front to back.",
        longDescription: "Master the art of building complete web applications. You'll learn how to create responsive user interfaces, manage databases, and build scalable server-side logic using modern frameworks.",
        difficulty: "Intermediate",
        timeEstimate: "6 months",
        roadmap: [
            { title: "HTML & CSS Fundamentals", description: "Learn the building blocks of the web. Structure content with HTML and style it with CSS.", resources: [{ name: "MDN Web Docs", url: "https://developer.mozilla.org/", type: "Documentation" }, { name: "CSS Tricks", url: "https://css-tricks.com/", type: "Blog" }, { name: "FreeCodeCamp Course", url: "https://www.freecodecamp.org/", type: "Video" }] },
            { title: "JavaScript Essentials", description: "Add interactivity to your sites. Understand DOM manipulation, events, and ES6+ syntax.", resources: [{ name: "JavaScript.info", url: "https://javascript.info/", type: "Tutorial" }, { name: "Eloquent JavaScript", url: "https://eloquentjavascript.net/", type: "Book" }, { name: "CodeAcademy", url: "https://www.codecademy.com/", type: "Interactive" }] },
            { title: "Frontend Framework (React)", description: "Build complex UIs with components, state management, and hooks.", resources: [{ name: "React Official Docs", url: "https://react.dev/", type: "Official" }, { name: "React Tutorial", url: "https://www.udemy.com/", type: "Course" }, { name: "Scrimba", url: "https://scrimba.com/", type: "Interactive" }] },
            { title: "Backend Basics (Node.js)", description: "Run JavaScript on the server. Build REST APIs and handle requests.", resources: [{ name: "Node.js Docs", url: "https://nodejs.org/en/docs/", type: "Documentation" }, { name: "Express.js", url: "https://expressjs.com/", type: "Framework" }, { name: "Net Ninja", url: "https://www.youtube.com/", type: "YouTube" }] },
            { title: "Databases (SQL & NoSQL)", description: "Store and retrieve application data using PostgreSQL or MongoDB.", resources: [{ name: "SQL Tutorial", url: "https://www.w3schools.com/sql/", type: "Tutorial" }, { name: "MongoDB University", url: "https://university.mongodb.com/", type: "Course" }, { name: "Database Design", url: "https://www.udemy.com/", type: "Course" }] },
            { title: "Deployment & DevOps", description: "Host your application on the cloud using services like Vercel or AWS.", resources: [{ name: "Vercel Docs", url: "https://vercel.com/docs", type: "Documentation" }, { name: "AWS Training", url: "https://aws.amazon.com/training/", type: "Training" }, { name: "Docker Course", url: "https://www.udemy.com/", type: "Course" }] }
        ]
    },
    {
        id: "data-science",
        title: "Data Science",
        category: "Technology",
        icon: "📊",
        description: "Analyze data to extract meaningful insights and predictions.",
        longDescription: "Dive into the world of data. Learn to clean, analyze, and visualize complex datasets, and build machine learning models to predict future trends.",
        difficulty: "Advanced",
        timeEstimate: "8 months",
        roadmap: [
            { title: "Python Programming", description: "Master Python syntax, data structures, and libraries like NumPy and Pandas.", resources: [{ name: "Python.org", url: "https://www.python.org/", type: "Official" }, { name: "DataCamp", url: "https://www.datacamp.com/", type: "Interactive" }, { name: "Real Python", url: "https://realpython.com/", type: "Tutorials" }] },
            { title: "Statistics & Probability", description: "Understand the mathematical foundations behind data analysis.", resources: [{ name: "Khan Academy", url: "https://www.khanacademy.org/", type: "Free Course" }, { name: "StatQuest", url: "https://www.youtube.com/", type: "YouTube" }, { name: "Coursera Stats", url: "https://www.coursera.org/", type: "University" }] },
            { title: "Data Visualization", description: "Create compelling charts and graphs using Matplotlib and Seaborn.", resources: [{ name: "Matplotlib Docs", url: "https://matplotlib.org/", type: "Documentation" }, { name: "Tableau Public", url: "https://public.tableau.com/", type: "Tool" }, { name: "Viz Course", url: "https://www.udemy.com/", type: "Course" }] },
            { title: "Machine Learning Basics", description: "Learn algorithms like regression, classification, and clustering with Scikit-Learn.", resources: [{ name: "Scikit-Learn", url: "https://scikit-learn.org/", type: "Documentation" }, { name: "Andrew Ng ML", url: "https://www.coursera.org/", type: "University" }, { name: "Fast.ai", url: "https://www.fast.ai/", type: "Free Course" }] },
            { title: "Deep Learning", description: "Build neural networks for complex problems using TensorFlow or PyTorch.", resources: [{ name: "TensorFlow", url: "https://www.tensorflow.org/", type: "Official" }, { name: "PyTorch", url: "https://pytorch.org/", type: "Documentation" }, { name: "Deep Learning Spec", url: "https://www.coursera.org/", type: "Specialization" }] }
        ]
    },
    {
        id: "graphic-design",
        title: "Graphic Design",
        category: "Creative",
        icon: "🎨",
        description: "Communicate visually using typography, imagery, and color.",
        longDescription: "Unleash your creativity. Learn the principles of design, color theory, and typography to create stunning visuals for web and print.",
        difficulty: "Beginner",
        timeEstimate: "4 months",
        roadmap: [
            { title: "Design Principles", description: "Master balance, contrast, hierarchy, and alignment.", resources: [{ name: "Design of Everyday", url: "https://mitpress.mit.edu/", type: "Book" }, { name: "Nielsen Group", url: "https://www.nngroup.com/", type: "Articles" }, { name: "Skillshare", url: "https://www.skillshare.com/", type: "Classes" }] },
            { title: "Typography & Color", description: "Understand how fonts and colors affect perception and communication.", resources: [{ name: "Font Pair", url: "https://www.fontpair.co/", type: "Tool" }, { name: "Color Theory", url: "https://www.udemy.com/", type: "Course" }, { name: "Adobe Color", url: "https://color.adobe.com/", type: "Tool" }] },
            { title: "Vector Graphics", description: "Create scalable logos and illustrations using Adobe Illustrator.", resources: [{ name: "Adobe Tutorials", url: "https://www.adobe.com/", type: "Official" }, { name: "Tutsplus Design", url: "https://tutsplus.com/", type: "Tutorials" }, { name: "LinkedIn Learning", url: "https://www.linkedin.com/learning/", type: "Courses" }] },
            { title: "Photo Editing", description: "Manipulate images and create composites using Photoshop.", resources: [{ name: "Adobe Photoshop", url: "https://www.adobe.com/", type: "Official" }, { name: "PSD Stack", url: "https://psd.envato.com/", type: "Resources" }, { name: "YouTube Tutorials", url: "https://www.youtube.com/", type: "Tutorials" }] },
            { title: "Layout Design", description: "Combine elements into cohesive compositions for print and digital.", resources: [{ name: "Grid Systems", url: "https://www.interaction-design.org/", type: "Article" }, { name: "InDesign Basics", url: "https://www.adobe.com/", type: "Guide" }, { name: "Design Course", url: "https://www.skillshare.com/", type: "Course" }] }
        ]
    },
    {
        id: "digital-marketing",
        title: "Digital Marketing",
        category: "Business",
        icon: "📈",
        description: "Promote brands and products through digital channels.",
        longDescription: "Learn to reach audiences online. Master SEO, social media marketing, content strategy, and analytics to grow businesses.",
        difficulty: "Beginner",
        timeEstimate: "3 months",
        roadmap: [
            { title: "Marketing Fundamentals", description: "Understand the customer journey and value proposition.", resources: [{ name: "HubSpot Academy", url: "https://academy.hubspot.com/", type: "Free Cert" }, { name: "Marketing 101", url: "https://www.coursera.org/", type: "Course" }, { name: "Seth Godin", url: "https://seths.blog/", type: "Blog" }] },
            { title: "Content Marketing", description: "Create valuable content to attract and engage audiences.", resources: [{ name: "Content Marketing", url: "https://contentmarketinginstitute.com/", type: "Resources" }, { name: "Copyblogger", url: "https://www.copyblogger.com/", type: "Blog" }, { name: "Medium", url: "https://medium.com/", type: "Platform" }] },
            { title: "SEO Optimization", description: "Optimize content to rank higher in search results.", resources: [{ name: "Moz SEO", url: "https://moz.com/", type: "Guide" }, { name: "Google Console", url: "https://search.google.com/search-console/", type: "Tool" }, { name: "Yoast", url: "https://yoast.com/", type: "Plugin" }] },
            { title: "Social Media Strategy", description: "Build communities and run campaigns on all major platforms.", resources: [{ name: "Later Blog", url: "https://later.com/blog/", type: "Tips" }, { name: "Buffer Academy", url: "https://academy.buffer.com/", type: "Courses" }, { name: "Hootsuite", url: "https://academy.hootsuite.com/", type: "Cert" }] },
            { title: "Analytics & Reporting", description: "Measure performance using Google Analytics and dashboards.", resources: [{ name: "GA Help", url: "https://support.google.com/analytics/", type: "Guide" }, { name: "Data Studio", url: "https://datastudio.google.com/", type: "Tool" }, { name: "Analytics Course", url: "https://www.udemy.com/", type: "Course" }] }
        ]
    },
    {
        id: "machine-learning",
        title: "Machine Learning Engineering",
        category: "Technology",
        icon: "🤖",
        description: "Build intelligent systems that learn from data and improve over time.",
        longDescription: "Master machine learning algorithms, model training, optimization, and deployment. Learn to solve real-world problems with ML systems.",
        difficulty: "Advanced",
        timeEstimate: "10 months",
        roadmap: [
            { title: "ML Fundamentals", description: "Understand supervised, unsupervised, and reinforcement learning concepts.", resources: [{ name: "Coursera ML", url: "https://www.coursera.org/", type: "University Course" }, { name: "Fast.ai", url: "https://www.fast.ai/", type: "Free Course" }, { name: "ML Mastery", url: "https://machinelearningmastery.com/", type: "Blog" }] },
            { title: "Feature Engineering", description: "Learn to prepare and engineer features for better model performance.", resources: [{ name: "Feature Engineering", url: "https://www.udemy.com/", type: "Course" }, { name: "Kaggle Guides", url: "https://www.kaggle.com/", type: "Community" }, { name: "DataCamp", url: "https://www.datacamp.com/", type: "Interactive" }] },
            { title: "Model Training & Evaluation", description: "Train, validate, and evaluate machine learning models effectively.", resources: [{ name: "Scikit-Learn Docs", url: "https://scikit-learn.org/", type: "Documentation" }, { name: "TensorFlow Guide", url: "https://www.tensorflow.org/", type: "Official" }, { name: "ML Experiments", url: "https://www.udemy.com/", type: "Course" }] },
            { title: "Deep Learning Applications", description: "Apply deep learning to computer vision, NLP, and other domains.", resources: [{ name: "PyTorch Tutorials", url: "https://pytorch.org/tutorials/", type: "Official" }, { name: "Deep Learning Spec", url: "https://www.coursera.org/", type: "Specialization" }, { name: "Fast.ai V3", url: "https://www.fast.ai/", type: "Course" }] },
            { title: "Model Deployment", description: "Deploy ML models to production and monitor performance.", resources: [{ name: "MLOps Guide", url: "https://cloud.google.com/architecture/mlops-continuous-delivery-fast-training", type: "Guide" }, { name: "Docker for ML", url: "https://www.udemy.com/", type: "Course" }, { name: "Model Serving", url: "https://www.tensorflow.org/tfx", type: "Framework" }] }
        ]
    },
    {
        id: "cybersecurity",
        title: "Cybersecurity Fundamentals",
        category: "Technology",
        icon: "🔒",
        description: "Protect systems and networks from cyber threats and attacks.",
        longDescription: "Learn to identify vulnerabilities, implement security measures, and protect organizations from cyber threats. Master encryption, firewalls, and threat detection.",
        difficulty: "Intermediate",
        timeEstimate: "8 months",
        roadmap: [
            { title: "Networking Basics", description: "Understand TCP/IP, DNS, HTTP, and network protocols.", resources: [{ name: "CompTIA Network+", url: "https://www.comptia.org/", type: "Certification" }, { name: "Network Fundamentals", url: "https://www.udemy.com/", type: "Course" }, { name: "Cisco Networking", url: "https://www.cisco.com/", type: "Training" }] },
            { title: "System & Network Security", description: "Learn firewalls, intrusion detection, and secure configurations.", resources: [{ name: "Linux Security", url: "https://www.udemy.com/", type: "Course" }, { name: "Network Security", url: "https://www.coursera.org/", type: "Course" }, { name: "SANS Institute", url: "https://www.sans.org/", type: "Training" }] },
            { title: "Cryptography & Encryption", description: "Master encryption algorithms, digital signatures, and key management.", resources: [{ name: "Cryptography Course", url: "https://www.udemy.com/", type: "Course" }, { name: "OpenSSL Guide", url: "https://www.openssl.org/", type: "Documentation" }, { name: "Applied Cryptography", url: "https://www.coursera.org/", type: "University" }] },
            { title: "Penetration Testing", description: "Learn ethical hacking and vulnerability assessment techniques.", resources: [{ name: "CEH Course", url: "https://www.eccouncil.org/", type: "Certification" }, { name: "Hack The Box", url: "https://www.hackthebox.com/", type: "Platform" }, { name: "OWASP", url: "https://owasp.org/", type: "Resources" }] },
            { title: "Incident Response", description: "Detect, investigate, and respond to security incidents.", resources: [{ name: "Incident Response", url: "https://www.udemy.com/", type: "Course" }, { name: "NIST Framework", url: "https://www.nist.gov/", type: "Official" }, { name: "Splunk Training", url: "https://www.splunk.com/", type: "Training" }] }
        ]
    },
    {
        id: "technical-writing",
        title: "Technical & Article Writing",
        category: "Creative",
        icon: "✍️",
        description: "Create clear, engaging technical documentation and articles.",
        longDescription: "Master the art of explaining complex technical concepts clearly. Learn to write documentation, blog posts, whitepapers, and technical articles for various audiences.",
        difficulty: "Beginner",
        timeEstimate: "3 months",
        roadmap: [
            { title: "Writing Fundamentals", description: "Learn structure, clarity, grammar, and professional writing style.", resources: [{ name: "Writing Style Guide", url: "https://www.udemy.com/", type: "Course" }, { name: "Grammarly", url: "https://www.grammarly.com/", type: "Tool" }, { name: "AP Stylebook", url: "https://www.apstylebook.com/", type: "Reference" }] },
            { title: "Technical Documentation", description: "Write clear APIs, guides, and technical manuals.", resources: [{ name: "Tech Writing Course", url: "https://www.udacity.com/", type: "Nanodegree" }, { name: "Write the Docs", url: "https://www.writethedocs.org/", type: "Community" }, { name: "Google Tech Writing", url: "https://developers.google.com/tech-writing", type: "Course" }] },
            { title: "Blog Writing & Storytelling", description: "Craft engaging blog posts and articles that resonate with readers.", resources: [{ name: "Blog Writing", url: "https://www.copyblogger.com/", type: "Blog" }, { name: "Medium Guide", url: "https://help.medium.com/", type: "Guide" }, { name: "Storytelling Course", url: "https://www.masterclass.com/", type: "Course" }] },
            { title: "SEO Writing", description: "Optimize articles for search engines while maintaining readability.", resources: [{ name: "SEO Writing", url: "https://yoast.com/content-seo/", type: "Guide" }, { name: "Content Strategy", url: "https://www.udemy.com/", type: "Course" }, { name: "Keyword Research", url: "https://moz.com/", type: "Tool" }] },
            { title: "Editing & Publishing", description: "Edit content professionally and publish across platforms.", resources: [{ name: "Editing Course", url: "https://www.udemy.com/", type: "Course" }, { name: "Publishing Platforms", url: "https://medium.com/", type: "Platform" }, { name: "Content Calendar", url: "https://www.asana.com/", type: "Tool" }] }
        ]
    },
    {
        id: "mobile-development",
        title: "Mobile App Development (iOS & Android)",
        category: "Technology",
        icon: "📱",
        description: "Build native and cross-platform mobile applications.",
        longDescription: "Learn to develop apps for iOS and Android platforms. Master Swift, Kotlin, and cross-platform frameworks like React Native and Flutter.",
        difficulty: "Intermediate",
        timeEstimate: "8 months",
        roadmap: [
            { title: "Mobile Development Basics", description: "Understand mobile architecture, UI/UX patterns, and lifecycle.", resources: [{ name: "Mobile Fundamentals", url: "https://www.udacity.com/", type: "Nanodegree" }, { name: "App Design Course", url: "https://www.udemy.com/", type: "Course" }, { name: "HCI Guidelines", url: "https://www.nngroup.com/", type: "Articles" }] },
            { title: "Swift & iOS Development", description: "Build native iOS apps using Swift and Xcode.", resources: [{ name: "Swift Official", url: "https://swift.org/", type: "Documentation" }, { name: "iOS Development", url: "https://developer.apple.com/", type: "Official" }, { name: "SwiftUI Tutorial", url: "https://www.udemy.com/", type: "Course" }] },
            { title: "Kotlin & Android Development", description: "Build native Android apps using Kotlin and Android Studio.", resources: [{ name: "Kotlin Docs", url: "https://kotlinlang.org/", type: "Documentation" }, { name: "Android Development", url: "https://developer.android.com/", type: "Official" }, { name: "Android Course", url: "https://www.udacity.com/", type: "Nanodegree" }] },
            { title: "Cross-Platform Development", description: "Build apps for both iOS and Android with React Native or Flutter.", resources: [{ name: "React Native Docs", url: "https://reactnative.dev/", type: "Documentation" }, { name: "Flutter Guide", url: "https://flutter.dev/", type: "Official" }, { name: "Cross-Platform Course", url: "https://www.udemy.com/", type: "Course" }] },
            { title: "App Publishing", description: "Deploy apps to App Store and Google Play with analytics.", resources: [{ name: "App Store Guide", url: "https://developer.apple.com/app-store/submission/", type: "Official" }, { name: "Play Store Guide", url: "https://developer.android.com/distribute", type: "Official" }, { name: "Analytics Setup", url: "https://firebase.google.com/", type: "Tool" }] }
        ]
    },
    {
        id: "cloud-computing",
        title: "Cloud Computing (AWS/Azure/GCP)",
        category: "Technology",
        icon: "☁️",
        description: "Build scalable applications on cloud platforms.",
        longDescription: "Master cloud infrastructure, serverless computing, and cloud services. Learn AWS, Azure, and Google Cloud Platform for modern application deployment.",
        difficulty: "Intermediate",
        timeEstimate: "6 months",
        roadmap: [
            { title: "Cloud Fundamentals", description: "Understand cloud computing models, IaaS, PaaS, SaaS concepts.", resources: [{ name: "Cloud Basics", url: "https://aws.amazon.com/training/", type: "Training" }, { name: "Cloud Concepts", url: "https://www.coursera.org/", type: "Course" }, { name: "Cloud Architecture", url: "https://cloud.google.com/training", type: "Training" }] },
            { title: "AWS Core Services", description: "Learn EC2, S3, RDS, Lambda, and other essential AWS services.", resources: [{ name: "AWS Training", url: "https://aws.amazon.com/training/", type: "Official" }, { name: "AWS Solutions", url: "https://www.udemy.com/", type: "Course" }, { name: "AWS Certification", url: "https://aws.amazon.com/certification/", type: "Exam" }] },
            { title: "Azure Services", description: "Master Azure VMs, App Service, SQL Database, and cloud solutions.", resources: [{ name: "Azure Learning", url: "https://learn.microsoft.com/", type: "Official" }, { name: "Azure Fundamentals", url: "https://www.udemy.com/", type: "Course" }, { name: "Azure Certification", url: "https://learn.microsoft.com/en-us/credentials/", type: "Cert" }] },
            { title: "Serverless Architecture", description: "Build applications with Lambda, Cloud Functions, and serverless databases.", resources: [{ name: "Serverless Course", url: "https://www.udemy.com/", type: "Course" }, { name: "AWS Lambda", url: "https://aws.amazon.com/lambda/", type: "Documentation" }, { name: "Firebase Guide", url: "https://firebase.google.com/", type: "Official" }] },
            { title: "Cloud DevOps & Monitoring", description: "Deploy, manage, and monitor cloud applications effectively.", resources: [{ name: "DevOps Course", url: "https://www.udemy.com/", type: "Course" }, { name: "Terraform Guide", url: "https://www.terraform.io/", type: "Documentation" }, { name: "CloudWatch", url: "https://aws.amazon.com/cloudwatch/", type: "Tool" }] }
        ]
    },
    {
        id: "ui-ux-design",
        title: "UI/UX Design",
        category: "Creative",
        icon: "🎯",
        description: "Design beautiful and usable digital experiences.",
        longDescription: "Master user research, wireframing, prototyping, and interaction design. Create intuitive interfaces that delight users and solve real problems.",
        difficulty: "Beginner",
        timeEstimate: "6 months",
        roadmap: [
            { title: "Design Thinking & Research", description: "Learn user research methods, personas, and empathy mapping.", resources: [{ name: "Design Thinking", url: "https://www.interaction-design.org/", type: "Course" }, { name: "User Research", url: "https://www.nngroup.com/", type: "Articles" }, { name: "Research Methods", url: "https://www.udemy.com/", type: "Course" }] },
            { title: "Wireframing & Prototyping", description: "Create wireframes and interactive prototypes for web and mobile.", resources: [{ name: "Figma Tutorial", url: "https://www.figma.com/resources/", type: "Official" }, { name: "Wireframing Course", url: "https://www.udemy.com/", type: "Course" }, { name: "Sketch Guide", url: "https://www.sketch.com/", type: "Documentation" }] },
            { title: "Interaction Design", description: "Design intuitive interactions, animations, and user flows.", resources: [{ name: "Interaction Design", url: "https://www.interaction-design.org/", type: "Course" }, { name: "Animation Guide", url: "https://material.io/", type: "Guidelines" }, { name: "Micro-interactions", url: "https://www.udemy.com/", type: "Course" }] },
            { title: "Visual Design & Branding", description: "Master typography, color, and visual hierarchy for cohesive design.", resources: [{ name: "Visual Design", url: "https://www.interaction-design.org/", type: "Course" }, { name: "Color Theory", url: "https://color.adobe.com/", type: "Tool" }, { name: "Branding Guide", url: "https://www.udemy.com/", type: "Course" }] },
            { title: "Design Systems & Tools", description: "Create and maintain design systems for consistency and scalability.", resources: [{ name: "Design Systems", url: "https://www.designsystems.com/", type: "Resource" }, { name: "Figma Design Systems", url: "https://www.figma.com/", type: "Tool" }, { name: "Component Libraries", url: "https://www.udemy.com/", type: "Course" }] }
        ]
    },
    {
        id: "artificial-intelligence",
        title: "Artificial Intelligence & NLP",
        category: "Technology",
        icon: "🧠",
        description: "Build intelligent systems using AI and natural language processing.",
        longDescription: "Master natural language processing, computer vision, and generative AI. Learn to build chatbots, recommendation systems, and AI-powered applications.",
        difficulty: "Advanced",
        timeEstimate: "10 months",
        roadmap: [
            { title: "AI Fundamentals", description: "Understand AI concepts, search algorithms, and problem-solving.", resources: [{ name: "AI for Everyone", url: "https://www.coursera.org/", type: "Course" }, { name: "Intro to AI", url: "https://www.udacity.com/", type: "Nanodegree" }, { name: "AI Basics", url: "https://www.udemy.com/", type: "Course" }] },
            { title: "Natural Language Processing", description: "Process and analyze text data with NLP techniques.", resources: [{ name: "NLP Course", url: "https://www.coursera.org/", type: "University" }, { name: "spaCy Tutorial", url: "https://spacy.io/", type: "Documentation" }, { name: "NLTK Guide", url: "https://www.nltk.org/", type: "Library" }] },
            { title: "Computer Vision", description: "Build image recognition and object detection systems.", resources: [{ name: "CV Course", url: "https://www.udacity.com/", type: "Nanodegree" }, { name: "OpenCV Guide", url: "https://opencv.org/", type: "Documentation" }, { name: "Vision Basics", url: "https://www.udemy.com/", type: "Course" }] },
            { title: "Generative AI & LLMs", description: "Work with large language models and generative AI systems.", resources: [{ name: "LLM Course", url: "https://www.deeplearning.ai/", type: "Short Course" }, { name: "OpenAI API", url: "https://platform.openai.com/docs", type: "Documentation" }, { name: "Prompt Engineering", url: "https://www.udemy.com/", type: "Course" }] },
            { title: "AI Applications", description: "Build chatbots, recommendation systems, and AI-powered apps.", resources: [{ name: "Chatbot Development", url: "https://www.udemy.com/", type: "Course" }, { name: "Recommendation Systems", url: "https://www.coursera.org/", type: "Course" }, { name: "AI in Production", url: "https://www.udacity.com/", type: "Nanodegree" }] }
        ]
    },
    {
        id: "devops",
        title: "DevOps & Infrastructure",
        category: "Technology",
        icon: "🛠️",
        description: "Automate deployment, testing, and infrastructure management.",
        longDescription: "Master CI/CD pipelines, containerization, infrastructure as code, and monitoring. Learn to deploy and manage applications at scale.",
        difficulty: "Intermediate",
        timeEstimate: "7 months",
        roadmap: [
            { title: "Version Control with Git", description: "Master Git workflows, branching strategies, and collaboration.", resources: [{ name: "Git Basics", url: "https://git-scm.com/book", type: "Book" }, { name: "GitHub Learning", url: "https://github.com/skills", type: "Course" }, { name: "Git Course", url: "https://www.udemy.com/", type: "Course" }] },
            { title: "Containerization with Docker", description: "Build, package, and deploy applications using Docker containers.", resources: [{ name: "Docker Docs", url: "https://docs.docker.com/", type: "Documentation" }, { name: "Docker Mastery", url: "https://www.udemy.com/", type: "Course" }, { name: "Docker Handbook", url: "https://www.freecodecamp.org/", type: "Free Course" }] },
            { title: "Kubernetes Orchestration", description: "Deploy and manage containerized applications at scale with Kubernetes.", resources: [{ name: "Kubernetes Docs", url: "https://kubernetes.io/docs/", type: "Documentation" }, { name: "K8s Course", url: "https://www.udacity.com/", type: "Nanodegree" }, { name: "K8s Mastery", url: "https://www.udemy.com/", type: "Course" }] },
            { title: "CI/CD Pipelines", description: "Automate testing and deployment with CI/CD tools like Jenkins and GitLab.", resources: [{ name: "Jenkins Guide", url: "https://www.jenkins.io/", type: "Documentation" }, { name: "GitLab CI", url: "https://docs.gitlab.com/ee/ci/", type: "Documentation" }, { name: "CI/CD Course", url: "https://www.udemy.com/", type: "Course" }] },
            { title: "Infrastructure as Code", description: "Manage infrastructure using Terraform and CloudFormation.", resources: [{ name: "Terraform Docs", url: "https://www.terraform.io/docs", type: "Documentation" }, { name: "IaC Course", url: "https://www.udemy.com/", type: "Course" }, { name: "Ansible Guide", url: "https://docs.ansible.com/", type: "Documentation" }] }
        ]
    },
    {
        id: "game-development",
        title: "Game Development",
        category: "Creative",
        icon: "🎮",
        description: "Create engaging games for multiple platforms.",
        longDescription: "Learn game development with Unity or Unreal Engine. Master game design, 3D graphics, physics, and game optimization for PC, console, and mobile.",
        difficulty: "Intermediate",
        timeEstimate: "9 months",
        roadmap: [
            { title: "Game Development Basics", description: "Understand game loops, game design patterns, and project structure.", resources: [{ name: "Game Design Course", url: "https://www.udacity.com/", type: "Nanodegree" }, { name: "Game Dev Basics", url: "https://www.udemy.com/", type: "Course" }, { name: "Game Theory", url: "https://www.coursera.org/", type: "Course" }] },
            { title: "Unity Engine Fundamentals", description: "Master C# and Unity game engine for 2D and 3D game development.", resources: [{ name: "Unity Learn", url: "https://learn.unity.com/", type: "Official" }, { name: "C# for Unity", url: "https://www.udemy.com/", type: "Course" }, { name: "Unity Tutorials", url: "https://www.youtube.com/", type: "YouTube" }] },
            { title: "3D Graphics & Physics", description: "Learn 3D modeling, lighting, animations, and physics simulation.", resources: [{ name: "3D Modeling Course", url: "https://www.udemy.com/", type: "Course" }, { name: "Blender Guide", url: "https://www.blender.org/", type: "Documentation" }, { name: "Physics in Games", url: "https://www.udacity.com/", type: "Course" }] },
            { title: "Game Audio & Visuals", description: "Add sound effects, music, particle effects, and visual polish.", resources: [{ name: "Game Audio", url: "https://www.udemy.com/", type: "Course" }, { name: "Particle Effects", url: "https://www.udemy.com/", type: "Course" }, { name: "Post-Processing", url: "https://learn.unity.com/", type: "Tutorial" }] },
            { title: "Game Publishing & Optimization", description: "Optimize performance and publish games to stores.", resources: [{ name: "Game Optimization", url: "https://www.udemy.com/", type: "Course" }, { name: "Game Distribution", url: "https://store.steampowered.com/", type: "Platform" }, { name: "Play Store", url: "https://play.google.com/console/", type: "Platform" }] }
        ]
    },
    {
        id: "video-editing",
        title: "Video Editing & Production",
        category: "Creative",
        icon: "🎬",
        description: "Edit and produce professional videos for any medium.",
        longDescription: "Master video editing software, color grading, sound design, and effects. Create compelling videos for YouTube, social media, and professional production.",
        difficulty: "Beginner",
        timeEstimate: "4 months",
        roadmap: [
            { title: "Video Editing Fundamentals", description: "Learn cutting, transitions, pacing, and professional editing techniques.", resources: [{ name: "Video Editing Course", url: "https://www.udemy.com/", type: "Course" }, { name: "Premiere Pro Basics", url: "https://www.adobe.com/", type: "Tutorials" }, { name: "DaVinci Resolve", url: "https://www.blackmagicdesign.com/", type: "Software" }] },
            { title: "Professional Video Software", description: "Master Adobe Premiere Pro, Final Cut Pro, or DaVinci Resolve.", resources: [{ name: "Premiere Pro Guide", url: "https://www.adobe.com/", type: "Official" }, { name: "FCP Tutorials", url: "https://www.apple.com/", type: "Official" }, { name: "Resolve Course", url: "https://www.udemy.com/", type: "Course" }] },
            { title: "Color Grading & Effects", description: "Apply color correction, color grading, and visual effects.", resources: [{ name: "Color Grading Course", url: "https://www.udemy.com/", type: "Course" }, { name: "Color Correction", url: "https://www.youtube.com/", type: "Tutorials" }, { name: "VFX Basics", url: "https://www.udemy.com/", type: "Course" }] },
            { title: "Audio Post-Production", description: "Mix audio, add sound effects, and master for professional output.", resources: [{ name: "Audio Mixing Course", url: "https://www.udemy.com/", type: "Course" }, { name: "Adobe Audition", url: "https://www.adobe.com/", type: "Software" }, { name: "Sound Design", url: "https://www.youtube.com/", type: "Tutorials" }] },
            { title: "Video Publishing", description: "Optimize and publish videos for YouTube, social media, and broadcast.", resources: [{ name: "YouTube SEO", url: "https://www.youtube.com/howyoutubeworks", type: "Guide" }, { name: "Video Optimization", url: "https://www.udemy.com/", type: "Course" }, { name: "Social Media Video", url: "https://later.com/blog/", type: "Blog" }] }
        ]
    },
    {
        id: "photography",
        title: "Photography & Photo Editing",
        category: "Creative",
        icon: "📸",
        description: "Master photography techniques and photo editing.",
        longDescription: "Learn composition, lighting, exposure, and photography techniques. Master Lightroom and Photoshop for professional photo editing and retouching.",
        difficulty: "Beginner",
        timeEstimate: "3 months",
        roadmap: [
            { title: "Photography Fundamentals", description: "Learn composition, exposure triangle, focus, and lighting basics.", resources: [{ name: "Photography Course", url: "https://www.udemy.com/", type: "Course" }, { name: "Photography Basics", url: "https://www.masterclass.com/", type: "Masterclass" }, { name: "Composition Guide", url: "https://www.youtube.com/", type: "Tutorials" }] },
            { title: "Camera & Lens Mastery", description: "Understand camera types, lenses, and how to use them effectively.", resources: [{ name: "Camera Settings", url: "https://www.udemy.com/", type: "Course" }, { name: "Lens Guide", url: "https://www.youtube.com/", type: "Tutorials" }, { name: "Manual Mode", url: "https://www.masterclass.com/", type: "Masterclass" }] },
            { title: "Lighting Techniques", description: "Master natural light, studio lighting, and off-camera flash.", resources: [{ name: "Lighting Masterclass", url: "https://www.masterclass.com/", type: "Masterclass" }, { name: "Studio Lighting", url: "https://www.udemy.com/", type: "Course" }, { name: "Flash Photography", url: "https://www.youtube.com/", type: "Tutorials" }] },
            { title: "Post-Processing & Editing", description: "Edit photos in Lightroom and Photoshop with professional results.", resources: [{ name: "Lightroom Mastery", url: "https://www.youtube.com/", type: "Tutorials" }, { name: "Photoshop Editing", url: "https://www.adobe.com/", type: "Tutorials" }, { name: "Photo Editing Course", url: "https://www.udemy.com/", type: "Course" }] },
            { title: "Photography Business", description: "Build a photography business and portfolio.", resources: [{ name: "Photography Business", url: "https://www.udemy.com/", type: "Course" }, { name: "Portfolio Building", url: "https://www.squarespace.com/", type: "Platform" }, { name: "Client Management", url: "https://www.asana.com/", type: "Tool" }] }
        ]
    },
    {
        id: "copywriting",
        title: "Copywriting & Persuasion",
        category: "Creative",
        icon: "✨",
        description: "Write compelling copy that persuades and converts.",
        longDescription: "Master copywriting formulas, conversion optimization, and persuasion psychology. Write sales pages, ads, email sequences, and marketing copy that sells.",
        difficulty: "Beginner",
        timeEstimate: "2 months",
        roadmap: [
            { title: "Copywriting Fundamentals", description: "Learn proven copywriting formulas, headlines, and hooks.", resources: [{ name: "Copywriting Course", url: "https://www.copyblogger.com/", type: "Blog" }, { name: "AIDA Formula", url: "https://www.udemy.com/", type: "Course" }, { name: "Copywriting Mastery", url: "https://www.masterclass.com/", type: "Masterclass" }] },
            { title: "Sales Pages & Landing Pages", description: "Create high-converting sales pages and landing pages.", resources: [{ name: "Sales Page Course", url: "https://www.udemy.com/", type: "Course" }, { name: "Landing Page Guide", url: "https://unbounce.com/", type: "Resource" }, { name: "Conversion Optimization", url: "https://www.optimizely.com/", type: "Tool" }] },
            { title: "Email Marketing Copy", description: "Write email sequences that engage and convert subscribers.", resources: [{ name: "Email Marketing", url: "https://mailchimp.com/", type: "Platform" }, { name: "Email Copywriting", url: "https://www.udemy.com/", type: "Course" }, { name: "Subject Lines", url: "https://copyblogger.com/", type: "Blog" }] },
            { title: "Ads & Social Copy", description: "Write compelling social media ads and promotional copy.", resources: [{ name: "Social Media Copy", url: "https://buffer.com/library/social-media-writing/", type: "Guide" }, { name: "Ad Copywriting", url: "https://www.udemy.com/", type: "Course" }, { name: "Facebook Ads", url: "https://www.facebook.com/business/", type: "Platform" }] },
            { title: "Copy Testing & Optimization", description: "A/B test copy and optimize for maximum conversions.", resources: [{ name: "A/B Testing", url: "https://www.optimizely.com/", type: "Platform" }, { name: "Testing Course", url: "https://www.udemy.com/", type: "Course" }, { name: "Analytics", url: "https://analytics.google.com/", type: "Tool" }] }
        ]
    },
    {
        id: "project-management",
        title: "Project Management & Agile",
        category: "Business",
        icon: "📊",
        description: "Lead projects and teams using Agile and project management methodologies.",
        longDescription: "Master Agile, Scrum, Kanban, and traditional project management. Learn to plan, execute, and deliver projects on time and within budget.",
        difficulty: "Beginner",
        timeEstimate: "3 months",
        roadmap: [
            { title: "Project Management Fundamentals", description: "Learn project lifecycle, planning, and execution basics.", resources: [{ name: "PM Fundamentals", url: "https://www.udemy.com/", type: "Course" }, { name: "PMBOK Guide", url: "https://www.pmi.org/", type: "Official" }, { name: "PM Basics", url: "https://www.coursera.org/", type: "Course" }] },
            { title: "Agile & Scrum", description: "Master Agile methodology, Scrum framework, and iterative development.", resources: [{ name: "Agile Certification", url: "https://www.scrumalliance.org/", type: "Certification" }, { name: "Scrum Course", url: "https://www.udemy.com/", type: "Course" }, { name: "Agile Guide", url: "https://agilemanifesto.org/", type: "Official" }] },
            { title: "Kanban & Lean", description: "Learn Kanban boards, Lean principles, and continuous improvement.", resources: [{ name: "Kanban Course", url: "https://www.udemy.com/", type: "Course" }, { name: "Lean Principles", url: "https://www.coursera.org/", type: "Course" }, { name: "Jira Guide", url: "https://www.atlassian.com/software/jira", type: "Tool" }] },
            { title: "Project Planning & Tracking", description: "Create project plans, timelines, budgets, and track progress.", resources: [{ name: "Planning Course", url: "https://www.udemy.com/", type: "Course" }, { name: "Asana Tutorials", url: "https://asana.com/", type: "Tool" }, { name: "Monday.com", url: "https://monday.com/", type: "Platform" }] },
            { title: "Team Leadership", description: "Lead teams, manage stakeholders, and improve team performance.", resources: [{ name: "Leadership Course", url: "https://www.masterclass.com/", type: "Masterclass" }, { name: "Team Management", url: "https://www.udemy.com/", type: "Course" }, { name: "Communication Skills", url: "https://www.coursera.org/", type: "Course" }] }
        ]
    },
    {
        id: "financial-analysis",
        title: "Financial Analysis & Investing",
        category: "Business",
        icon: "💰",
        description: "Analyze financial data and make investment decisions.",
        longDescription: "Learn financial statement analysis, valuation, investment strategies, and portfolio management. Master Excel and financial modeling for business decisions.",
        difficulty: "Intermediate",
        timeEstimate: "6 months",
        roadmap: [
            { title: "Financial Statement Analysis", description: "Analyze income statements, balance sheets, and cash flows.", resources: [{ name: "Financial Accounting", url: "https://www.coursera.org/", type: "Course" }, { name: "Statement Analysis", url: "https://www.udemy.com/", type: "Course" }, { name: "Accounting Basics", url: "https://www.khanacademy.org/", type: "Free" }] },
            { title: "Financial Modeling & Valuation", description: "Build financial models and value companies using multiple methods.", resources: [{ name: "Financial Modeling", url: "https://www.udemy.com/", type: "Course" }, { name: "Valuation Methods", url: "https://www.coursera.org/", type: "Course" }, { name: "DCF Analysis", url: "https://www.youtube.com/", type: "Tutorials" }] },
            { title: "Investment Analysis", description: "Evaluate stocks, bonds, and investment opportunities.", resources: [{ name: "Investment Course", url: "https://www.coursera.org/", type: "University" }, { name: "Stock Analysis", url: "https://www.investopedia.com/", type: "Resource" }, { name: "Investing 101", url: "https://www.udemy.com/", type: "Course" }] },
            { title: "Risk Management", description: "Understand and manage financial and investment risks.", resources: [{ name: "Risk Management", url: "https://www.udemy.com/", type: "Course" }, { name: "Portfolio Risk", url: "https://www.coursera.org/", type: "Course" }, { name: "Diversification", url: "https://www.investopedia.com/", type: "Guide" }] },
            { title: "Excel for Finance", description: "Master Excel for financial analysis and modeling.", resources: [{ name: "Excel Finance", url: "https://www.udemy.com/", type: "Course" }, { name: "Advanced Excel", url: "https://www.datacamp.com/", type: "Course" }, { name: "Excel Functions", url: "https://support.microsoft.com/", type: "Guide" }] }
        ]
    },
    {
        id: "content-strategy",
        title: "Content Strategy & Marketing",
        category: "Business",
        icon: "📝",
        description: "Create and execute content strategies that drive business results.",
        longDescription: "Develop comprehensive content strategies, editorial calendars, and multi-channel campaigns. Learn to create content that builds authority and drives conversions.",
        difficulty: "Intermediate",
        timeEstimate: "4 months",
        roadmap: [
            { title: "Content Strategy Foundations", description: "Understand content planning, audience analysis, and strategy development.", resources: [{ name: "Content Strategy", url: "https://contentmarketinginstitute.com/", type: "Resource" }, { name: "Strategy Course", url: "https://www.udemy.com/", type: "Course" }, { name: "Audience Research", url: "https://www.coursera.org/", type: "Course" }] },
            { title: "Editorial Planning & Calendar", description: "Create editorial calendars and manage content production.", resources: [{ name: "Editorial Calendar", url: "https://asana.com/", type: "Tool" }, { name: "Content Calendar", url: "https://www.udemy.com/", type: "Course" }, { name: "Trello Guide", url: "https://trello.com/", type: "Tool" }] },
            { title: "Multi-Channel Content", description: "Adapt content across blog, social, video, and email channels.", resources: [{ name: "Omnichannel Strategy", url: "https://www.udemy.com/", type: "Course" }, { name: "Content Repurposing", url: "https://buffer.com/", type: "Tool" }, { name: "Multi-Channel Guide", url: "https://copyblogger.com/", type: "Blog" }] },
            { title: "SEO & Content Optimization", description: "Optimize content for search engines and user intent.", resources: [{ name: "SEO Strategy", url: "https://moz.com/", type: "Guide" }, { name: "Content SEO", url: "https://yoast.com/", type: "Plugin" }, { name: "Keyword Strategy", url: "https://www.udemy.com/", type: "Course" }] },
            { title: "Analytics & ROI", description: "Measure content performance and demonstrate content ROI.", resources: [{ name: "Content Analytics", url: "https://analytics.google.com/", type: "Tool" }, { name: "Measurement Course", url: "https://www.udemy.com/", type: "Course" }, { name: "KPI Tracking", url: "https://www.hubspot.com/", type: "Platform" }] }
        ]
    },
    {
        id: "api-development",
        title: "REST API Development",
        category: "Technology",
        icon: "🔌",
        description: "Design and build RESTful APIs for modern applications.",
        longDescription: "Master API design principles, authentication, documentation, and versioning. Build scalable APIs using best practices and modern frameworks.",
        difficulty: "Intermediate",
        timeEstimate: "5 months",
        roadmap: [
            { title: "API Fundamentals", description: "Understand REST principles, HTTP methods, and status codes.", resources: [{ name: "REST API Guide", url: "https://restfulapi.net/", type: "Guide" }, { name: "API Basics", url: "https://www.udemy.com/", type: "Course" }, { name: "HTTP Concepts", url: "https://developer.mozilla.org/", type: "Documentation" }] },
            { title: "API Design Best Practices", description: "Design clean, intuitive APIs with proper structure and naming.", resources: [{ name: "API Design Guide", url: "https://swagger.io/", type: "Resource" }, { name: "Design Course", url: "https://www.udemy.com/", type: "Course" }, { name: "REST Standards", url: "https://www.youtube.com/", type: "Tutorials" }] },
            { title: "Authentication & Security", description: "Implement JWT, OAuth, and secure API endpoints.", resources: [{ name: "Auth Course", url: "https://www.udemy.com/", type: "Course" }, { name: "JWT Guide", url: "https://jwt.io/", type: "Documentation" }, { name: "Security Best Practices", url: "https://owasp.org/", type: "Guide" }] },
            { title: "API Documentation", description: "Create clear, comprehensive API documentation with Swagger/OpenAPI.", resources: [{ name: "Swagger Guide", url: "https://swagger.io/", type: "Documentation" }, { name: "OpenAPI Spec", url: "https://www.openapis.org/", type: "Standard" }, { name: "Doc Tools", url: "https://www.udemy.com/", type: "Course" }] },
            { title: "API Deployment & Management", description: "Deploy, version, and manage APIs in production.", resources: [{ name: "API Gateway", url: "https://aws.amazon.com/api-gateway/", type: "Tool" }, { name: "API Management", url: "https://www.udemy.com/", type: "Course" }, { name: "Monitoring APIs", url: "https://www.datadog.com/", type: "Tool" }] }
        ]
    },
    {
        id: "software-testing",
        title: "Software Testing & QA",
        category: "Technology",
        icon: "✅",
        description: "Ensure software quality through comprehensive testing.",
        longDescription: "Master manual and automated testing, test planning, and quality assurance. Learn to write tests, automate testing, and catch bugs before production.",
        difficulty: "Intermediate",
        timeEstimate: "5 months",
        roadmap: [
            { title: "Testing Fundamentals", description: "Understand testing types, strategies, and best practices.", resources: [{ name: "QA Fundamentals", url: "https://www.udemy.com/", type: "Course" }, { name: "Testing Guide", url: "https://www.coursera.org/", type: "Course" }, { name: "ISTQB Certification", url: "https://www.istqb.org/", type: "Certification" }] },
            { title: "Manual Testing", description: "Plan test cases, perform manual testing, and bug reporting.", resources: [{ name: "Manual Testing", url: "https://www.udemy.com/", type: "Course" }, { name: "Test Planning", url: "https://www.youtube.com/", type: "Tutorials" }, { name: "Bug Tracking", url: "https://www.jira.com/", type: "Tool" }] },
            { title: "Automated Testing", description: "Write automated tests with Selenium, Cypress, and Jest.", resources: [{ name: "Selenium Course", url: "https://www.udemy.com/", type: "Course" }, { name: "Cypress Guide", url: "https://cypress.io/", type: "Documentation" }, { name: "Jest Testing", url: "https://jestjs.io/", type: "Documentation" }] },
            { title: "Unit & Integration Testing", description: "Write unit tests and integration tests for code quality.", resources: [{ name: "Unit Testing", url: "https://www.udemy.com/", type: "Course" }, { name: "Testing Best Practices", url: "https://www.youtube.com/", type: "Tutorials" }, { name: "Test-Driven Development", url: "https://www.coursera.org/", type: "Course" }] },
            { title: "Performance & Load Testing", description: "Test application performance and load capacity.", resources: [{ name: "JMeter Guide", url: "https://jmeter.apache.org/", type: "Documentation" }, { name: "Load Testing", url: "https://www.udemy.com/", type: "Course" }, { name: "Performance Testing", url: "https://www.youtube.com/", type: "Tutorials" }] }
        ]
    }
];

// App State
let currentPage = 'home';
let selectedCategory = 'all';
let searchQuery = '';
let expandedSteps = {};

// Initialize app
function init() {
    renderHome();
    setupEventListeners();
}

function setupEventListeners() {
    const app = document.getElementById('app');
    
    app.addEventListener('click', (e) => {
        // Filter buttons
        if (e.target.classList.contains('filter-btn')) {
            document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
            e.target.classList.add('active');
            selectedCategory = e.target.dataset.category;
            renderSkillsGrid();
        }
        
        // Skill cards
        if (e.target.closest('.skill-card')) {
            const skillId = e.target.closest('.skill-card').dataset.skillId;
            renderDetail(skillId);
        }
        
        // Back button
        if (e.target.classList.contains('back-btn')) {
            renderHome();
        }
        
        // Clear filters
        if (e.target.classList.contains('clear-filters-btn')) {
            selectedCategory = 'all';
            searchQuery = '';
            renderHome();
        }

        // Toggle resources
        if (e.target.classList.contains('toggle-resources-btn')) {
            const stepId = e.target.dataset.stepId;
            expandedSteps[stepId] = !expandedSteps[stepId];
            updateStepResources(stepId);
        }

        // External resource links
        if (e.target.classList.contains('resource-link')) {
            const url = e.target.dataset.url;
            if (url && url !== '#') {
                window.open(url, '_blank');
            }
        }
    });

    // Search input listener
    app.addEventListener('input', (e) => {
        if (e.target.id === 'searchInput') {
            searchQuery = e.target.value.toLowerCase();
            renderSkillsGrid();
        }
    });
}

function renderHome() {
    const app = document.getElementById('app');
    
    const heroTemplate = document.getElementById('hero-template');
    const homeTemplate = document.getElementById('home-template');
    
    app.innerHTML = '';
    app.appendChild(heroTemplate.content.cloneNode(true));
    app.appendChild(homeTemplate.content.cloneNode(true));
    
    currentPage = 'home';
    selectedCategory = 'all';
    searchQuery = '';
    expandedSteps = {};
    
    // Get categories from skillsData
    const categories = Array.from(new Set(skillsData.map(s => s.category)));
    
    // Reset filter buttons
    setTimeout(() => {
        document.querySelector('[data-category="all"]')?.classList.add('active');
        const filterContainer = document.querySelector('.filter-buttons');
        
        // Clear existing buttons and recreate them
        filterContainer.innerHTML = '<button class="filter-btn active" data-category="all">All</button>';
        categories.forEach(category => {
            const btn = document.createElement('button');
            btn.className = 'filter-btn';
            btn.dataset.category = category;
            btn.textContent = category;
            filterContainer.appendChild(btn);
        });
        
        renderSkillsGrid();
    }, 0);
}

function renderSkillsGrid() {
    const grid = document.getElementById('skillsGrid');
    const emptyState = document.getElementById('emptyState');
    
    const filtered = skillsData.filter(skill => {
        const matchCategory = selectedCategory === 'all' || skill.category === selectedCategory;
        const matchSearch = skill.title.toLowerCase().includes(searchQuery) || 
                          skill.description.toLowerCase().includes(searchQuery);
        return matchCategory && matchSearch;
    });

    if (filtered.length === 0) {
        grid.style.display = 'none';
        emptyState.style.display = 'block';
        return;
    }

    grid.style.display = 'grid';
    emptyState.style.display = 'none';
    grid.innerHTML = '';

    filtered.forEach(skill => {
        const card = createSkillCard(skill);
        grid.appendChild(card);
    });
}

function createSkillCard(skill) {
    const template = document.getElementById('skill-card-template');
    const cardElement = template.content.cloneNode(true);
    
    const card = cardElement.querySelector('.skill-card');
    card.dataset.skillId = skill.id;
    
    cardElement.querySelector('.skill-icon').textContent = skill.icon;
    cardElement.querySelector('.category-badge').textContent = skill.category;
    cardElement.querySelector('.skill-title').textContent = skill.title;
    cardElement.querySelector('.skill-description').textContent = skill.description;
    cardElement.querySelector('.time span').textContent = skill.timeEstimate;
    cardElement.querySelector('.difficulty span').textContent = skill.difficulty;
    
    return cardElement;
}

function renderDetail(skillId) {
    const skill = skillsData.find(s => s.id === skillId);
    if (!skill) return;

    const app = document.getElementById('app');
    const template = document.getElementById('detail-template');
    const detailElement = template.content.cloneNode(true);

    detailElement.querySelector('.detail-icon').textContent = skill.icon;
    detailElement.querySelector('.detail-title').textContent = skill.title;
    detailElement.querySelector('.detail-description').textContent = skill.longDescription;
    
    const metaItems = detailElement.querySelectorAll('.meta-value');
    metaItems[0].textContent = skill.timeEstimate;
    metaItems[1].textContent = skill.difficulty + ' Level';
    metaItems[2].textContent = skill.roadmap.length + ' Steps';

    detailElement.querySelector('.roadmap-subtitle').textContent = 
        `Follow this step-by-step path to master ${skill.title}`;

    const roadmapContainer = detailElement.querySelector('#roadmap');
    expandedSteps = {};
    skill.roadmap.forEach((step, index) => {
        const stepElement = createRoadmapStep(step, index + 1);
        roadmapContainer.appendChild(stepElement);
    });

    app.innerHTML = '';
    app.appendChild(detailElement);
    
    currentPage = 'detail';
    window.scrollTo(0, 0);
}

function createRoadmapStep(step, stepNumber) {
    const stepId = `step-${stepNumber}`;
    const stepDiv = document.createElement('div');
    stepDiv.className = 'roadmap-step';
    stepDiv.dataset.step = stepNumber;
    stepDiv.id = stepId;

    let contentHTML = `
        <div class="step-content">
            <div class="step-header">
                <div class="step-title">${step.title}</div>
                ${step.resources && step.resources.length > 0 ? `<button class="toggle-resources-btn" data-step-id="${stepId}">📚 Resources</button>` : ''}
            </div>
            <div class="step-description">${step.description}</div>
    `;

    if (step.resources && step.resources.length > 0) {
        contentHTML += `
            <div class="step-resources" id="resources-${stepId}" style="display: none;">
                <div class="resources-header">
                    <h4>Recommended Resources for This Step</h4>
                </div>
                <div class="resource-grid">
        `;
        step.resources.forEach(resource => {
            contentHTML += `
                <div class="resource-card">
                    <div class="resource-type">${resource.type}</div>
                    <div class="resource-name">${resource.name}</div>
                    <a href="${resource.url}" target="_blank" rel="noopener noreferrer" class="resource-link" data-url="${resource.url}">
                        Open Resource →
                    </a>
                </div>
            `;
        });
        contentHTML += `
                </div>
            </div>
        `;
    }

    contentHTML += `</div>`;
    stepDiv.innerHTML = contentHTML;
    return stepDiv;
}

function updateStepResources(stepId) {
    const resourcesDiv = document.getElementById(`resources-${stepId}`);
    const btn = document.querySelector(`[data-step-id="${stepId}"]`);
    
    if (resourcesDiv) {
        if (expandedSteps[stepId]) {
            resourcesDiv.style.display = 'block';
            btn.classList.add('active');
        } else {
            resourcesDiv.style.display = 'none';
            btn.classList.remove('active');
        }
    }
}

// Start the app
document.addEventListener('DOMContentLoaded', init);
