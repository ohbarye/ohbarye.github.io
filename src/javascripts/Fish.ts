// @ts-ignore
import fishPng from '../images/fish.png';

export default class Fish {
  public x: number;
  public y: number;

  constructor(
    private e: MouseEvent,
    private context: CanvasRenderingContext2D,
    private size = 32,
    private img = new Image(),
  ) {
    const rect = (<HTMLElement>e.target).getBoundingClientRect();
    this.x = e.clientX - rect.left;
    this.y = e.clientY - rect.top;

    this.img.onload = () => {
      this.context.drawImage(this.img, this.x, this.y, this.size, this.size);
    };

    this.img.src = fishPng;
  }

  public die(): void {
    this.context.clearRect(this.x, this.y, this.size, this.size);
  }
}
