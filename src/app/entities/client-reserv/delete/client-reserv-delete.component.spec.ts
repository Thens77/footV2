import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientReservDeleteComponent } from './client-reserv-delete.component';

describe('ClientReservDeleteComponent', () => {
  let component: ClientReservDeleteComponent;
  let fixture: ComponentFixture<ClientReservDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientReservDeleteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientReservDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
