const arithmeticsDivide = (a, b) => {
    if (b === 0) {
        throw new Error('Cannot divide by zero');
    }
    a / b;
};