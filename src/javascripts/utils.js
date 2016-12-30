export function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function randomSign() {
  return [1, -1][randomInt(0, 1)];
}

export function diff(x, y) {
  return Math.abs(x - y);
}
