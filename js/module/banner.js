export default class Banner {
  constructor(banner, circleTop, circleBottom) {
    this.banner = document.querySelector(banner);
    this.circleTop = document.querySelector(circleTop);
    this.circleBottom = document.querySelector(circleBottom);

    this.handleMove = this.handleMove.bind(this);
    this.handleMoveOver = this.handleMoveOver.bind(this);
  }

  handleMove() {
    this.circleTop.classList.add('active');
    this.circleBottom.classList.add('active');
  }

  handleMoveOver() {
    this.circleTop.classList.remove('active');
    this.circleBottom.classList.remove('active');
  }

  addEvent() {
    this.banner.addEventListener('mouseover', this.handleMove);
    this.banner.addEventListener('mouseleave', this.handleMoveOver);
  }

  init() {
    if (this.banner) {
      this.addEvent();
    }
    return this;
  }
}