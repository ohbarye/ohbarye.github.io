import Cat from './Cat';
import Fish from './Fish';

export default class Controller {
  private context: CanvasRenderingContext2D;
  private cat: Cat;

  static start(canvas: HTMLCanvasElement, wrapper: HTMLDivElement): void {
    new Controller(canvas, wrapper).start();
  }

  constructor(canvas: HTMLCanvasElement, private wrapper: HTMLDivElement) {
    this.context = <CanvasRenderingContext2D>canvas.getContext('2d');
    canvas.setAttribute('width', `${wrapper.offsetWidth}`);
    canvas.setAttribute('height', `${wrapper.offsetHeight}`);
    this.cat = new Cat(wrapper, this.context);
  }

  public start(): void {
    this.wrapper.onclick = (e) => this.putFish(e);
  }

  private putFish(e: MouseEvent): void {
    const newFish = new Fish(e, this.context);
    this.cat.setTarget(newFish);
  }
}
