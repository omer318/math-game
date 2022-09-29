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
    console.log(this.answer == this.expectedAnswer);
  }

  clearAnswer() {
    this.answer = this.answer.slice(0, -1);
  }

  appendAnswer(value: string) {
    this.answer += value;
  }
}
