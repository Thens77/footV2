import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProprietaireDetailComponent } from './proprietaire-detail.component';

describe('ProprietaireDetailComponent', () => {
  let component: ProprietaireDetailComponent;
  let fixture: ComponentFixture<ProprietaireDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProprietaireDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProprietaireDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
