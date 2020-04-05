import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SubRoutingModule } from './sub-routing.module';
import { SubComponentComponent } from './sub-component/sub-component.component';


@NgModule({
  declarations: [SubComponentComponent],
  imports: [
    CommonModule,
    SubRoutingModule
  ]
})
export class SubModule { }
