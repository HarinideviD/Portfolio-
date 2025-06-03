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
