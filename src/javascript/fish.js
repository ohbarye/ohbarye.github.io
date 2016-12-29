import fish from '../images/fish.png';

export default class Fish {
  constructor(e) {
    this.size = 32;
    this.img = new Image();
    this.img.src = fish;

    const rect = e.target.getBoundingClientRect();
    this.x = e.clientX - rect.left;
    this.y = e.clientY - rect.top;
  }
}
