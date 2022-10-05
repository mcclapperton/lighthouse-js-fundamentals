let num = "";
function howManyHundreds(num) {
  return num % 100 == 0 ? num / 100 : (num - (num % 100)) / 100;
}
console.log(howManyHundreds(130));
