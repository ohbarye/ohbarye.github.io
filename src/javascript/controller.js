import { getRandomInt, sign } from './utils'
import cat2 from '../images/cat2.png';
import fish from '../images/fish.png';

export default class Controller {
  constructor() {
    this.speedX;
    this.speedY;
    this.color;
    this.canvas = document.getElementById('my-canvas');
    this.context;
    this.imgSize = 32;
    this.catSize = this.imgSize;
    this.positionX = getRandomInt(10, 200);
    this.positionY = getRandomInt(10, 50);
    this.catImg = new Image();
    this.catImg.src = cat2;
    this.fishImg = new Image();
    this.fishImg.src = fish;
    this.fishExist = false;
    this.fishX;
    this.fishY;

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
    if (this.canvas.getContext) {
      const wrapper = document.getElementById('canvas-wrapper');
      this.canvas.setAttribute('width', wrapper.offsetWidth);
      this.canvas.setAttribute('height', wrapper.offsetHeight);

      this.context = this.canvas.getContext('2d');

      this.positionX = getRandomInt(10, wrapper.offsetWidth - 20);
      this.positionY = getRandomInt(10, wrapper.offsetHeight - 20);

      this.catImg.onload = () => {
        setInterval(this.draw.bind(this), 30);
      }

      this.fishImg.onload = () => {
        wrapper.addEventListener('click', (e) => {
          if (this.fishExist) {
            return
          }

          this.fishExist = true;
          var rect = e.target.getBoundingClientRect();
          this.fishX = e.clientX - rect.left;
          this.fishY = e.clientY - rect.top;

          this.context.drawImage(this.fishImg, this.fishX, this.fishY, this.imgSize, this.imgSize);

          this.speedX = (this.fishX - this.positionX) / 10;
          this.speedY = (this.fishY - this.positionY) / 10;
        }, false);
      }
    }
  }

  draw() {
    if (this.fishExist && (Math.abs(this.fishX - this.positionX) < this.imgSize) && (Math.abs(this.fishY - this.positionY) < this.imgSize)) {
      this.context.clearRect(this.fishX, this.fishY, this.imgSize, this.imgSize);
      this.fishExist = false;
      this.fishX = undefined;
      this.fishY = undefined;
      this.catSize += 4;
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
