import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EditVerseOfTheDayPage } from './edit-verse-of-the-day';

@NgModule({
  declarations: [
    EditVerseOfTheDayPage,
  ],
  imports: [
    IonicPageModule.forChild(EditVerseOfTheDayPage),
  ],
})
export class EditVerseOfTheDayPageModule {}
