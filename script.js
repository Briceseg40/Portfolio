  // CURSOR
  const cursor = document.getElementById('cursor');
  const ring = document.getElementById('cursorRing');
  let mx = 0, my = 0, rx = 0, ry = 0;
  document.addEventListener('mousemove', e => { mx = e.clientX; my = e.clientY; });
  function animCursor() {
    cursor.style.left = mx + 'px'; cursor.style.top = my + 'px';
    rx += (mx - rx) * 0.12; ry += (my - ry) * 0.12;
    ring.style.left = rx + 'px'; ring.style.top = ry + 'px';
    requestAnimationFrame(animCursor);
  }
  animCursor();

  // NAV scroll
  const nav = document.getElementById('nav');
  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 50);
  });

  // INTERSECTION OBSERVER
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
      }
    });
  }, { threshold: 0.15 });

  document.querySelectorAll('.reveal, .timeline-item, .edu-card, .project-card').forEach(el => io.observe(el));

  // Staggered delays for grids
  document.querySelectorAll('.skills-grid .skill-item').forEach((el, i) => {
    el.style.transitionDelay = (i * 0.05) + 's';
  });
  document.querySelectorAll('.edu-grid .edu-card').forEach((el, i) => {
    el.style.transitionDelay = (i * 0.1) + 's';
  });
  document.querySelectorAll('.projects-grid .project-card').forEach((el, i) => {
    el.style.transitionDelay = (i * 0.1) + 's';
  });
  document.querySelectorAll('.timeline-item').forEach((el, i) => {
    el.style.transitionDelay = (i * 0.15) + 's';
  });
  document.querySelectorAll('.hobbies-grid .hobby-card').forEach((el, i) => {
    el.style.transitionDelay = (i * 0.08) + 's';
  });

  // Smooth scroll
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const target = document.querySelector(a.getAttribute('href'));
      if (target) { e.preventDefault(); target.scrollIntoView({ behavior: 'smooth' }); }
    });
  });

  // Parallax on hero glow
  document.addEventListener('mousemove', e => {
    const x = (e.clientX / window.innerWidth - 0.5) * 30;
    const y = (e.clientY / window.innerHeight - 0.5) * 30;
    document.querySelector('.hero-glow').style.transform = `translate(${x}px, ${y}px)`;
    document.querySelector('.hero-glow2').style.transform = `translate(${-x}px, ${-y}px)`;
  });
