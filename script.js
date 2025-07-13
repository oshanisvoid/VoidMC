// Load particles.js background
window.addEventListener('DOMContentLoaded', () => {
  tsParticles.load('particles-js', {
    fullScreen: { enable: false },
    particles: {
      number: { value: 60 },
      color: { value: '#facc15' },
      size: { value: 2.5 },
      move: { enable: true, speed: 0.5 },
      opacity: { value: 0.5 },
      links: {
        enable: true,
        distance: 100,
        color: '#facc15',
        opacity: 0.4
      }
    },
    background: { color: 'transparent' }
  });
});
