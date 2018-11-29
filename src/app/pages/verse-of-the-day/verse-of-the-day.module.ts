import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { VerseOfTheDayPage } from './verse-of-the-day';

@NgModule({
  declarations: [
    VerseOfTheDayPage,
  ],
  imports: [
    IonicPageModule.forChild(VerseOfTheDayPage),
  ],
})
export class VerseOfTheDayPageModule {}
