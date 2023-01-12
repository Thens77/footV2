import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProprietaireDeleteComponent } from './proprietaire-delete.component';

describe('ProprietaireDeleteComponent', () => {
  let component: ProprietaireDeleteComponent;
  let fixture: ComponentFixture<ProprietaireDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProprietaireDeleteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProprietaireDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
