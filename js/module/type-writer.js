export default class TypeWriter {
  constructor(element) {
    this.element = document.querySelector(element);
    this.strings = [
      'Desenvolvimento de Sites',
      'Ui / Ux Design',
      'E-Commerce',
      'Sistemas Web',
      'Aplicativos Mobile',
    ];
    this.index = 0;

    this.typeWriter = this.typeWriter.bind(this);
    this.definirIndex = this.definirIndex.bind(this);
  }

  typeWriter() {
    const time = (this.strings[this.index].length) * 100 + 500;

    let textoArray = this.strings[this.index].split('');
    this.element.innerHTML = '';

    for (let i = 0; i < textoArray.length; i++) {
      setTimeout(() => this.element.innerHTML += textoArray[i], 75 * i);
    }

    setTimeout(() => {
      this.definirIndex();
    }, time);
  }

  definirIndex() {
    const lastIndex = this.strings.length - 1;

    if (this.index === 4) {
      this.index = 0;
    } else {
      this.index++
    }

    this.typeWriter();
  }

  init() {
    if (this.element) {
      this.typeWriter();
    }
    return this;
  }
}