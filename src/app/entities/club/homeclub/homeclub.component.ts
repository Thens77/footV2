import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Club } from '../club.model';
import { ClubService } from '../service/club.service';

@Component({
  selector: 'app-homeclub',
  templateUrl: './homeclub.component.html',
  styleUrls: ['./homeclub.component.css']
})
export class HomeclubComponent implements OnInit {
  club: Club | undefined ;
  retrievedImage : any ;
  id? : number | undefined;
  constructor(private activatedRoute :  ActivatedRoute, private serivce : ClubService) { }

  ngOnInit(): void {
    this.id =this.activatedRoute.parent?.snapshot.params["id"];
   
      this.serivce.get(this.id!).subscribe( data => {
        this.club = data ;
        this.retrievedImage = 'data:image/jpeg;base64,' +data.picByte;
          this.club.picByte = this.retrievedImage;
          console 
        console.log(this.club)
      }, error => console.log(error))
    
    
  
  }

}
