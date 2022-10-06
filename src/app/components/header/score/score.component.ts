import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-score',
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.scss'],
})
export class ScoreComponent implements OnInit {
  @Input() totalQuestions = 0;
  @Input() correctAnswers = 0;
  mobile = false;
  constructor(public breakpointObserver: BreakpointObserver) {}

  ngOnInit(): void {
    this.breakpointObserver
      .observe(['(min-width: 600px)'])
      .subscribe((state: BreakpointState) => {
        this.mobile = state.matches;
      });
  }

  getCorrectPercentage(): number {
    if (this.totalQuestions === 0) {
      return 0;
    }
    return Math.round(this.correctAnswers * 100 / this.totalQuestions) ;
  }
}
