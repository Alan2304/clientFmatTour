import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { MarkerService } from '../marker.service';
import { NgForm } from '@angular/forms';

export interface event{
  name: String,
  description: String
}

@Component({
  selector: 'app-marker-form',
  templateUrl: './marker-form.component.html',
  styleUrls: ['./marker-form.component.css']
})
export class MarkerFormComponent implements OnInit {
  @ViewChild('createForm') public registerForm: NgForm
  public idMarker;
  public marker: any = {};
  public events: event[] = [];
  public event: event;
  public showAlert:boolean = false;
  public loading:boolean = false;
  constructor(
    private route: ActivatedRoute,
    private markerService: MarkerService
    ) { }

  ngOnInit() {
    this.event = {
      name: null,
      description: null
    } 
    
    this.route.paramMap.subscribe(params => {
      this.idMarker = params.get('id');
      this.markerService.getMarker(this.idMarker).subscribe(
        (result: any) => {
          this.marker = result;

          // this.registerForm.value.name = this.marker.name;
          // this.registerForm.value.description = this.marker.description;
          // this.registerForm.value.left = this.marker.left;
          // this.registerForm.value.right = this.marker.right;

          this.events = this.marker.events
        }
      )
    });
  }

  public onSubmit(form){
    this.loading = true;
    this.marker = form.value;
    this.marker.events = this.events;
    console.log(this.marker);
    
    this.markerService.updateInformation(this.marker, this.idMarker).subscribe(
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
