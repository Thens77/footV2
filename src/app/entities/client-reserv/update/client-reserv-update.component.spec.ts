import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientReservUpdateComponent } from './client-reserv-update.component';

describe('ClientReservUpdateComponent', () => {
  let component: ClientReservUpdateComponent;
  let fixture: ComponentFixture<ClientReservUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientReservUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientReservUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
