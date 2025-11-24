document.addEventListener('DOMContentLoaded',()=> {
  const btn = document.querySelector('.menu-btn');
  const nav = document.querySelector('.mobile-nav');
  if (!btn || !nav) return;
  btn.addEventListener('click', ()=>{
    nav.classList.toggle('open');
    btn.setAttribute('aria-expanded', nav.classList.contains('open'));
  });
});
