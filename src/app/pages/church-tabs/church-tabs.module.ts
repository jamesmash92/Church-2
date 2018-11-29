import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ChurchTabsPage } from './church-tabs';

@NgModule({
  declarations: [
    ChurchTabsPage,
  ],
  imports: [
    IonicPageModule.forChild(ChurchTabsPage),
  ]
})
export class ChurchTabsPageModule {}
