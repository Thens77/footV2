import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeclubComponent } from './homeclub.component';

describe('HomeclubComponent', () => {
  let component: HomeclubComponent;
  let fixture: ComponentFixture<HomeclubComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeclubComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeclubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
