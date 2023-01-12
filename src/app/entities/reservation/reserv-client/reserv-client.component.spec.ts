import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservClientComponent } from './reserv-client.component';

describe('ReservClientComponent', () => {
  let component: ReservClientComponent;
  let fixture: ComponentFixture<ReservClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReservClientComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReservClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
