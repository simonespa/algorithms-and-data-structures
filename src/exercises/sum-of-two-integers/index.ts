/*
Check the signs of the two numbers
  - if the signs are the same, use that sign and sum the two numbers
  - if the signs are opposite
    - if the numbers are equal return "0"
    - otherwise pick the sign of the biggest number
    - do the difference
    - use the picked sign
*/
export function getSum(a: number, b: number): number {
  let x = `${a}`;
  let y = `${b}`;

  const xSign = getSign(x);
  const ySign = getSign(y);

  if (xSign === "-") {
    x = x.split("").slice(1).join("");
  }

  if (ySign === "-") {
    y = y.split("").slice(1).join("");
  }

  if (xSign === ySign) {
    let counter = Number(x);

    for (let i = 0; i < Number(y); i++) {
      counter++;
    }

    if (xSign === "+") {
      return counter;
    }

    return Number(`-${counter}`);
  }
  if (x === y) {
    return 0;
  }
  let sign = "";

  if (Number(x) > Number(y)) {
    let counter = Number(x);

    for (let i = 0; i < Number(y); i++) {
      counter--;
    }

    if (xSign === "-") {
      sign = "-";
    }

    return Number(`${sign}${counter}`);
  }

  let counter = Number(y);

  for (let i = 0; i < Number(x); i++) {
    counter--;
  }

  if (ySign === "-") {
    sign = "-";
  }

  return Number(`${sign}${counter}`);
}

function getSign(n: string): string {
  const sign = n.charAt(0);

  if (sign === "-") return "-";

  return "+";
}
