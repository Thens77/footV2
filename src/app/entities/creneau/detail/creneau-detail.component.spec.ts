import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreneauDetailComponent } from './creneau-detail.component';

describe('CreneauDetailComponent', () => {
  let component: CreneauDetailComponent;
  let fixture: ComponentFixture<CreneauDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreneauDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreneauDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
