import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SubComponentComponent} from './sub-component/sub-component.component';

const routes: Routes = [
  {path : '', component: SubComponentComponent } 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SubRoutingModule { }
