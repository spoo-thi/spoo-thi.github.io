const menu = document.getElementById('menu');
const links = document.getElementById('links');
menu.addEventListener('click', () => links.classList.toggle('open'));
links.querySelectorAll('a').forEach(a => a.addEventListener('click', () => links.classList.remove('open')));
document.getElementById('year').textContent = new Date().getFullYear();
document.getElementById('copy').addEventListener('click', async () => {
  const email = 'patilspoorthi043@gmail.com';
  const feedback = document.getElementById('feedback');
  try {
    await navigator.clipboard.writeText(email);
    feedback.textContent = 'EMAIL COPIED — TALK SOON ✳';
  } catch {
    window.location.href = 'mailto:' + email;
    feedback.textContent = 'OPENING YOUR EMAIL APP…';
  }
});