window.addEventListener("load", function() {
  // Hide loader
  document.getElementById("loading-screen").style.display = "none";
  // Show main content
  document.getElementById("main-content").style.display = "block";
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
  
  
