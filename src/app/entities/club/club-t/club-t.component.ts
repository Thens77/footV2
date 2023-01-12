import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LoginService } from 'src/app/auth/login.service';
import { Club } from '../club.model';
import { ClubService } from '../service/club.service';

@Component({
  selector: 'app-club-t',
  templateUrl: './club-t.component.html',
  styleUrls: ['./club-t.component.css']
})
export class ClubTComponent implements OnInit {
  club: Club | undefined ;
  retrievedImage : any ;
  public idc? : number  ;
  constructor(private activatedRoute :  ActivatedRoute, private serivce : ClubService , public loginService : LoginService) { }

  ngOnInit(): void {
    this.idc =this.activatedRoute.snapshot.params["id"];
    this.serivce.get(this.idc!).subscribe( data => {
      this.club = data ;
      this.retrievedImage = 'data:image/jpeg;base64,' +data.picByte;
        this.club.picByte = this.retrievedImage; 
      console.log(this.club)
    }, error => console.log(error))
  }

}
