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

function idade(ano_aniversario, mes_aniversario, dia_aniversario) {
  const campo = document.getElementById('data');
  var d = new Date,
    ano_atual = d.getFullYear(),
    mes_atual = d.getMonth() + 1,
    dia_atual = d.getDate(),

    ano_aniversario = +ano_aniversario,
    mes_aniversario = +mes_aniversario,
    dia_aniversario = +dia_aniversario,

    quantos_anos = ano_atual - ano_aniversario;

    if (mes_atual < mes_aniversario || mes_atual ==   mes_aniversario && dia_atual < dia_aniversario) {
        quantos_anos--;
    }
  const idade = quantos_anos < 0 ? 0 : quantos_anos;
  campo.innerText = idade;
}
idade(1986, 10, 30);