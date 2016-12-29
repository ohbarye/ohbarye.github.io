import { getRandomInt, sign } from './utils'
import Fish from './fish'
import cat2 from '../images/cat2.png';

export default class Controller {
  constructor() {
    this.canvas = document.getElementById('my-canvas');
    if (!this.canvas.getContext) { return }
    this.wrapper = document.getElementById('canvas-wrapper');
    this.context = this.canvas.getContext('2d');

    this.canvas.setAttribute('width', this.wrapper.offsetWidth);
    this.canvas.setAttribute('height', this.wrapper.offsetHeight);

    this.speedX;
    this.speedY;
    this.catSize = 32;
    this.positionX = getRandomInt(10, 200);
    this.positionY = getRandomInt(10, 50);
    this.catImg = new Image();
    this.catImg.src = cat2;

    this.fish;

    this.changeSpeed(2, 4);
  }

  changeSpeed(from, to) {
    this.speedX = this.randomSpeed(from, to);
    this.speedY = this.randomSpeed(from, to);
  }

  randomSpeed(from, to) {
    return getRandomInt(from, to) * sign();
  }

  start() {
    if (!this.canvas.getContext) { return }

    this.positionX = getRandomInt(10, this.wrapper.offsetWidth - 20);
    this.positionY = getRandomInt(10, this.wrapper.offsetHeight - 20);

    this.catImg.onload = () => {
      setInterval(this.draw.bind(this), 30);
    }

    this.wrapper.addEventListener('click', (e) => {
      if (this.fish) { return }

      this.putFish(e);

      this.speedX = (this.fish.x - this.positionX) / 10;
      this.speedY = (this.fish.y - this.positionY) / 10;
    }, false);
  }

  putFish(e) {
    this.fish = new Fish(e);
    this.context.drawImage(this.fish.img, this.fish.x, this.fish.y, this.fish.size, this.fish.size);
  }

  removeFish(e) {
    this.context.clearRect(this.fish.x, this.fish.y, this.fish.size, this.fish.size);
    this.fish = null;
  }

  draw() {
    if (this.fish && (Math.abs(this.fish.x - this.positionX) < 20) && (Math.abs(this.fish.y - this.positionY) < 20)) {
      this.catSize += 2;
      this.removeFish();
      this.changeSpeed(2, 4);
    }

    this.context.globalCompositeOperation = "source-over";
    this.context.fillStyle = "rgba(8,8,12,.2)";
    this.context.globalCompositeOperation = "lighter";

    // Remove a previous cat
    this.context.clearRect(this.positionX, this.positionY, this.catSize, this.catSize);

    this.positionX += this.speedX;
    this.positionY += this.speedY;

    if (this.positionX < 0 || this.positionX > this.canvas.width) {
      this.speedX *= -1;
    }

    if (this.positionY < 0 || this.positionY > this.canvas.height) {
      this.speedY *= -1;
    }

    this.context.drawImage(this.catImg, this.positionX, this.positionY, this.catSize, this.catSize);
  }
}
