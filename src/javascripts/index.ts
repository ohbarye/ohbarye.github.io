import Controller from './Controller';
import '../sass/me.scss';

window.onload = () => {
  const canvas = <HTMLCanvasElement>document.getElementById('my-canvas');
  const wrapper = <HTMLDivElement>document.getElementById('canvas-wrapper');

  if (canvas.getContext && wrapper) {
    Controller.start(canvas, wrapper);
  } else {
    console.log(
      "You're using an so obsolete browser that an extra content cannot appear.",
    );
  }
};
