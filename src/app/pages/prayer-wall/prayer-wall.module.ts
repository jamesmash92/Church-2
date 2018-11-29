import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PrayerWallPage } from './prayer-wall';

@NgModule({
  declarations: [
    PrayerWallPage,
  ],
  imports: [
    IonicPageModule.forChild(PrayerWallPage),
  ],
})
export class PrayerWallPageModule {}
