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

fetch('responses.json')
  .then(res => res.json())
  .then(data => responses = data);

document.getElementById("chat-toggle").addEventListener("click", () => {
  const chat = document.getElementById("chatbot");
  if (chat.style.display === "block") {
    gsap.to(chat, { y: 50, opacity: 0, duration: 0.4, onComplete: () => chat.style.display = "none" });
  } else {
    chat.style.display = "block";
    gsap.fromTo(chat, { y: 50, opacity: 0 }, { y: 0, opacity: 1, duration: 0.4 });
  }
});

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

function appendMessage(sender, message) {
  const chatWindow = document.getElementById("chat-window");
  const msg = document.createElement("div");
  msg.innerHTML = `<strong>${sender}:</strong> ${message}`;
  chatWindow.appendChild(msg);
  chatWindow.scrollTop = chatWindow.scrollHeight;
}

function getReply(input) {
  for (let key in responses) {
    if (input.includes(key)) {
      return responses[key];
    }
  }
  return "I'm not sure how to answer that yet!";
}
 function getBotResponse(input) {
    if (input.toLowerCase().includes('resume')) {
      return `You can view or download my resume below:<br/>
      <a href="assets/resume.pdf" target="_blank" class="chat-link">📄 View Resume</a><br/>
      <a href="assets/resume.pdf" download class="chat-link">⬇️ Download Resume</a>`;
    }

    return "I'm not sure how to answer that yet. Try asking about my projects or skills!";
  }

function speak(text) {
  const speech = new SpeechSynthesisUtterance(text);
  speech.lang = "en-US";
  speechSynthesis.speak(speech);
}
function suggest(text) {
  document.getElementById('user-input').value = text;
  sendMessage();
}

const toggleBtn = document.getElementById("chat-toggle");
const chatbox = document.getElementById("chatbot");

toggleBtn.addEventListener("click", () => {
  if (chatbox.classList.contains("hidden")) {
    chatbox.classList.remove("hidden");
  } else {
    chatbox.classList.add("hidden");
  }
});





