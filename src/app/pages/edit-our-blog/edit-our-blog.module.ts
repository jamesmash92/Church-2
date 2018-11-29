import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EditOurBlogPage } from './edit-our-blog';

@NgModule({
  declarations: [
    EditOurBlogPage,
  ],
  imports: [
    IonicPageModule.forChild(EditOurBlogPage),
  ],
})
export class EditOurBlogPageModule {}
