window.addEventListener('scroll', function() {
  var nav = document.getElementById('navbar');
  if (!nav) return;
  nav.classList.toggle('scrolled', window.scrollY > 10);
});

function toggleNav() {
  var nav = document.getElementById('mobileNav');
  if (!nav) return;
  nav.classList.toggle('open');
}

document.addEventListener('click', function(e) {
  var nav    = document.getElementById('mobileNav');
  var burger = document.getElementById('burger');
  if (!nav || !burger) return;
  if (!nav.contains(e.target) && !burger.contains(e.target)) {
    nav.classList.remove('open');
  }
});

var observer = new IntersectionObserver(function(entries) {
  entries.forEach(function(entry) {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

window.addEventListener('DOMContentLoaded', function() {
  var items = document.querySelectorAll('.toolkit-card, .case-item, .cs-row, .svc-block, .stat-box, .info-block');
  items.forEach(function(el) {
    el.style.opacity = '0';
    el.style.transform = 'translateY(24px)';
    el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    observer.observe(el);
  });
});

function handleSubmit(e) {
  e.preventDefault();
  var name    = document.getElementById('fullName').value.trim();
  var email   = document.getElementById('emailAddr').value.trim();
  var success = document.getElementById('formSuccess');
  if (!name || !email) return;
  success.classList.remove('hidden');
  e.target.reset();
  setTimeout(function() { success.classList.add('hidden'); }, 5000);
}
