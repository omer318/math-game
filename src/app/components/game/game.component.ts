import { Component, HostListener, OnInit, ViewChild } from '@angular/core';
import {
  CHECK_ICON_VALUE,
  CLEAR_ICON_VALUE,
  GREEN_COLOR,
  RED_COLOR,
} from 'src/app/consts/colors';
import { NumpadKeyValue } from 'src/app/models/numpad-key-value';
import { EquationComponent } from './equation/equation.component';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss'],
})
export class GameComponent implements OnInit {
  answer = '';
  expectedAnswer = '';
  eqBgColor = '';
  correctAnswers = 0;
  showAnswer = false;
  totalQuestions = 0;

  @ViewChild(EquationComponent) equationRef!: EquationComponent;

  constructor() {}

  ngOnInit(): void {}

  updateExpectedAnswer(value: string) {
    this.expectedAnswer = value;
  }

  updateAnswer(key: NumpadKeyValue) {
    {
      switch (key.value) {
        case CHECK_ICON_VALUE:
          this.submitAnswer();
          break;
        case CLEAR_ICON_VALUE:
          this.clearAnswer();
          break;

        default:
          this.appendAnswer(key.value);
          break;
      }
    }
  }

  @HostListener('document:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    switch (event.key.toLowerCase()) {
      case 'enter':
        this.submitAnswer();
        break;

      case 'backspace':
        this.clearAnswer();
        break;

      default:
        if (!isNaN(Number(event.key))) {
          this.appendAnswer(event.key);
        }
        break;
    }
    console.log({ event });
  }

  submitAnswer() {
    let isCorrect = this.answer == this.expectedAnswer;
    this.showAnswer = true;
    this.flashColor(isCorrect ? GREEN_COLOR : RED_COLOR).then(() => {
      this.updateScore(isCorrect);
      this.answer = '';
      this.showAnswer = false;
      this.equationRef.generateEquation();
    });
  }

  updateScore(isCorrect: boolean) {
    if (isCorrect) {
      this.correctAnswers++;
    }
    this.totalQuestions++;
  }

  clearAnswer() {
    if (this.answer.length === 0) {
      this.flashColor(RED_COLOR);
      return;
    }
    this.answer = this.answer.slice(0, -1);
  }

  appendAnswer(value: string) {
    if (this.answer.length < MAX_ANSWER_LENGTH) {
      this.answer += value;
      return;
    }
    this.flashColor(RED_COLOR, 2);
  }

  async flashColor(color: string, times = 1) {
    console.time('flash');
    for (let i = 0; i < times; i++) {
      this.eqBgColor = color;
      await sleep(1000);
      this.eqBgColor = '';
    }
    console.timeEnd('flash');
  }
}

async function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

const MAX_ANSWER_LENGTH = 3;
