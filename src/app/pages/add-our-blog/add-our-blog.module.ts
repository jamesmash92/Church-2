import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddOurBlogPage } from './add-our-blog';

@NgModule({
  declarations: [
    AddOurBlogPage,
  ],
  imports: [
    IonicPageModule.forChild(AddOurBlogPage),
  ],
})
export class AddOurBlogPageModule {}
