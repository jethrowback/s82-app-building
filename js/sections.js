// Highlight nav link based on section in view
const sections   = document.querySelectorAll('section');
const navLinks   = document.querySelectorAll('.navbar a');

const opts = { root: null, threshold: 0.6 };

const callback = entries => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    const id = entry.target.id;
    navLinks.forEach(link => {
      link.classList.toggle(
        'active',
        link.getAttribute('href') === `#${id}`
      );
    });
  });
};

const observer = new IntersectionObserver(callback, opts);
sections.forEach(sec => observer.observe(sec));
