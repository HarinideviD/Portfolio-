// Hide loader and show main content on page load
window.addEventListener("load", function() {
  const loader = document.getElementById("loading-screen");
  const mainContent = document.getElementById("main-content");
  if (loader) loader.style.display = "none";
  if (mainContent) mainContent.style.display = "block";
});

// Intersection Observer for revealing sections
const sections = document.querySelectorAll('.section');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, {
  threshold: 0.2
});
sections.forEach(section => {
  observer.observe(section);
});

// Typed.js initialization
if (typeof Typed !== "undefined") {
  new Typed('.text', {
    strings: ['Oracle APEX Developer', 'Full Stack Developer', 'Web Designer', 'Ui/Ux Designer'],
    typeSpeed: 100,
    loop: true
  });
}
var tablinks= document.getElementsByClassName("tab-links");
  var tabcontents = document.getElementsByClassName("tab-contents");

  function opentab(tabname){
    for(tablink of tablinks){
      tablink.classList.remove("active-link");
    }
    for(tabcontent of tabcontents){
      tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");

  }


  document.querySelectorAll('.like-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      let count = parseInt(btn.textContent.replace(/\D/g, ''));
      btn.textContent = `❤ ${count + 1}`;
    });
  });

  document.getElementById("contact-form").addEventListener("submit", function () {
    const status = document.getElementById("form-status");
    status.textContent = "Sending...";
  });

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".toggle-desc").forEach(btn => {
    btn.addEventListener("click", () => {
      const descriptionContainer = btn.closest('.description');
      if (!descriptionContainer) return;

      const shortText = descriptionContainer.querySelector('.short-text');
      const fullText = descriptionContainer.querySelector('.full-text');

      if (!shortText || !fullText) return;

      if (fullText.classList.contains('hidden')) {
        fullText.classList.remove('hidden');
        shortText.style.display = 'none';
        btn.textContent = 'Show less';
      } else {
        fullText.classList.add('hidden');
        shortText.style.display = 'block';
        btn.textContent = 'Read more';
      }
    });
  });
});

// Redirect when send-icon is clicked
document.querySelectorAll(".send-icon").forEach(btn => {
  btn.addEventListener("click", () => {
    const link = btn.getAttribute("data-link");
    if (link) {
      window.open(link, "_blank");
    }
  });
});
let responses = {};

// Load responses from JSON
fetch('responses.json')
  .then(res => res.json())
  .then(data => responses = data)
  .catch(err => console.error("Failed to load chatbot responses:", err));

// Elements
const chatToggle = document.getElementById("chat-toggle");
const chatbox = document.getElementById("chatbot");
const chatClose = document.getElementById("chat-close");

// Toggle Chat (open/close with GSAP)
chatToggle.addEventListener("click", () => {
  if (chatbox.classList.contains("hidden")) {
    chatbox.classList.remove("hidden");
    gsap.fromTo(chatbox, { y: 50, opacity: 0 }, { y: 0, opacity: 1, duration: 0.4 });
  } else {
    gsap.to(chatbox, {
      y: 50,
      opacity: 0,
      duration: 0.4,
      onComplete: () => chatbox.classList.add("hidden")
    });
  }
});

// Close button (inside header)
chatClose?.addEventListener("click", () => {
  gsap.to(chatbox, {
    y: 50,
    opacity: 0,
    duration: 0.4,
    onComplete: () => chatbox.classList.add("hidden")
  });
});

// Send user message
function sendMessage() {
  const input = document.getElementById('user-input');
  const message = input.value.trim();
  if (!message) return;

  appendMessage("You", message);
  input.value = "";

  const reply = getReply(message.toLowerCase());
  setTimeout(() => {
    appendMessage("Bot", reply);
    speak(reply);
  }, 500);
}

// Display message in chat window
function appendMessage(sender, message) {
  const chatWindow = document.getElementById("chat-window");
  const msg = document.createElement("div");
  msg.className = sender === "You" ? "user-message" : "bot-message";
  msg.innerHTML = `<strong>${sender}:</strong> ${message}`;
  chatWindow.appendChild(msg);
  chatWindow.scrollTop = chatWindow.scrollHeight;
}

// Get reply from loaded JSON
function getReply(input) {
  for (let key in responses) {
    if (input.includes(key)) {
      return responses[key];
    }
  }
  return "I'm not sure how to answer that yet. Try asking about my skills, resume, or projects.";
}

// Speak the bot's reply
function speak(text) {
  const utterance = new SpeechSynthesisUtterance(text.replace(/<[^>]*>?/gm, '')); // Remove HTML
  utterance.lang = "en-US";
  speechSynthesis.speak(utterance);
}

// Suggested buttons (pre-fills input + sends message)
function suggest(text) {
  document.getElementById('user-input').value = text;
  sendMessage();
}








