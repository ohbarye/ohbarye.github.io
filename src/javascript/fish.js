import fish from '../images/fish.png';

export default class Fish {
  constructor(e, context) {
    this.context = context;
    this.size = 32;
    this.img = new Image();
    this.img.src = fish;

    const rect = e.target.getBoundingClientRect();
    this.x = e.clientX - rect.left;
    this.y = e.clientY - rect.top;

    this.context.drawImage(this.img, this.x, this.y, this.size, this.size);
  }

  die() {
    this.context.clearRect(this.x, this.y, this.size, this.size);
    return null;
  }
}
