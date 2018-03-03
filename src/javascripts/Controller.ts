import Cat from './Cat';
import Fish from './Fish';

export default class Controller {
  private canvas: HTMLCanvasElement;
  private context: CanvasRenderingContext2D;
  private wrapper: HTMLDivElement;
  private cat: Cat;

  constructor() {
    this.canvas = <HTMLCanvasElement>document.getElementById('my-canvas');
    if (!this.canvas.getContext) return;

    this.context = <CanvasRenderingContext2D>this.canvas.getContext('2d');
    this.wrapper = <HTMLDivElement>document.getElementById('canvas-wrapper');
    this.canvas.setAttribute('width', `${this.wrapper.offsetWidth}`);
    this.canvas.setAttribute('height', `${this.wrapper.offsetHeight}`);
  }

  public start(): void {
    this.cat = new Cat(this.wrapper, this.context);
    this.wrapper.onclick = e => this.putFish(e);
  }

  private putFish(e: MouseEvent): void {
    const newFish: Fish = new Fish(e, this.context);
    this.cat.setTarget(newFish);
  }
}
