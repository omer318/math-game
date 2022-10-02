import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CLEAR_ICON_VALUE, CHECK_ICON_VALUE, RED_COLOR, GREEN_COLOR } from 'src/app/consts/colors';
import { NumpadKeyValue } from 'src/app/models/numpad-key-value';

@Component({
  selector: 'app-numpad',
  templateUrl: './numpad.component.html',
  styleUrls: ['./numpad.component.scss'],
})
export class NumpadComponent implements OnInit {
  KEYS = [1, 2, 3, 4, 5, 6, 7, 8, 9, CLEAR_ICON_VALUE, 0, CHECK_ICON_VALUE];
  keysArray: NumpadKeyValue[] = [];

  @Output() notifyChildEvent = new EventEmitter<NumpadKeyValue>();

  constructor() {}

  ngOnInit(): void {
    this.keysArray = this.getKeys();
  }

  getKeys() {
    return this.KEYS.map((value) => {
      let kv = new NumpadKeyValue();
      kv.value = value.toString();
      kv.keyType = typeof value === 'number' ? 'number' : 'icon';
      if (value === CLEAR_ICON_VALUE) {
        kv.keyColor = RED_COLOR;
      }
      if (value === CHECK_ICON_VALUE) {
        kv.keyColor = GREEN_COLOR;
      }
      return kv;
    });
  }
}
