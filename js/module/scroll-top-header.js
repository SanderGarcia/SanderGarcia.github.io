import debounce from './debounce.js';

export default class ScrollTopHeader {
  constructor(banner, header) {
    this.banner = document.querySelector(banner);
    this.header = document.querySelector(header);

    this.handleScroll = debounce(this.handleScroll.bind(this), 10);
  }

  handleScroll() {
    const distancia = window.pageYOffset;
    if (distancia > 90) {
      this.header.classList.add('active');
    } else if (distancia <= 90) {
      this.header.classList.remove('active');
    }
  }

  addScrollEvent() {
    window.addEventListener('scroll', this.handleScroll);
  }

  init() {
    if (this.banner) {
      this.addScrollEvent();
    }
    return this;
  }
}