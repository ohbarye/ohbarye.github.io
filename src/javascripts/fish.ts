// @ts-ignore
import fish from '../images/fish.png';

export default class Fish {
  private x: number;
  private y: number;

  constructor(
    private e: any,
    private context: CanvasRenderingContext2D,
    private size = 32,
    private img = new Image()) {

    this.img.src = fish;

    const rect = e.target.getBoundingClientRect();
    this.x = e.clientX - rect.left;
    this.y = e.clientY - rect.top;

    this.context.drawImage(this.img, this.x, this.y, this.size, this.size);
  }

  public die(): void {
    this.context.clearRect(this.x, this.y, this.size, this.size);
  }
}
