import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {  APP_BASE_HREF } from '@angular/common'
import {  EmptyRouteComponent } from './empty-route/empty-route.component';
import {SubComponentComponent} from './sub/sub-component/sub-component.component'
const routes: Routes = [
  { 
    path: 'app1/sub', 
    loadChildren: () => import('./sub/sub.module').then(m => m.SubModule)
 },
  { path: '**', component: EmptyRouteComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [{ provide: APP_BASE_HREF, useValue: '/' }]
})
export class AppRoutingModule { }
