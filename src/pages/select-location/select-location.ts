import { Location } from './../../models/location';
import { Component } from '@angular/core';
import { IonicPage, NavParams, ViewController } from 'ionic-angular';
@IonicPage()
@Component({
  selector: 'page-select-location',
  templateUrl: 'select-location.html',
})
export class SelectLocationPage {
  location: Location;
  marker: Location;

  constructor (private navParams: NavParams,
    private viewCtrl: ViewController
  ) {
    this.location = this.navParams.get('location');
    // this.marker = this.navParams.get('isSet') ? this.location : null ;
    if (this.navParams.get('isSet')) {
      this.marker = this.location;
    }
    // console.log(this.location);
  }
  onSetMarker(event: any) {
    console.log(event);
    this.marker = new Location(event.coords.lat, event.coords.lng);
    // console.log('Here');
    // console.log(this.marker);
  }
  onConfirm() {
    this.viewCtrl.dismiss({
      location: this.marker
    });
  }
  onAbort() {
    this.viewCtrl.dismiss();
  }

}
