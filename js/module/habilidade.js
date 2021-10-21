export default class Habilidade {
  constructor(icons, contents) {
    this.icons = document.querySelectorAll(icons);
    this.contents = document.querySelectorAll(contents);

    this.adicionaEventos = this.adicionaEventos.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    const target = event.target;
    const habilidade = target.getAttribute('data-habilidade');
    const pathStroke = target.querySelector('[stroke]');

    // Remove cores dos ícones
    this.icons.forEach((icon) => {
      const pathStrokeIcon = icon.querySelector('[stroke]');
      pathStrokeIcon.setAttribute('stroke', '#666463');
    })

    pathStroke.setAttribute('stroke', '#E54A0B')
  }

  adicionaEventos() {
    this.icons.forEach((icon) => {
      icon.addEventListener('click', this.handleClick);
    })
  }

  init() {
    if (this.icons && this.contents) {
      this.adicionaEventos();
    }
    return this;
  }
}