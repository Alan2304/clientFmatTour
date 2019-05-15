import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class MarkerService {

  constructor(private http: HttpClient) { }

  public getAllMarkers(){
    return this.http.get('https://calm-taiga-63407.herokuapp.com/Marker');
  }

  public createMarker(marker){
    return this.http.post('https://calm-taiga-63407.herokuapp.com/Marker', marker);
  }

  public updateInformation(marker, id){
    return this.http.put('https://calm-taiga-63407.herokuapp.com/Marker/'+id, marker);
  }

  public getMarker(id){
    return this.http.get('https://calm-taiga-63407.herokuapp.com/Marker/' + id);
  }
}
