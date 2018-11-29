import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SermoncommentsPage } from './sermoncomments';

@NgModule({
  declarations: [
    SermoncommentsPage,
  ],
  imports: [
    IonicPageModule.forChild(SermoncommentsPage),
  ],
})
export class SermoncommentsPageModule {}
