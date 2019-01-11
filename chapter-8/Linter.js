OpenParenthesis = "{[(";
isParenthesis = "{[()]}";
matchingParen = { "{": "}", "(": ")", "[": "]" };

class Linter {
  //   Static Class Features declarations are an experimental feature (stage 3) proposed at TC39
  //   can use the code bellow with babel for now
  //   static isParenthesis = "{[()]}";
  //   static OpenParenthesis = "{[(";
  //   static matchingParen = { "{": "}", "(": ")", "[": "]" };

  constructor() {
    this.stack = [];
  }
  // TODO: optimise the code.
  lint(string) {
    for (var i = 0; i < string.length; i++) {
      if (isParenthesis.includes(string[i])) {
        if (OpenParenthesis.indexOf(string[i]) >= 0) {
          this.stack.push(string[i]);
        } else {
          var top = this.stack.pop(); // pop off the top element from stack
          if (matchingParen[top] == string[i]) {
            continue;
          } else {
            return false;
          }
        }
      }
    }
    if (this.stack.length) {
      return false;
    }
    return true;
  }
}

const linter = new Linter();
console.log(linter.lint("(var x = { y: [1,] [{1: 1}, {1}], } )")); // true 
console.log(linter.lint("( var x = { y: [1, 2, 3] }")); // false
