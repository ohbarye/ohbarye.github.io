import { randomInt, randomSign, diff } from './utils'
import cat2 from '../images/cat2.png';

export default class Cat {
  constructor(wrapper, context) {
    this.wrapper = wrapper;
    this.context = context;
    this.size = 32;
    this.img = new Image();
    this.img.src = cat2;

    this.x = randomInt(10, this.wrapper.offsetWidth - 20);
    this.y = randomInt(10, this.wrapper.offsetHeight - 20);

    this.fishes = [];

    this.changePace();

    this.img.onload = () => {
      setInterval(this.walk.bind(this), 30);
    }
  }

  setFish(fish) {
    this.fishes.push(fish);
    if (this.fishes.length == 1) {
      this.changePace();
    }
  }

  changePace() {
    if (this.fishes.length != 0) {
      this.speedX = (this.fishes[0].x - this.x) / 20;
      this.speedY = (this.fishes[0].y - this.y) / 20;
    } else {
      this.speedX = randomInt(2, 4) * randomSign();
      this.speedY = randomInt(2, 4) * randomSign();
    }
  }
  
  walk() {
    if (this.isFishNearby()) {
      this.eatFish();
      this.changePace();
    }

    this.context.clearRect(this.x, this.y, this.size, this.size);

    this.x += this.speedX;
    this.y += this.speedY;

    if (this.x < 0 || this.x > this.wrapper.offsetWidth) {
      this.speedX *= -1;
    }

    if (this.y < 0 || this.y > this.wrapper.offsetHeight) {
      this.speedY *= -1;
    }

    this.context.drawImage(this.img, this.x, this.y, this.size, this.size);
  }

  isFishNearby() {
    return this.fishes[0]
      && (diff(this.fishes[0].x, this.x) < 20)
      && (diff(this.fishes[0].y, this.y) < 20)
  }

  eatFish() {
    this.fishes[0].die();
    this.fishes.shift();
    this.size += 2;
  }
}
