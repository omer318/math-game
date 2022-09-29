import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CHECK_ICON_VALUE, CLEAR_ICON_VALUE, NumpadKeyValue } from 'src/app/models/numpad-key-value';


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
      kv.keyType = typeof value  === 'number' ? 'number' : 'icon';
      if (value === CLEAR_ICON_VALUE) {
        kv.keyColor = 'red';
      }
      if (value === CHECK_ICON_VALUE) {
        kv.keyColor = 'green';
      }
      return kv;
    });
  }
}
