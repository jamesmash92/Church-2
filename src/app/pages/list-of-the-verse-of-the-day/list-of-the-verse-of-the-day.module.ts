import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListOfTheVerseOfTheDayPage } from './list-of-the-verse-of-the-day';

@NgModule({
  declarations: [
    ListOfTheVerseOfTheDayPage,
  ],
  imports: [
    IonicPageModule.forChild(ListOfTheVerseOfTheDayPage),
  ],
})
export class ListOfTheVerseOfTheDayPageModule {}
