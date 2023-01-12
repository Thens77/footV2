import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentaireDetailComponent } from './commentaire-detail.component';

describe('CommentaireDetailComponent', () => {
  let component: CommentaireDetailComponent;
  let fixture: ComponentFixture<CommentaireDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommentaireDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommentaireDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
