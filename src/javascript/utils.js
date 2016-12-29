export function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function sign() {
  return [1, -1][getRandomInt(0, 1)];
}
