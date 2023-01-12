import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientReservDetailComponent } from './client-reserv-detail.component';

describe('ClientReservDetailComponent', () => {
  let component: ClientReservDetailComponent;
  let fixture: ComponentFixture<ClientReservDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientReservDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientReservDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
