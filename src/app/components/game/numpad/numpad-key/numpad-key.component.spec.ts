import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NumpadKeyComponent } from './numpad-key.component';

describe('NumpadKeyComponent', () => {
  let component: NumpadKeyComponent;
  let fixture: ComponentFixture<NumpadKeyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NumpadKeyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NumpadKeyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
