import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-score',
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.scss']
})
export class ScoreComponent implements OnInit {

  @Input() totalQuestions = 0;
  @Input() correctAnswers = 0;
  constructor() { }

  ngOnInit(): void {
  }

}
