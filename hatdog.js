// ang let ay isang variable at ang identfier ay pataas
let tumataas = document.getElementById("pataas");

window.onscroll = function() {
    scrollFunction();
};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        pataas.style.display = "block";
    } else {
        pataas.style.display = "none";
    }
}

// function para tumaas yung button
function pataasNaButton() {
    document.body.scrollTop = 0; //pang mobile
    document.documentElement.scrollTop = 0; // pang chrome
}

//para sa fade in effect
document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll(".fade-section");

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            } else {
                entry.target.classList.remove("visible");
            }
        });
    }, { threshold: 0.1 });

    sections.forEach(section => {
        observer.observe(section);
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll(".fade-section-down");

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            } else {
                entry.target.classList.remove("visible");
            }
        });
    }, { threshold: 0.1 });

    sections.forEach(section => {
        observer.observe(section);
    });
});


document.getElementById('menu-toggle').addEventListener('click', function() {
    document.getElementById('navbar').classList.toggle('active');
});

//para sa see more button
document.getElementById('seeMoreBtn').addEventListener('click', function() {
    // Select all hidden service items
    const hiddenItems = document.querySelectorAll('.service-item.hidden');

    
    hiddenItems.forEach(item => {
        item.style.display = 'block';
    });

   
    this.style.display = 'none';
});

function toggleChat() {
    const chatContainer = document.getElementById('chatContainer');
    chatContainer.style.display = chatContainer.style.display === 'none' ? 'flex' : 'none';
}

// Dataset of questions and answers
const chatDataset = [
    {
        question: "hello",
        answer: "Hello! How can I help you today?"
    },
    {
        question: "hi",
        answer: "Hello! How can I help you today"
    },
    {
        question: "how are you",
        answer: "I'm just a chatbot, but thanks for asking!"
    },
    {
        question: "what is your purpose",
        answer: "I'm here to help answer your questions."
    },
    {
        question: "goodbye",
        answer: "Goodbye! Have a great day!"
    },
    {
        question: "how much cost of making a web design",
        answer: "hello sir/maam, ahm its cost of 20$ or 1,161 in philippine peso"
    },
    {
        question: "how much cost of making a website",
        answer: "hello sir/maam, ahm its cost of 21$ or 1,219 in philippine peso"
    },
    {
        question: "how much cost of making a graphic design",
        answer: "hello sir/maam, ahm its cost of 21$ or 1,219 in philippine peso"
    },
    {
        question: "how much cost of rendering in sketch up",
        answer: "hello sir/maam, ahm its cost of 21$ or 1,219 in philippine peso"
    },
    {
        question: "how much cost of making autocad sketch",
        answer: "hello sir/maam, ahm its cost of 14$ or 812 in philippine peso"
    },
    {
        question: "do you know how to use figma",
        answer: "yes but not expert lol"
    },
    {
        question: "who are you",
        answer: "i am Markjay as Bot stupid faggots"
    },
    {
        question: "i love you",
        answer: "yuck, fck ewwww i am markjay as bot so i don't have feelings for you but disgusting anyway"
    },
    {
        question: "how much cost of making autocad sketch",
        answer: "hello sir/maam, ahm its cost of 14$ or 812 in philippine peso"
    },
    {
        question: "kupal ka ba boss",
        answer: "yung bot hindi, pero ewan ko sa kupal kong amo ask mo"
    },
    {
        question: "mahal kita",
        answer: "yuck, fck ewwww i am markjay as bot so i don't have feelings for you but disgusting anyway"
    },
    {
        question: "may service kadin bang chupa",
        answer: "yuck kadiri umalis ka nga!"
    },
    {
        question: "pogi ba si markjay",
        answer: "sobra hays nakakainlove yung taong yon sis"
    },
    {
        question: "suntukan",
        answer: "luh, bobo lang sir? makikipag suntukan ka sa generative bot like me, damn stupid ass human"
    },
    {
        question: "pakiss nga",
        answer: "baho naman ng bunganga mo sir nag toothbrush kanaba?"
    },
    {
        question: "online ka pa",
        answer: "24/7 'tong online boss"
    },
    {
        question: "1+1",
        answer: "2 bobo"
    },
    {
        question: "pogi ba si resty",
        answer: "anyway wala pa akong ginagawang reviewers"
    },
    {
        question: "Do you have a Girlfriend?",
        answer: "My Master Markjay is Single"
    },
    {
        question: " ",
        answer: ""
    }
    
];

function sendMessage() {
    const userInput = document.getElementById('userInput');
    const chatMessages = document.getElementById('chatMessages');
    
    // Add user message
    if (userInput.value.trim() !== '') {
        const userMessage = document.createElement('div');
        userMessage.className = 'message';
        userMessage.textContent = userInput.value;
        chatMessages.appendChild(userMessage);

        // Add bot response
        const botResponse = document.createElement('div');
        botResponse.className = 'message bot-message';
        
        // Find matching answer in dataset
        const foundAnswer = chatDataset.find(item => 
            userInput.value.toLowerCase().trim().includes(item.question.toLowerCase())
        );

        botResponse.textContent = foundAnswer ? foundAnswer.answer : 
            "I'm sorry, I don't understand that question all of the question have a question mark dude. Can you please rephrase it?";
        
        chatMessages.appendChild(botResponse);
        userInput.value = '';

        // Scroll to bottom
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }
}

// Handle Enter key
document.getElementById('userInput').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        sendMessage();
    }
});

function toggleSkills(skillId) {
    const skillsContainer = document.getElementById(skillId);
    skillsContainer.classList.toggle("open");
}

