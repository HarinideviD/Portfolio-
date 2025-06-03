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
<script>
  // Toggle "Read more / Show less"
  document.querySelectorAll('.toggle-desc').forEach(button => {
    button.addEventListener('click', () => {
      const desc = button.closest('.description');
      const shortText = desc.querySelector('.short-text');
      const fullText = desc.querySelector('.full-text');

      if (fullText.classList.contains('hidden')) {
        fullText.classList.remove('hidden');
        shortText.style.display = 'none';
        button.textContent = 'Show less';
      } else {
        fullText.classList.add('hidden');
        shortText.style.display = 'block';
        button.textContent = 'Read more';
      }
    });
  });

  // Handle project link click
  document.querySelectorAll('.send-icon').forEach(button => {
    button.addEventListener('click', () => {
      const url = button.getAttribute('data-link');
      if (url) window.open(url, '_blank');
    });
  });


  
  
