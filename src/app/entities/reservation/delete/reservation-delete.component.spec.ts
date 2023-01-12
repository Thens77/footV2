import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservationDeleteComponent } from './reservation-delete.component';

describe('ReservationDeleteComponent', () => {
  let component: ReservationDeleteComponent;
  let fixture: ComponentFixture<ReservationDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReservationDeleteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReservationDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
