const nav = document.getElementById('siteNav');
window.addEventListener('scroll', () => {
  if (!nav) return;
  nav.classList.toggle('scrolled', window.scrollY > 12);
});

function openMenu() {
  const panel = document.getElementById('mobilePanel');
  if (panel) panel.classList.add('open');
  document.body.style.overflow = 'hidden'; 
}
function closeMenu() {
  const panel = document.getElementById('mobilePanel');
  if (panel) panel.classList.remove('open');
  document.body.style.overflow = '';
}

const io = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
      io.unobserve(e.target);
    }
  });
}, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

document.querySelectorAll('.reveal').forEach(el => io.observe(el));

function toggleSvc(headEl) {
  const block    = headEl.closest('.svc-block');
  const isOpen   = block.classList.contains('open');
  const allBlocks = document.querySelectorAll('.svc-block');

  allBlocks.forEach(b => b.classList.remove('open'));

  if (!isOpen) block.classList.add('open');
}

function handleSubmit(e) {
  e.preventDefault(); 

  const name    = document.getElementById('fullName')?.value.trim();
  const email   = document.getElementById('emailAddr')?.value.trim();
  const success = document.getElementById('formSuccess');
  const error   = document.getElementById('formError');

  success?.classList.add('hidden');
  error?.classList.add('hidden');

  if (!name || !email) {
    error?.classList.remove('hidden');
    return;
  }

  success?.classList.remove('hidden');
  e.target.reset();
  setTimeout(() => success?.classList.add('hidden'), 6000);
}