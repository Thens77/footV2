import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TerrainDeleteComponent } from './terrain-delete.component';

describe('TerrainDeleteComponent', () => {
  let component: TerrainDeleteComponent;
  let fixture: ComponentFixture<TerrainDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TerrainDeleteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TerrainDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
