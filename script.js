// ===============================
// ELEMENTS
// ===============================
const menuBtn = document.getElementById('menuBtn');
const nav = document.getElementById('nav');
const navLinks = document.querySelectorAll('#nav a');
const body = document.body;

// ===============================
// OPEN / CLOSE MENU
// ===============================
menuBtn.addEventListener('click', () => {
  nav.classList.toggle('active');
  menuBtn.classList.toggle('open');

  // Disable scrolling when nav is active
  body.style.overflow = nav.classList.contains('active') ? 'hidden' : '';
});

// ===============================
// CLOSE MENU WHEN LINK CLICKED
// ===============================
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    nav.classList.remove('active');
    menuBtn.classList.remove('open');

    // Re-enable scrolling
    body.style.overflow = '';
  });
});

// ===============================
// SCROLL FADE EFFECT FOR MOBILE MENU (optional)
// ===============================
let lastScroll = 0;
window.addEventListener('scroll', () => {
  if (!nav.classList.contains('active')) return;

  const currentScroll = window.scrollY;
  const links = document.querySelector('#nav ul');

  if (currentScroll > lastScroll) {
    links.style.opacity = '0.4';
    links.style.transform = 'translateY(-10px)';
  } else {
    links.style.opacity = '1';
    links.style.transform = 'translateY(0px)';
  }

  lastScroll = currentScroll;
});

// ===============================
// HIGHLIGHT CURRENT SECTION (single-page demo using hash links)
// ===============================
const sections = document.querySelectorAll('section[id]');

function highlightCurrentSection() {
  let scrollY = window.scrollY;

  sections.forEach(section => {
    const sectionHeight = section.offsetHeight;
    const sectionTop = section.offsetTop - 50; // offset for padding/header
    const sectionId = section.getAttribute('id');

    if(scrollY >= sectionTop && scrollY < sectionTop + sectionHeight){
      navLinks.forEach(link => {
        link.classList.remove('active');
        if(link.getAttribute('href') === `#${sectionId}`){
          link.classList.add('active');
        }
      });
    }
  });
}

window.addEventListener('scroll', highlightCurrentSection);
