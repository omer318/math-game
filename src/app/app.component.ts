import { Component, ViewChild } from '@angular/core';
import { GameComponent } from './components/game/game.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'math-game';
  score: [number, number] = [0, 0];

  @ViewChild(GameComponent) gameRef!: GameComponent;

  updateScore(score: [number, number]) {
    this.score = score;
  }

  restartGame() {
    this.gameRef.restartGame();
  }
}
