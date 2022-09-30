import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {
  ADD,
  DIV,
  MUL,
  Operator,
  OPERATORS,
  SUB,
} from 'src/app/models/operator';

@Component({
  selector: 'app-equation',
  templateUrl: './equation.component.html',
  styleUrls: ['./equation.component.scss'],
})
export class EquationComponent implements OnInit {
  firstElement!: number;
  secondElement!: number;
  operation!: Operator;
  @Input() answer = '';
  @Input() isBackgroundSpecial = '';

  @Output() expectedAnswer = new EventEmitter<string>;

  constructor() {}

  generateRandomNumber(max: number, min = 0) {
    return Math.floor(Math.random() * (max - min)) + min;
  }

  chooseRandomAction(): Operator {
    const index = this.generateRandomNumber(OPERATORS.length);
    return OPERATORS[index];
  }

  generateEquation() {
    this.operation = this.chooseRandomAction();
    switch (this.operation) {
      case ADD:
        this.firstElement = this.generateRandomNumber(100, 10);
        this.secondElement = this.generateRandomNumber(100, 10);
        break;

      case SUB:
        this.firstElement = this.generateRandomNumber(100, 10);
        this.secondElement = this.generateRandomNumber(this.firstElement, 1);
        break;

      case MUL:
        this.firstElement = this.generateRandomNumber(20,2);
        this.secondElement = this.generateRandomNumber(20,2);
        break;

      case DIV:
        let first = this.generateRandomNumber(20,2);
        this.secondElement = this.generateRandomNumber(20,2);
        this.firstElement = first * this.secondElement;
        break;

      default:
        console.error('No operator');
        break;
    }
    this.expectedAnswer.emit(this.operation.method(this.firstElement,this.secondElement));
  }

  ngOnInit(): void {
    this.generateEquation();
  }
}
