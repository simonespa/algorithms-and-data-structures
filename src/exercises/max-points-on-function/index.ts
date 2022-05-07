export function calculateFunction(px1, px2) {
  const [x1, y1] = px1;
  const [x2, y2] = px2;
  const gradient = (y2 - y1) / (x2 - x1);
  const yIntercept = y1 - gradient * x1;

  return {
    key: `${gradient}X+${yIntercept}`,
    gradient,
    yIntercept,
  };
}

export function isInFunction(px, currentFunction) {
  const [X, Y] = px;
  const { gradient: a, yIntercept: b } = currentFunction;

  return Y === a * X + b;
}

export function maxPoints(points) {
  let px0 = 0;
  const N = points.length;

  const functionSet = new Set();
  let maxNumberOfPoints = 0;

  // scan the first point
  while (px0 < N - 1) {
    let px1 = px0 + 1;
    // calculate the function between the two points
    const currentFunction = calculateFunction(points[px0], points[px1]);
    // if the function was already calculated skip this entire loop
    if (functionSet.has(currentFunction.key)) {
      px0++;
      continue;
    }
    // reset the counter for the number of points on the current function
    let numberOfPoints = 2;
    px1 += 1;
    // scan the array to get the second point
    while (px1 < N) {
      if (isInFunction(points[px1], currentFunction)) {
        numberOfPoints++;
      }
      px1++;
    }
    // setting the new maximum
    if (numberOfPoints > maxNumberOfPoints) {
      maxNumberOfPoints = numberOfPoints;
    }
    // add the function to the set of already calculated ones
    functionSet.add(currentFunction.key);
    // increment to the next point
    px0++;
  }

  return maxNumberOfPoints;
}
