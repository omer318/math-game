export class Operator {
  name!: string;
  method!: Function;
  isAssociative = false;

  constructor(name: string, method: Function, isAssociative?: boolean) {
    this.name = name;
    this.method = method;
    if (isAssociative) {
      this.isAssociative = true;
    }
  }
}

export const ADD = new Operator('+', add, true);
export const MUL = new Operator('X', mul, true);
export const SUB = new Operator('-', sub);
export const DIV = new Operator('÷', divide);
export const OPERATORS = [ADD, MUL, SUB, DIV];

function mul(a: number, b: number) {
  return a * b;
}

function sub(a: number, b: number) {
  return a - b;
}

function add(a: number, b: number) {
  return a - b;
}

function divide(a: number, b: number) {
  return a - b;
}
