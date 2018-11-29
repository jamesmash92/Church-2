import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AllMyDevotionsPage } from './all-my-devotions';

@NgModule({
  declarations: [
    AllMyDevotionsPage,
  ],
  imports: [
    IonicPageModule.forChild(AllMyDevotionsPage),
  ],
})
export class AllMyDevotionsPageModule {}
