import { Component,ViewChild, ElementRef, OnInit, AfterViewInit } from '@angular/core';
import { Parcel, mountRootParcel } from 'single-spa';
import { from } from 'rxjs';
@Component({
  selector: 'my-app2-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit {
  title = 'my-app2';
  @ViewChild('parcel', { static: true }) private parcel: ElementRef;

  ngOnInit() {
    from(window.System.import('parcel')).subscribe(app => {
      mountRootParcel(app, { domElement :this.parcel.nativeElement});
    })
  }

  ngAfterViewInit() {
    console.log(this.parcel)
  }

}
