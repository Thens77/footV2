import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClubTComponent } from './club-t.component';

describe('ClubTComponent', () => {
  let component: ClubTComponent;
  let fixture: ComponentFixture<ClubTComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClubTComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClubTComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
