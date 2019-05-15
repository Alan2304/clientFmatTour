import { Component, OnInit } from '@angular/core';
import { MarkerService } from '../marker.service';

@Component({
  selector: 'app-show-markers',
  templateUrl: './show-markers.component.html',
  styleUrls: ['./show-markers.component.css']
})
export class ShowMarkersComponent implements OnInit {
  public markers = [];
  constructor(public markerService: MarkerService) { }

  ngOnInit() {
    this.getAllMarkers();
  }

  getAllMarkers() {
    this.markerService.getAllMarkers().subscribe(
      (data: any) => {
        this.markers = data;
        console.log(this.markers);
        
      }
    )
  }

}
