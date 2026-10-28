const menuToggle = document.getElementById('menuToggle');
const nav = document.getElementById('nav');
menuToggle?.addEventListener('click', () => nav.classList.toggle('open'));
nav?.querySelectorAll('a').forEach(link => link.addEventListener('click', () => nav.classList.remove('open')));

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

const sections = [...document.querySelectorAll('main section[id]')];
const navLinks = [...document.querySelectorAll('#nav a')];
window.addEventListener('scroll', () => {
  let current = 'home';
  sections.forEach(section => {
    if (window.scrollY >= section.offsetTop - 130) current = section.id;
  });
  navLinks.forEach(link => link.classList.toggle('active', link.getAttribute('href') === `#${current}`));
}, { passive: true });

document.getElementById('year').textContent = new Date().getFullYear();
