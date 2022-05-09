# Max points on a function

Given an array of points where points[i] = [xi, yi] represents a point on the X-Y plane, return the maximum number of points that lie on the same straight line (linear function).

## Approach

In order to verify how many points there are on a straihgt line (i.e. linear function) we need to calculate the function that passes between two distinc points. A linear function is described as `Y = aX + b` where `a` is the gradient (or slope) and `b` is the `y-intercept`.

Once the gradient and the y-intercept are known, we can just replace the co-ordinates (X, Y) of all the other points within the equation. If satisfied, the point lie on the same straight line. By doing so, we can count ho many points live on the same function and return the one that has the most.
