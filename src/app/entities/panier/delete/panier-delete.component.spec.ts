import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanierDeleteComponent } from './panier-delete.component';

describe('PanierDeleteComponent', () => {
  let component: PanierDeleteComponent;
  let fixture: ComponentFixture<PanierDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PanierDeleteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PanierDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
