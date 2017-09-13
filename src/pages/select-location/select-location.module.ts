 import { AgmCoreModule } from '@agm/core';
 import { NgModule } from '@angular/core';
 import { IonicPageModule } from 'ionic-angular';
 import { SelectLocationPage } from './select-location';

 @NgModule({
   declarations: [
     SelectLocationPage,
   ],
   imports: [
     IonicPageModule.forChild(SelectLocationPage),
     AgmCoreModule
   ],
 })
 export class SelectLocationPageModule {}
