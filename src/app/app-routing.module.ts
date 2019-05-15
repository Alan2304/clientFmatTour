import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MarkerCreateComponent } from './marker-create/marker-create.component';
import { MarkerFormComponent } from './marker-form/marker-form.component';
import { ShowMarkersComponent } from './show-markers/show-markers.component';

const routes: Routes = [
  {path: 'create', component: MarkerCreateComponent},
  {path: 'marker/:id', component: MarkerFormComponent},
  {path: '', component: ShowMarkersComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
