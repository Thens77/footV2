import { Component, OnInit ,Input } from '@angular/core';
import { Subject } from 'rxjs';
import { Club } from '../../club/club.model';
import { Users } from '../../users/users.model';
import { Commentaire, ICommentaire } from '../commentaire.model';
import { CommentaireService } from '../service/commentaire.service';
import { UntypedFormBuilder } from '@angular/forms';
import { ClubService } from '../../club/service/club.service';
import { UsersService } from '../../users/service/users.service';


@Component({
  selector: 'app-commentaire-update',
  templateUrl: './commentaire-update.component.html',
  styleUrls: ['./commentaire-update.component.css']
})
export class CommentaireUpdateComponent implements OnInit {

  resetFormSubject: Subject<boolean> = new Subject<boolean>();
  
  idUser : number = Number(localStorage.getItem('userId')) ;
  user : Users | undefined;
  club : Club | undefined;

  @Input() 
  idm? : number | undefined ;

  
  editForm = this.fb.group({
    id: [],
    utilisateur: [],
    club: [],
    date:[],
    desc: []
   
  });
  constructor(private revueService : CommentaireService, private fb : UntypedFormBuilder , private clubService : ClubService,private utilisateurService : UsersService) { }

  ngOnInit(): void {
    console.log(localStorage.getItem('userId'));
    this.getUser();
    this.getMatiere();
  }

  protected updateForm(commentaire: ICommentaire): void {
    this.editForm.patchValue({
      id: commentaire.id,
      utilisateur: commentaire.utilisateur ,
      matiere: commentaire.club ,
      desc: commentaire.desc , 
 
    });
  }

  save():void{
    const revue = this.createFromForm();
      this.revueService.add(revue).subscribe(data =>{
        this.notifyForChange();
       },
      error => console.log(error)
      );
  }

  notifyForChange() {
    this.revueService.notifyAboutChange();
  }

  getUser(){
    this.utilisateurService.find(this.idUser).subscribe(data=> {
      this.user = data ;
      console.log(this.user);
    })
  }

  getMatiere(){
    this.clubService.get(this.idm!).subscribe(data=> {
      this.club = data ;
      console.log(this.club);
    })
  }

  protected createFromForm(): ICommentaire {
    return {
      ...new Commentaire(),
      id: this.editForm.get(['id'])!.value,
      utilisateur: this.user,
      club: this.club,  
      date:undefined,
      desc: this.editForm.get(['commentaire'])!.value,
    };
  }
}