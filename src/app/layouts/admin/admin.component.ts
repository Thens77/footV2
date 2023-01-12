import { Component, OnInit } from '@angular/core';
import { IClub } from 'src/app/entities/club/club.model';
import { AdminDashboardService } from './service/admin-dashboard.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  public clubs!: IClub[];
  public oneclub!: IClub;

  constructor(private service: AdminDashboardService) {}

  ngOnInit(): void {
    this.loadAll();
  }

  loadAll(): void {
    this.service.findAll().subscribe((data) => {
      this.clubs = data;
      console.log(this.clubs);
    });
  }
  
  activate(id: any): void {
    this.service.find(id).subscribe((data) => {
      this.oneclub = data;

      if (this.oneclub.etat === true) {
        this.oneclub.etat = false;
      } else {
        this.oneclub.etat = true;
      }

      this.service.update(id, this.oneclub).subscribe((data) => {
        console.log('activated' + this.oneclub.etat);
      });
    });
  }
}