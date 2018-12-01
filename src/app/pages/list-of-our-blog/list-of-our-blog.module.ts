import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ListOfOurBlogPage } from './list-of-our-blog';

const routes: Routes = [
  {
    path: '',
    component: ListOfOurBlogPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ListOfOurBlogPage]
})
export class ListOfOurBlogPageModule {}
