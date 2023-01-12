import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanierUpdateComponent } from './panier-update.component';

describe('PanierUpdateComponent', () => {
  let component: PanierUpdateComponent;
  let fixture: ComponentFixture<PanierUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PanierUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PanierUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
