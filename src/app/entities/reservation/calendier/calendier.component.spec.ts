import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalendierComponent } from './calendier.component';

describe('CalendierComponent', () => {
  let component: CalendierComponent;
  let fixture: ComponentFixture<CalendierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalendierComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalendierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
