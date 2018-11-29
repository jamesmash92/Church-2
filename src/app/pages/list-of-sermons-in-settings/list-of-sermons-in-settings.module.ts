import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListOfSermonsInSettingsPage } from './list-of-sermons-in-settings';

@NgModule({
  declarations: [
    ListOfSermonsInSettingsPage,
  ],
  imports: [
    IonicPageModule.forChild(ListOfSermonsInSettingsPage),
  ],
})
export class ListOfSermonsInSettingsPageModule {}
