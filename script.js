const menuBtn = document.getElementById('menuBtn');
const nav = document.getElementById('nav');
const body = document.body;

menuBtn.addEventListener('click', () => {
  nav.classList.toggle('active');
  menuBtn.classList.toggle('open');

  // Disable scrolling when nav is active
  if(nav.classList.contains('active')){
    body.style.overflow = 'hidden';
  } else {
    body.style.overflow = '';
  }
});
