import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EditSermonPage } from './edit-sermon';

@NgModule({
  declarations: [
    EditSermonPage,
  ],
  imports: [
    IonicPageModule.forChild(EditSermonPage),
  ],
})
export class EditSermonPageModule {}
