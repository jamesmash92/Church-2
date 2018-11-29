import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EditOurEventsPage } from './edit-our-events';

@NgModule({
  declarations: [
    EditOurEventsPage,
  ],
  imports: [
    IonicPageModule.forChild(EditOurEventsPage),
  ],
})
export class EditOurEventsPageModule {}
