window.addEventListener("load", function() {
  // Hide loader
  document.getElementById("loading-screen").style.display = "none";
  // Show main content
  document.getElementById("main-content").style.display = "block";
});
const sections = document.querySelectorAll('.section');

const observer = new IntersectionObserver(entries => {
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


var typed = new Typed('.text', {
    strings: ['Oracle APEX Developer','Full Stack Developer', 'Web Designer','Ui/Ux Designer'],
    typeSpeed: 100,
    
    loop:true
  });

  document.querySelectorAll(".read-more").forEach((btn) => {
    btn.addEventListener("click", function () {
      const desc = this.previousElementSibling;
      if (this.textContent === "Read more") {
        desc.textContent = desc.dataset.full;
        this.textContent = "Show less";
      } else {
        desc.textContent = desc.dataset.short;
        this.textContent = "Read more";
      }
    });
  });

  // Store short and full descriptions
  document.querySelectorAll(".project-description").forEach((desc) => {
    const full = desc.textContent.trim();
    const short = full.slice(0, 100) + "...";
    desc.dataset.full = full;
    desc.dataset.short = short;
    desc.textContent = short;
  });

  // Redirect on send icon click
  document.querySelectorAll(".send-icon").forEach((btn) => {
    btn.addEventListener("click", function () {
      const link = this.getAttribute("data-link");
      if (link) window.open(link, "_blank");
    });
  });


  
  
