import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListOfOurAnnouncementsPage } from './list-of-our-announcements';

@NgModule({
  declarations: [
    ListOfOurAnnouncementsPage,
  ],
  imports: [
    IonicPageModule.forChild(ListOfOurAnnouncementsPage),
  ],
})
export class ListOfOurAnnouncementsPageModule {}
