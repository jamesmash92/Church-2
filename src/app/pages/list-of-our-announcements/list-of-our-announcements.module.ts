import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ListOfOurAnnouncementsPage } from './list-of-our-announcements';

const routes: Routes = [
  {
    path: '',
    component: ListOfOurAnnouncementsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ListOfOurAnnouncementsPage]
})
export class ListOfOurAnnouncementsPageModule {}
