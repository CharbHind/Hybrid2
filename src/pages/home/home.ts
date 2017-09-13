// import { PlacePage } from './../place/place';
import { PlacesService } from './../../services/places.services';
import { Place } from './../../models/place';
// import { AddPlacePage } from './../add-place/add-place';
import { Component, OnInit } from '@angular/core';
import { ModalController, IonicPage } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit {
  addPlacePage = 'add-place';
  places: Place[] = [];
  constructor(public modalCtrl: ModalController,
    private placesService: PlacesService
  ) { }

  ngOnInit() {
    this.placesService.fetchPlaces()
      .then(
        (places: Place[]) => this.places = places
      );
  }
  ionViewWillEnter() {
    this.places = this.placesService.loadPlaces();
  }
  onOpenPlace(place: Place, index: number) {
    const modal = this.modalCtrl.create('PlacePage', {
      place: place
    });
    modal.present();
    modal.onDidDismiss(
      () => {
        this.places = this.placesService.loadPlaces();
      }
    );

  }



}
