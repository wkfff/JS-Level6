export default {

  getRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  },
  generateQuestion(time) {
    const operations = ['+', '-', '*', '/'];
    const operation = operations[this.getRandom(0, 3)];
    let num1 = 0;
    let num2 = 0;
    if (time >= 40) {
      num1 = this.getRandom(0, 9);
      num2 = this.getRandom(0, 9);
    } else if (time >= 20) {
      num1 = this.getRandom(10, 99);
      num2 = this.getRandom(10, 99);
    } else {
      num1 = this.getRandom(100, 999);
      num2 = this.getRandom(100, 999);
    }
    switch (operation) {
      case '+':
        return this.setFormula(num1, operation, num2, num1 + num2);
      case '-':
        return this.setFormula(num1, operation, num2, num1 - num2);
      case '*':
        return this.setFormula(num1, operation, num2, num1 * num2);
      case '/':
        if (num2 === 0) {
          return this.generateQuestion(time);
        }
        return this.setFormula(num1, operation, num2, Math.floor(num1 / num2));
      default:
        return null;
    }
  },
  setFormula(num1, operation, num2, answer) {
    return {
      num1,
      operation,
      num2,
      answer,
    };
  },
};
