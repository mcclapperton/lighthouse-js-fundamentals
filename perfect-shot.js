const moves = ["north", "north", "west", "west", "north", "east", "north"];

const finalPosition = (moves) => {
  let startPoint = [0, 0];
  for (const move of moves) {
    if (move === "north") {
      startPoint[1]++;
    } else if (move === "south") {
      startPoint[1]--;
    } else if (move === "east") {
      startPoint[0]++;
    } else if (move === "west") {
      startPoint[0]--;
    }
  }
  return startPoint;
};
