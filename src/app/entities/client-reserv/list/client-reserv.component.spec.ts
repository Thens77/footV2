import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientReservComponent } from './client-reserv.component';

describe('ClientReservComponent', () => {
  let component: ClientReservComponent;
  let fixture: ComponentFixture<ClientReservComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientReservComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientReservComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
