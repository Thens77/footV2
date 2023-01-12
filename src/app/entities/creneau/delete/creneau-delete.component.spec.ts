import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreneauDeleteComponent } from './creneau-delete.component';

describe('CreneauDeleteComponent', () => {
  let component: CreneauDeleteComponent;
  let fixture: ComponentFixture<CreneauDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreneauDeleteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreneauDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
