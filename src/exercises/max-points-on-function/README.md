# Max points on a function

Given an array of points where points[i] = [xi, yi] represents a point on the X-Y plane, return the maximum number of points that lie on the same straight line (linear function).

## Hint

In order to verify how many points there are on a straihgt line, i.e. linear function, we need to calculate the function between two distinc points. A linear function is described as `Y = aX + b` where `a` is the gradient (or slope) and `b` is the `y-intercept`.

Once the gradient and the y-intercept are known, we just need to replace the co-ordinate (X, Y) of a point within the function. If the equation is satisfied the point lie on the straight line described by the function.
