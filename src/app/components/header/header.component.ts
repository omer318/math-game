 import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() score = [0,0];
  @Output() emitRestartSignal = new EventEmitter<any>()
  constructor() { }

  ngOnInit(): void {
  }

  doRestart() { 
    this.emitRestartSignal.emit(null);
  }

}
