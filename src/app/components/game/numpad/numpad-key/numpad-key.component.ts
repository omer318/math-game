import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NumpadKeyValue } from 'src/app/models/numpad-key-value';

@Component({
  selector: 'app-numpad-key',
  templateUrl: './numpad-key.component.html',
  styleUrls: ['./numpad-key.component.scss'],
})
export class NumpadKeyComponent implements OnInit {
  @Input('value') numpadKeyValue = new NumpadKeyValue();
  @Output() clicked = new EventEmitter<NumpadKeyValue>();

  constructor() {}

  ngOnInit(): void {}

  emitClick(){
    this.clicked.emit(this.numpadKeyValue)
  }
}
