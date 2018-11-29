import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LogtobePage } from './logtobe';

@NgModule({
  declarations: [
    LogtobePage,
  ],
  imports: [
    IonicPageModule.forChild(LogtobePage),
  ],
})
export class LogtobePageModule {}
