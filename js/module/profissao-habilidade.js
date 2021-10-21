export default class ProfissaoHabilidade {
  constructor(profissoes, boxIcon, boxIconDiv) {
    this.profissoes = document.querySelectorAll(profissoes);
    this.boxIcon = document.querySelector(boxIcon);
    this.boxIconDiv = document.querySelectorAll(boxIconDiv);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    event.preventDefault();
    const target = event.target;
    const idTarget = target.id;
    const content = idTarget + 'content';
    const elementBox = document.getElementById(content)

    this.profissoes.forEach((profissao) => {
      profissao.classList.remove('active');
    });
    target.classList.add('active');

    this.boxIconDiv.forEach((box) => {
      box.classList.remove('active');
    })
    elementBox.classList.add('active');
  }

  adicionaEventos() {
    this.profissoes.forEach((profissao) => {
      profissao.addEventListener('click', this.handleClick);
    })
  }

  init() {
    if (this.profissoes) {
      this.adicionaEventos();
    }
    return this;
  }
}