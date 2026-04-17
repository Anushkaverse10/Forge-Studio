const mainNav = document.getElementById('mainNav');
window.addEventListener('scroll', () => {
  if (!mainNav) return;
  mainNav.classList.toggle('scrolled', window.scrollY > 10);
});

function toggleNav() {
  const drawer = document.getElementById('navDrawer');
  if (!drawer) return;
  drawer.classList.toggle('open');
}

document.addEventListener('click', (e) => {
  const drawer  = document.getElementById('navDrawer');
  const burger  = document.getElementById('burgerBtn');
  if (!drawer || !burger) return;
  if (!drawer.contains(e.target) && !burger.contains(e.target)) {
    drawer.classList.remove('open');
  }
});

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target); 
    }
  });
}, {
  threshold:  0.1,              
  rootMargin: '0px 0px -50px 0px' 
});

document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

function handleSubmit(event) {
  event.preventDefault(); 

  const name    = document.getElementById('fullName')?.value.trim();
  const email   = document.getElementById('email')?.value.trim();
  const success = document.getElementById('formSuccess');
  const error   = document.getElementById('formError');

  success?.classList.add('hidden');
  error?.classList.add('hidden');

  if (!name || !email) {
    error?.classList.remove('hidden');
    return;
  }

  success?.classList.remove('hidden');
  event.target.reset();

  setTimeout(() => success?.classList.add('hidden'), 5000);
}
