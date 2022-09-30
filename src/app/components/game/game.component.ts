import { Component, OnInit } from '@angular/core';
import {
  CHECK_ICON_VALUE,
  CLEAR_ICON_VALUE,
  NumpadKeyValue,
} from 'src/app/models/numpad-key-value';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss'],
})
export class GameComponent implements OnInit {
  answer = '';
  expectedAnswer = '';
  eqBgColor = '';
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

  submitAnswer() {
    let isCorrect = this.answer == this.expectedAnswer;
    this.flashColor(isCorrect ? 'green' : 'red');
  }

  clearAnswer() {
    if (this.answer.length === 0){
      this.flashColor("red");
      return;
    }
    this.answer = this.answer.slice(0, -1);
  }

  appendAnswer(value: string) {
    if (this.answer.length < MAX_ANSWER_LENGTH) {
      this.answer += value;
      return;
    }
    this.flashColor('red', 2);
  }

  flashColor(color: string, times = 1) {
    this.eqBgColor = color;
    for (let i = 0; i < times; i++) {
      sleep(500).then(() => {
        this.eqBgColor = '';
      });
    }
  }
}

function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

const MAX_ANSWER_LENGTH = 3;
