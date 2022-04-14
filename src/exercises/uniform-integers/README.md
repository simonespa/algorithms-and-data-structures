# Uniform Integers

A positive integer is considered uniform if all of its digits are equal. For example, 222222 is uniform as well as 3, while 223223 or 31 are not.

Given two positive integers A and B, determine the number of uniform integers between them (A and B inclusive).

## Constraints

```
1 <= A <= B <= N
```

where N is an arbitrary MAX_INTEGER suported by the runtime.
## Sample test case 1

```
A = 75
B = 300
```

```
Expected Return Value = 5
```

The uniform integers between 7575 and 300300 are 7777, 8888, 9999, 111111, and 222222.

## Sample test case 2

```
A = 11
B = 99
```

```
Expected Return Value = 9
```

All numbers multiple of 11 are uniform.

## Sample test case 3

```
A = 999999999999
B = 999999999999
```

```
Expected Return Value = 1
```

The single integer under consideration `999.999.999.999` is the only number in the interval and happens to be uniform.

## Sample test case 4

```
A = 2
B = 8
```

```
Expected Return Value = 7
```

All single-digit numbers are uniform, and there are 7 numbers between A and B included.

## Sample test case 5

```
A = 7
B = 11
```

```
Expected Return Value = 4
```

Same as test case 4 where all single-digit numbers are uniform, plus the number 11 itself.
