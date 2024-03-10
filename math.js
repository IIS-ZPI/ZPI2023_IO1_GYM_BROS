const arithmeticMod = (a, b) => {
  if (b === 0) {
    throw new Error("Cannot divide by zero");
  }
  return a % b;
};

const arithmeticsMult = (a, b) => {
  return a * b;
};

const arithmeticsAdd = (a, b) => {
    return a + b;
};

const arithmeticsDiv = (a, b) => {
    if (b === 0) {
        throw new Error('Cannot divide by zero');
    }
    return a / b;
};

const arithmeticsDiff = (a, b) => {
    return a - b;
};
