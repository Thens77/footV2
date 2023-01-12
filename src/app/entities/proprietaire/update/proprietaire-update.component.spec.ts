import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProprietaireUpdateComponent } from './proprietaire-update.component';

describe('ProprietaireUpdateComponent', () => {
  let component: ProprietaireUpdateComponent;
  let fixture: ComponentFixture<ProprietaireUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProprietaireUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProprietaireUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
