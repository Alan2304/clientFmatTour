import { Component, OnInit } from '@angular/core';
import { MarkerService } from '../marker.service';

export interface event{
  name: String,
  description: String
}

@Component({
  selector: 'app-marker-create',
  templateUrl: './marker-create.component.html',
  styleUrls: ['./marker-create.component.css']
})
export class MarkerCreateComponent implements OnInit {
  public events: event[] = [];
  public event: event;
  public showAlert:boolean = false;
  public loading:boolean = false;
  constructor(public markerService: MarkerService) { }

  ngOnInit() {
    this.event = {
      name: null,
      description: null
    } 
  }

  public onSubmit(form){
    this.loading = true;
    let marker = form.value;
    marker.events = this.events;
    
    this.markerService.createMarker(marker).subscribe(
      (data: any) => {
        console.log(data);
        this.loading = false;
        this.showAlert = true;
      }
    );
  }

  public addEvent(){
    this.events.push(this.event);
    this.resetEvent();
  }

  public resetEvent() {
    this.event = {
      name: null,
      description: null
    };
  }

  public deleteEvent(event) {
    this.events = this.events.filter(item => item != event);
  }
}
