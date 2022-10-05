let length = "";
let width = "";
function calculateRectangleArea(length, width) {
  if (length > 0 && width > 0) {
    return length * width;
  } else {
    return undefined;
  }
}

let base = "";
let height = "";
function calculateTriangleArea(base, height) {
  if (base > 0 && height > 0) {
    return (base * height) / 2;
  } else {
    return undefined;
  }
}
let radius = "";
function calculateCircleArea(radius) {
  if (radius > 0) {
    return Math.PI * (radius * radius);
  } else {
    return undefined;
  }
}

console.log(calculateRectangleArea(10, 5));
console.log(calculateCircleArea(-1));
