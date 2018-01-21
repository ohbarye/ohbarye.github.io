export function randomInt(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function randomSign(): number {
  return [1, -1][randomInt(0, 1)];
}

export function diff(x: number, y: number): number {
  return Math.abs(x - y);
}
