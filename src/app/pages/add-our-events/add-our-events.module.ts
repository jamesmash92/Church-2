import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddOurEventsPage } from './add-our-events';

@NgModule({
  declarations: [
    AddOurEventsPage,
  ],
  imports: [
    IonicPageModule.forChild(AddOurEventsPage),
  ],
})
export class AddOurEventsPageModule {}
