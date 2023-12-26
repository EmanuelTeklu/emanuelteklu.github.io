// Redirect to homepage on name click
const nameEl = document.getElementById('name');
nameEl.addEventListener('click', () => {
  window.location.href = '/'; // Replace '/' with your homepage URL if different
});

// Disable scrolling on the entire page
window.addEventListener('scroll', () => {
  window.scrollTo(0, 0);
});
