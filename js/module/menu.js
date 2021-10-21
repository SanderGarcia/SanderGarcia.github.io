export default class Menu {
  constructor(btnMenu, menu, closeMenu, linksMenu) {
    this.btnMenu = document.querySelector(btnMenu);
    this.menu = document.querySelector(menu);
    this.closeMenu = document.querySelector(closeMenu);
    this.linksMenu = document.querySelectorAll(linksMenu);

    this.abreMenu = this.abreMenu.bind(this);
    this.fechaMenu = this.fechaMenu.bind(this);
  }

  fechaMenu(event) {
    event.preventDefault();
    this.menu.classList.remove('active');
  }

  abreMenu(event) {
    event.preventDefault();
    this.menu.classList.add('active');
  }

  adicionaEventos() {
    this.btnMenu.addEventListener('click', this.abreMenu);
    this.closeMenu.addEventListener('click', this.fechaMenu);
    this.linksMenu.forEach((link) => {
      link.addEventListener('click',this.fechaMenu);
    });
  }

  init() {
    if (this.btnMenu && this.menu && this.closeMenu && this.linksMenu) {
      this.adicionaEventos();
    }
    return this;
  }
}