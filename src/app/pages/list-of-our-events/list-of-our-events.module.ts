import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListOfOurEventsPage } from './list-of-our-events';

@NgModule({
  declarations: [
    ListOfOurEventsPage,
  ],
  imports: [
    IonicPageModule.forChild(ListOfOurEventsPage),
  ],
})
export class ListOfOurEventsPageModule {}
