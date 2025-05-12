document.addEventListener('DOMContentLoaded', () => {
    const chatbotIcon = document.getElementById('chatbot-icon');
    const chatbotWindow = document.getElementById('chatbot-window');
    const closeChatbotButton = document.getElementById('close-chatbot');
    const chatbotMessagesContainer = document.getElementById('chatbot-messages');
    const chatbotInput = document.getElementById('chatbot-input');
    const chatbotSendButton = document.getElementById('chatbot-send');

    // --- Data about Aayush (Extract or summarize from your HTML content) ---
    // Keep this data updated to match your website's content!
    const aayushData = {
        name: "Aayush Kafle",
        profession: "Programmer Analyst",
        introduction: "I'm Aayush Kafle, a Programmer Analyst at TXNM Energy in Albuquerque, NM, working on a Grid Modernization Integration project. I have experience in backend systems, UI design, and machine learning. I'm eager to learn, adapt, and collaborate on challenging software engineering projects.",
        skillsSummary: "Key skills include Java (95%), C++ (90%), Python (95%), React (90%), SQL (85%), and Embedded Systems (70%). Proficient with tools like Git, Docker, TensorFlow, and cloud platforms like AWS and Azure.",
        education: "Bachelor of Science in Computer Science with a minor in Mathematics from the University of New Mexico (2021-2024). Relevant coursework: Software Engineering, Operating Systems, Databases, Big Data, Data Structures and Algorithms.",
        experienceHighlights: "Interned at OpenQQuantify (optimized GPT-4o mini, automated dataset preprocessing, developed React features) and Explora Science Center (programmed Raspberry Pi projects, led workshops). Also worked as a Research Assistant and IT Specialist at UNM.",
        servicesOverview: "Offers services in Software Development, Web Development, Cloud & DevOps, Embedded Systems, Machine Learning & Data Analytics, and Mobile App Development.",
        portfolioExamples: [
            { name: "LoboLocate", shortDesc: "Mobile app for lost and found items (React Native, Node.js, AI)." },
            { name: "CS50 AI Projects", shortDesc: "AI concepts including search, Minimax, ML, NN, NLP." },
            { name: "Auction House", shortDesc: "Distributed auction system in Java." }
        ],
        contactInfo: {
            email: "aayushkafle308@gmail.com",
            phone: "5056772730",
            website: "www.aayushkafle47.com.np"
        }
    };

    let isFirstMessage = true;

    // --- Chatbot Functionality ---
    chatbotIcon.addEventListener('click', () => {
        chatbotWindow.classList.toggle('hidden');
        chatbotInput.focus();
        if (!chatbotWindow.classList.contains('hidden') && isFirstMessage) {
            addBotMessage("Hi! I'm Aayush's virtual assistant. How can I help you explore his portfolio today? You can ask me to 'go to about', 'tell me about his skills', etc.");
            isFirstMessage = false;
        }
    });

    closeChatbotButton.addEventListener('click', () => {
        chatbotWindow.classList.add('hidden');
    });

    chatbotSendButton.addEventListener('click', handleUserInput);
    chatbotInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            handleUserInput();
        }
    });

    function handleUserInput() {
        const messageText = chatbotInput.value.trim();
        if (messageText === '') return;

        addUserMessage(messageText);
        chatbotInput.value = '';

        setTimeout(() => {
            const botResponse = getBotResponse(messageText);
            addBotMessage(botResponse);
        }, 600); // Simulate thinking
    }

    function addUserMessage(message) {
        const messageElement = document.createElement('div');
        messageElement.classList.add('chat-message', 'user-message');
        messageElement.textContent = message;
        chatbotMessagesContainer.appendChild(messageElement);
        scrollToBottom();
    }

    function addBotMessage(message) {
        const messageElement = document.createElement('div');
        messageElement.classList.add('chat-message', 'bot-message');
        messageElement.innerHTML = message; // Use innerHTML for links
        chatbotMessagesContainer.appendChild(messageElement);
        scrollToBottom();
    }

    function scrollToBottom() {
        chatbotMessagesContainer.scrollTop = chatbotMessagesContainer.scrollHeight;
    }

    function navigateToSection(sectionId, sectionName) {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            // Optional: Close chatbot after navigation
            // setTimeout(() => chatbotWindow.classList.add('hidden'), 1000);
            return `Sure, navigating you to the ${sectionName} section.`;
        }
        return `Sorry, I couldn't find the ${sectionName} section.`;
    }

    // Helper for creating clickable navigation links in chat
    function createNavHelper(text, sectionId) {
        return `${text} <a href="#" onclick="document.getElementById('${sectionId}').scrollIntoView({behavior:'smooth'}); return false;">Click here to go to ${sectionId}</a>.`;
    }

    function getBotResponse(userInput) {
        const input = userInput.toLowerCase();

        // Greetings
        if (input.match(/\b(hi|hello|hey|heya|good morning|good afternoon)\b/)) {
            return "Hello there! How can I help you learn about Aayush or navigate his site?";
        }

        // Navigation
        const navRegex = /\b(go to|navigate to|show me|take me to|open|view)\b\s*(the\s*)?(home|about|service|portfolio|project|contact)/;
        const navMatch = input.match(navRegex);
        if (navMatch) {
            const section = navMatch[3];
            if (section.startsWith("home")) return navigateToSection('home', 'Home');
            if (section.startsWith("about")) return navigateToSection('about', 'About');
            if (section.startsWith("service")) return navigateToSection('services', 'Services');
            if (section.startsWith("portfolio") || section.startsWith("project")) return navigateToSection('portfolio', 'Portfolio');
            if (section.startsWith("contact")) return navigateToSection('contact', 'Contact');
        }
        // Direct section names
        if (input.match(/^home$/)) return navigateToSection('home', 'Home');
        if (input.match(/^about$/)) return navigateToSection('about', 'About');
        if (input.match(/^services?$/)) return navigateToSection('services', 'Services');
        if (input.match(/^portfolio|projects?$/)) return navigateToSection('portfolio', 'Portfolio');
        if (input.match(/^contact$/)) return navigateToSection('contact', 'Contact');

        // About Aayush
        if (input.includes("who is aayush") || input.includes("tell me about aayush") || input.includes("aayush's intro")) {
            return `${aayushData.introduction} You can ask for more on his skills, experience, or education.`;
        }

        // Skills
        if (input.includes("skill") || input.includes("proficient") || input.includes("technologies") || input.includes("what can he do")) {
            return `Aayush's key skills include: ${aayushData.skillsSummary}. ${createNavHelper("For a detailed list, check the 'About' or 'Services' section.", "services")}`;
        }

        // Experience
        if (input.includes("experience") || input.includes("work") || input.includes("job") || input.includes("internship")) {
            return `Aayush has gained experience through: ${aayushData.experienceHighlights}. ${createNavHelper("You can find more details in the 'About' section.", "about")}`;
        }

        // Education
        if (input.includes("education") || input.includes("degree") || input.includes("study") || input.includes("college")) {
            return `Aayush holds a ${aayushData.education}. ${createNavHelper("More info is in the 'About' section.", "about")}`;
        }

        // Projects / Portfolio
        if (input.includes("project") || input.includes("portfolio") || input.includes("what has he built")) {
            let projectText = aayushData.portfolioExamples.map(p => `<li><b>${p.name}</b>: ${p.shortDesc}</li>`).join('');
            return `Some of Aayush's projects include: <ul>${projectText}</ul> ${createNavHelper("Explore his full portfolio in the 'Portfolio' section.", "portfolio")}`;
        }

        // Services
        if (input.includes("service") || input.includes("what does he offer")) {
            return `Aayush offers a range of services including: ${aayushData.servicesOverview}. ${createNavHelper("Details are available in the 'Services' section.", "services")}`;
        }

        // Contact
        if (input.includes("contact") || input.includes("email") || input.includes("phone") || input.includes("reach him") || input.includes("get in touch")) {
            return `You can contact Aayush via: <br>Email: ${aayushData.contactInfo.email} <br>Phone: ${aayushData.contactInfo.phone} <br>Website: <a href="http://${aayushData.contactInfo.website}" target="_blank">${aayushData.contactInfo.website}</a>. ${createNavHelper("Or visit the 'Contact' section.", "contact")}`;
        }

        // Thank you / Bye
        if (input.match(/\b(thanks|thank you|ok|cool|great|awesome|bye|goodbye)\b/)) {
            return "You're welcome! Let me know if there's anything else.";
        }

        // Fallback for unrecognized input
        return "I'm not sure how to help with that. Try asking about Aayush's 'skills', 'experience', 'projects', or ask to 'go to contact'.";
    }
});