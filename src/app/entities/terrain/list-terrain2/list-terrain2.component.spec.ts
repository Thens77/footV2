import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListTerrain2Component } from './list-terrain2.component';

describe('ListTerrain2Component', () => {
  let component: ListTerrain2Component;
  let fixture: ComponentFixture<ListTerrain2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListTerrain2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListTerrain2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
