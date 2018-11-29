import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListOfOurBlogPage } from './list-of-our-blog';

@NgModule({
  declarations: [
    ListOfOurBlogPage,
  ],
  imports: [
    IonicPageModule.forChild(ListOfOurBlogPage),
  ],
})
export class ListOfOurBlogPageModule {}
