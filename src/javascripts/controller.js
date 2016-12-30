import { getRandomInt, sign } from './utils'
import Cat from './cat'
import Fish from './fish'

export default class Controller {
  constructor() {
    this.canvas = document.getElementById('my-canvas');
    if (!this.canvas.getContext) { return }

    this.context = this.canvas.getContext('2d');
    this.wrapper = document.getElementById('canvas-wrapper');
    this.canvas.setAttribute('width', this.wrapper.offsetWidth);
    this.canvas.setAttribute('height', this.wrapper.offsetHeight);
  }

  start() {
    this.cat = new Cat(this.wrapper, this.context);
    this.wrapper.onclick = (e) => this.putFish(e)
  }

  putFish(e) {
    this.cat.setFish(new Fish(e, this.context));
  }
}
