const chorus = "Let's dance!";
for (let repeat = 0; repeat < 10; repeat++) {
  console.log(chorus);
}
console.log("Until the sun comes up!");

const amounts = [61.0, 52.25, 112.99, 5.0];
let total = 0;
for (let amount of amounts) {
  total += amount;
}
console.log("Order total is: ", total);

function isThisWorking(input) {
  console.log(
    "Printing: isThisWorking was called and " +
      input +
      " was passed in as an argument."
  );
}

isThisWorking(3);
