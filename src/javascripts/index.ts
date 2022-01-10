import '../sass/me.scss';
import Controller from './Controller';

window.onload = () => {
  const canvas = <HTMLCanvasElement>document.getElementById('my-canvas');
  const wrapper = <HTMLDivElement>document.getElementById('canvas-wrapper');

  try {
    Controller.start(canvas, wrapper);
  } catch {
    console.log(
      "You're using an so obsolete browser that an extra content cannot appear.",
    );
  }
};
