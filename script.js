// AOS Init
AOS.init({
  duration: 1000,
  easing: 'ease-in-out',
  once: true
});

// Dark mode toggle with localStorage
const toggle = document.getElementById('darkModeToggle');
toggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  localStorage.setItem('theme', document.body.classList.contains('dark-mode') ? 'dark' : 'light');
});

document.addEventListener('DOMContentLoaded', () => {
  if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark-mode');
  }

  // Counter animations
  document.querySelectorAll('.counter').forEach(el => {
    const updateCount = () => {
      const target = +el.getAttribute('data-count');
      const count = +el.innerText;
      const increment = target / 100;

      if (count < target) {
        el.innerText = Math.ceil(count + increment);
        requestAnimationFrame(updateCount);
      } else {
        el.innerText = target;
      }
    };
    updateCount();
  });

  // Parallax animation using GSAP ScrollTrigger
  gsap.registerPlugin(ScrollTrigger);
  gsap.to(".parallax", {
    backgroundPosition: "50% 100%",
    ease: "none",
    scrollTrigger: {
      trigger: ".parallax",
      start: "top top",
      end: "bottom top",
      scrub: true
    }
  });
});

// Feedback form confirmation
document.getElementById('feedbackForm').addEventListener('submit', e => {
  e.preventDefault();
  e.target.reset();
  document.getElementById('confirmation').style.display = 'block';
});

