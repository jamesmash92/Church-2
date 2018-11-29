import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BiblestudyPage } from './biblestudy';

@NgModule({
  declarations: [
    BiblestudyPage,
  ],
  imports: [
    IonicPageModule.forChild(BiblestudyPage),
  ],
})
export class BiblestudyPageModule {}
