import { randomInt, randomSign, diff } from './utils';
import Fish from './Fish';
// @ts-ignore
import cat2Png from '../images/cat2.png';

export default class Cat {
  private x: number;
  private y: number;
  private speedX: number;
  private speedY: number;

  constructor(
    private wrapper: HTMLDivElement,
    private context: CanvasRenderingContext2D,
    private size = 32,
    private img = new Image(),
    private targets: Array<Fish> = [],
  ) {
    this.x = randomInt(10, this.wrapper.offsetWidth - 20);
    this.y = randomInt(10, this.wrapper.offsetHeight - 20);

    this.changePace();

    this.img.src = cat2Png;
    this.img.onload = () => {
      setInterval(this.walk.bind(this), 30);
    };
  }

  public setTarget(target: Fish): void {
    this.targets.push(target);
    if (this.targets.length === 1) {
      this.changePace();
    }
  }

  private changePace(): void {
    if (this.targets.length !== 0) {
      this.speedX = (this.targets[0].x - this.x) / 20;
      this.speedY = (this.targets[0].y - this.y) / 20;
    } else {
      this.speedX = randomInt(2, 4) * randomSign();
      this.speedY = randomInt(2, 4) * randomSign();
    }
  }

  private walk(): void {
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

  private isFishNearby(): boolean {
    return (
      this.targets[0] &&
      diff(this.targets[0].x, this.x) < 20 &&
      diff(this.targets[0].y, this.y) < 20
    );
  }

  private eatFish(): void {
    this.targets[0].die();
    this.targets.shift();
    this.size += 2;
  }
}
