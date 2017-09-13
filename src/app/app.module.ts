import { Camera } from '@ionic-native/camera';
import { Geolocation } from '@ionic-native/geolocation';
// import { SelectLocationPage } from './../pages/select-location/select-location';
// import { PlacePage } from './../pages/place/place';
// import { AddPlacePage } from './../pages/add-place/add-place';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { AgmCoreModule } from '@agm/core';
import { File } from '@ionic-native/file';
import { IonicStorageModule } from '@ionic/storage';

import { MyApp } from './app.component';
// import { HomePage } from '../pages/home/home';
import { PlacesService } from '../services/places.services';

@NgModule({
  declarations: [
    MyApp
  ],
  imports: [
    BrowserModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDbv4M_18hTKH7mDohM8omkQAJxsdoJ6_M'
    }),
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Geolocation,
    PlacesService,
    Camera,
    File,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
