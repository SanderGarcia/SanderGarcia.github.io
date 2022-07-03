function carregar() {
  const load = document.getElementById('load');
  load.style.display = 'none';
}

function abreFechaMenu() {
  const menu = document.getElementById('menu');
  const sidebar = document.getElementsByClassName('sidebar');
  
  menu.addEventListener('click', () => {
    sidebar[0].classList.toggle('active');
  });
}
abreFechaMenu();

function ativaSidebar() {
  const sidebar = document.getElementsByClassName('sidebar');
  
  window.addEventListener('resize', () => {
    const width = window.innerWidth;
    if (width <= 950) {
      sidebar[0].classList.remove('active');
    } else {
      sidebar[0].classList.add('active');
    }
  })
}
ativaSidebar();

function tamanhoPagina() {
  const sidebar = document.getElementsByClassName('sidebar');
  const width = window.innerWidth;
  if (width <= 950) {
    sidebar[0].classList.remove('active');
  } else {
    sidebar[0].classList.add('active');
  }
}
tamanhoPagina();