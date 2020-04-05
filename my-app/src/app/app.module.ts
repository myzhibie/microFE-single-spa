import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EmptyRouteComponent} from './empty-route/empty-route.component';
// import  {SubComponentComponent} from './sub/sub-component/sub-component.component'
@NgModule({
  declarations: [
    AppComponent,
    EmptyRouteComponent,
    // SubComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
