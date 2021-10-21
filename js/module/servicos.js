export default class Servicos {
  constructor(dev, maintance, servicoDev, servicoManutencao) {
    this.dev = document.querySelectorAll(dev);
    this.maintance = document.querySelectorAll(maintance);
    this.servicoDev = document.querySelectorAll(servicoDev);
    this.servicoManutencao = document.querySelectorAll(servicoManutencao);

    this.handleClickDev = this.handleClickDev.bind(this);
    this.handleClickMaintance = this.handleClickMaintance.bind(this);
  }

  handleClickDev(event) {
    event.preventDefault();
    const selected = event.target.href.split('#')[1]+'content';
    const content = document.getElementById(selected);
    
    // Retirar active
    this.dev.forEach((item) => {
      item.classList.remove('active');
    })
    this.servicoDev.forEach((item) => {
      item.classList.remove('active');
    })

    event.target.classList.add('active');
    content.classList.add('active');
  }

  handleClickMaintance(event) {
    event.preventDefault();
    const selected = event.target.href.split('#')[1]+'content';
    const content = document.getElementById(selected);
    
    // Retirar active
    this.maintance.forEach((item) => {
      item.classList.remove('active');
    })
    this.servicoManutencao.forEach((item) => {
      item.classList.remove('active');
    })

    event.target.classList.add('active');
    content.classList.add('active');
  }

  adicionarEventos() {
    this.dev.forEach((devLink) => {
      devLink.addEventListener('click', this.handleClickDev);
    });

    this.maintance.forEach((maintanceLink) => {
      maintanceLink.addEventListener('click', this.handleClickMaintance);
    })
  }

  init() {
    if (this.dev && this.maintance) {
      this.adicionarEventos();
    }
    return this;
  }
}