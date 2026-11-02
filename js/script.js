const body = document.body;
const toggle = document.getElementById('menuToggle');
const close = document.getElementById('menuClose');
const backdrop = document.getElementById('menuBackdrop');
const menu = document.getElementById('sideMenu');

function openMenu(){
  body.classList.add('menu-open');
  toggle.setAttribute('aria-expanded','true');
  toggle.setAttribute('aria-label','Fechar menu');
}
function closeMenu(){
  body.classList.remove('menu-open');
  toggle.setAttribute('aria-expanded','false');
  toggle.setAttribute('aria-label','Abrir menu');
}
toggle.addEventListener('click', () => body.classList.contains('menu-open') ? closeMenu() : openMenu());
close.addEventListener('click', closeMenu);
backdrop.addEventListener('click', closeMenu);
menu.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
document.addEventListener('keydown', event => { if(event.key === 'Escape') closeMenu(); });
document.getElementById('year').textContent = new Date().getFullYear();
