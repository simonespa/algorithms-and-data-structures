interface LinearFunction {
  gradient: number,
  yIntercept: number,
  key: string
}

interface Point {
  x: number,
  y: number
}

function getFunction(p0: Point, p1: Point): LinearFunction {
  const gradient = (p1.y - p0.y) / (p1.x - p0.x);
  const yIntercept = p0.y - gradient * p0.x;

  return {
    key: `${gradient}X+${yIntercept}`,
    gradient,
    yIntercept,
  };
}

function satisfyEquation(p: Point, func: LinearFunction): boolean {
  const { gradient: a, yIntercept: b } = func;

  return p.y === (a * p.x + b);
}

export function maxPoints(points: Point[]): number {
  // zero or negative
  if (points.length < 1) return 0;
  // 1 or 2
  if (points.length < 3) return points.length;

  let i = 0;
  const map = new Map();

  let max = 0;

  while (i < points.length - 1) {
    let j = i + 1;
    const p0 = points[i];
    const p1 = points[j];

    const func = getFunction(p0, p1);
    map.set(func.key, 2);

    j++;

    while (j < points.length) {
      if (satisfyEquation(points[j], func)) {
        let counter = map.get(func.key);
        if (counter) {
          counter++;
          map.set(func.key, counter);
          if (counter > max) {
            max = counter;
          }
        } else {
          map.set(func.key, 2);
          if (max < 2) {
            max = 2;
          }
        }
      }

      j++;
    }

    i++;
  }

  return max;
}
