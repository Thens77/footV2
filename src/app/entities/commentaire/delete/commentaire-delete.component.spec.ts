import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentaireDeleteComponent } from './commentaire-delete.component';

describe('CommentaireDeleteComponent', () => {
  let component: CommentaireDeleteComponent;
  let fixture: ComponentFixture<CommentaireDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommentaireDeleteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommentaireDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
