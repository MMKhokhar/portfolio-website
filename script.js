// script.js
// Purpose: Add scroll-to-top button functionality and highlight active navigation links

// Scroll-to-Top Button Logic
const scrollToTopBtn = document.getElementById('scrollToTopBtn');

// Show button after scrolling down 100px
window.onscroll = function () {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    scrollToTopBtn.style.display = "block";
  } else {
    scrollToTopBtn.style.display = "none";
  }
};

// Scroll to top when button clicked
scrollToTopBtn.addEventListener('click', function () {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

// Active Navigation Link Highlighting
const navLinks = document.querySelectorAll('.nav-list a');
const currentPage = window.location.pathname.split("/").pop();

navLinks.forEach(link => {
  if (link.getAttribute('href') === currentPage) {
    link.classList.add('active');
  }
});
