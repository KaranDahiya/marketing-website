// initialize animations
AOS.init();

// smooth scroll to WORK
function scrollToWork() {
  document.querySelector('#work').scrollIntoView({ 
  behavior: 'smooth' 
});
}

// smooth scroll to PROJECTS
function scrollToProjects() {
    document.querySelector('#projects').scrollIntoView({ 
    behavior: 'smooth' 
  });
}
 
// smooth scroll to ABOUT
function scrollToAbout() {
    document.querySelector('#about').scrollIntoView({ 
    behavior: 'smooth' 
  });
}

// smooth scroll to LANDING
function scrollToLanding() {
    document.querySelector('#landing').scrollIntoView({ 
    behavior: 'smooth' 
  });
}