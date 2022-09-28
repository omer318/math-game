import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatSliderModule } from '@angular/material/slider';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/header/header.component';
import { NumpadComponent } from './components/game/numpad/numpad.component';
import { GameComponent } from './components/game/game.component';
import { EquationComponent } from './components/game/equation/equation.component';
import { NumpadKeyComponent } from './components/game/numpad/numpad-key/numpad-key.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent, NumpadComponent, GameComponent, EquationComponent, NumpadKeyComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
