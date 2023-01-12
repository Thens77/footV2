import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentaireUpdateComponent } from './commentaire-update.component';

describe('CommentaireUpdateComponent', () => {
  let component: CommentaireUpdateComponent;
  let fixture: ComponentFixture<CommentaireUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommentaireUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommentaireUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
