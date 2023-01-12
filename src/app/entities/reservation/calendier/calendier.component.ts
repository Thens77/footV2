import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Reservation } from '../reservation.model';
import { ReservationService } from '../service/reservation.service';
import { CalendarOptions } from '@fullcalendar/core';
import { ActivatedRoute } from '@angular/router';
import { ClubService } from '../../club/service/club.service';
import { Club } from '../../club/club.model';
import { IDropdownSettings } from 'ng-multiselect-dropdown/multiselect.model';
import { Terrain } from '../../terrain/terrain.model';
import { FormBuilder } from '@angular/forms';
import { TerrainService } from '../../terrain/service/terrain.service';

@Component({
  selector: 'app-calendier',
  templateUrl: './calendier.component.html',
  styleUrls: ['./calendier.component.css']
})
export class CalendierComponent implements OnInit {
  club : Club = new Club();
  events: any[] = [];
  calendarOptions!: CalendarOptions ;
  day : number | undefined ;
  reservations: Reservation[] | undefined ;
  searchText : any ;
  date : Date |undefined ;
  idc : number | undefined;

  dropdownList :any = [];
  selectedItems :any = [];
  dropdownSettings :IDropdownSettings={};
  selectedItemsRoot: any[] | undefined;
  terrain : Terrain = new Terrain();
  terrains : Terrain[] | undefined;
  idterrains : number [] =[] ;
  editForm = this.fb.group({
  
    terrain: [],
  
  });
 // notifierSubscription: Subscription = this.reservationService.subjectNotifier.subscribe(notified => {
 //   this.ngOnInit();
  //});
  constructor(private terrainService : TerrainService ,private fb : FormBuilder, private clubService : ClubService ,private activatedRoute:ActivatedRoute ,private reservationService : ReservationService, public dialog: MatDialog) { }

  ngOnInit(): void {

    this.idc =window.history.state.idc;
    console.log(this.idc);
    this.getClub();
    this.getTerrain();
    this.get();
    this.dropdownSettings = {
      singleSelection: false,
      idField: 'id',
      textField: 'description',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 3,
      allowSearchFilter: true,
      
    };

   
  }
getTerrain():void{
  this.terrainService.list(this.idc!).subscribe(data=> {
    this.terrains = data ;
   this.dropdownList = data ;
    console.log(this.terrains)
  })
}
  getClub(): void {
    this.clubService.get(this.idc!).subscribe(
      (data) => {
        this.club = data;
        console.log(this.club)
      },
      (error) => console.log(error)
    );
  }

  private get() : void {
    if(this.idterrains.length===0){
      this.reservationService.listByClub(this.idc!).subscribe(data=> {
        this.reservations = data ;
        this.events = [];
        for(let res of data){
          if(res.date!==undefined){
            const date = res.date.toString() ;
            const d = date.split('T');
            console.log(res.terrain);
        this.events.push({            
          id: res.id,
          idE : res?.id,
          title:"Terrain " +  res.terrain?.id + " ( Club : "+  this.club.clubName + " )",
          //start:''+d[0]+'-'+d[1]+'-'+d[2]+''
          start: '' + d[0] + 'T' + res.creneau?.heureDebut,
          end: '' + d[0] + 'T' + res.creneau?.heureFin,
         
          //daysOfWeek : [this.day?.toString()],
         // startTime : res.creneau?.heureDebut,
          //endTime: res.creneau?.heureFin,
          //endRecur : ''+d2[0]+'-'+d2[1]+'-'+d2[2]+''
         
        });
        
        console.log(this.events) ; 
        console.log("test")
          }
           
        }
        })
    }
    else{
         this.events = [];
      for(let i of this.idterrains){
          this.reservationService.listByTerrain(Number(i)).subscribe(data=> {
          this.reservations = data ;
          
          for(let res of data){
            if(res.date!==undefined){
              const date = res.date.toString() ;
              const d = date.split('T');
              console.log(res.terrain);
          this.events.push({            
            id: res.id,
            idE : res?.id,
            title:"Terrain " +  res.terrain?.id + " ( Club : "+  this.club.clubName + " )",
            start: '' + d[0] + 'T' + res.creneau?.heureDebut,
            end: '' + d[0] + 'T' + res.creneau?.heureFin,

             });
           }  
          }    
        })
      }
    }
    
    console.log("ok")
    setTimeout(() => {
      this.calendarOptions = {

        headerToolbar: {
          left: 'prev,next today',
          center: 'title',
          right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek'
        },
        slotMinTime: "08:00:00",
				slotMaxTime: "22:45:00",
        initialView: 'resourceTimelineDay',
        weekends: true,
        editable: true,
        selectable: true,
        selectMirror: true,
        dayMaxEvents: true,
       
        events: this.events ,
        
      };
    }, 1500);
  }
  onChange(e? : Event):void {
    this.idterrains = [] ;
    let i = 0 ;
   
   while(e![i] !==undefined ){
    this.idterrains?.push(Number(e![i].id));
  
    i++;
   }
   this.get();
    console.log(this.idterrains);
  }

  compareObjects(o1: any, o2: any): boolean {
    return o1.id === o2.id && o1.nom === o2.nom;
  }

  
}


