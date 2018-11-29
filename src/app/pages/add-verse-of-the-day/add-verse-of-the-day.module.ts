import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddVerseOfTheDayPage } from './add-verse-of-the-day';

@NgModule({
  declarations: [
    AddVerseOfTheDayPage,
  ],
  imports: [
    IonicPageModule.forChild(AddVerseOfTheDayPage),
  ],
})
export class AddVerseOfTheDayPageModule {}
